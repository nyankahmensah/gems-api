function ApprovalService({ ORM, utils }) {
  const buildEmailContent = (name) => {
    return (
      "Dear " +
      name +
      "\nPlease, your request for access to the PFZ service has been received. " +
      "We will get back to you shortly\nBest regards,\n UG-GMES HelpDesk"
    );
  };
  // We create a request for approval and send emails to requester and system admin...
  const requestApproval = async (approval) => {
    const existingApproval = await ORM.Approval.findOne({
      emailAddress: approval.emailAddress,
    });

    if (existingApproval) {
      throw new Error("ApprovalAlreadyExist");
    }

    const savedApproval = await ORM.Approval.save(approval);

    if (process.env.NODE_ENV === "production") {
      utils.sendMail({
        subject: "GMES & Africa Mobile App Approval Request",
        content: buildEmailContent(savedApproval.name),
        receiver: savedApproval.emailAddress,
      });

      utils.sendMail({
        subject: "GMES & Africa Mobile App Approval Request",
        content: `A new approval request has been made by ${savedApproval.emailAddress} from ${savedApproval.organization} - ${savedApproval.country}. Follow this <a href=${process.env.WEB_ADDRESS}>link</a> to manage this request`,
        receiver: process.env.ADMINISTRATOR_EMAIL,
      });
    }

    return savedApproval;
  };

  // We approve request and create user account with details from request...
  const approve = async ({ approval }) => {
    const acceptedRequest = await ORM.Approval.findByIdAndUpdate(approval, {
      status: "approved",
    });

    // Generating user account pin
    const newUserAccountPin = await utils.generateMemberPin();

    // Hashing user account pin
    const hashedNewUserAccountPin = await utils.hashPassword(newUserAccountPin);

    // Saving new user account to DB
    await ORM.MobileUser.save({
      emailAddress: acceptedRequest.emailAddress,
      phoneNumber: acceptedRequest.phoneNumber,
      organization: acceptedRequest.organization,
      password: hashedNewUserAccountPin,
    });

    if (process.env.NODE_ENV === "production") {
      await utils.sendMail({
        subject: "GMES & Africa Mobile App Approval Request",
        content: `Your request for approval has been accepted. You can login to GMES Mobile using the following credentials 
          Access Token - ${newUserAccountPin}`,
        receiver: acceptedRequest.emailAddress,
      });
    }

    return acceptedRequest;
  };

  // We reject request and disable user account with details from request...
  const reject = async ({ approval, denialReason }) => {
    const rejectedRequest = await ORM.Approval.findByIdAndUpdate(approval, {
      status: "denied",
      denialReason,
    });

    // Disabling user account
    await ORM.MobileUser.findByIdAndUpdate(approval, {
      active: false,
    });

    if (process.env.NODE_ENV === "production") {
      await utils.sendMail({
        subject: "GMES & Africa Mobile App Approval Request",
        content: `Your request for approval has been rejected for this reason..
        ${rejectedRequest.denialReason}`,
        receiver: rejectedRequest.emailAddress,
      });
    }

    return rejectedRequest;
  };

  // Get approvals...
  const getApprovals = async (filter = {}) => await ORM.Approval.find(filter);

  return {
    requestApproval,
    getApprovals,
    approve,
    reject,
  };
}

module.exports = ApprovalService;
