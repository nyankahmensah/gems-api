function ApprovalService({ ORM, utils }) {
  const requestApproval = async approval => {
    const existingApproval = await ORM.Approval.findOne({
      emailAddress: approval.emailAddress
    });

    if (existingApproval) {
      throw new Error("ApprovalAlreadyExist");
    }

    const savedApproval = await ORM.Approval.save(approval);

    await utils.sendMail({
      subject: "GMES & Africa Mobile App Approval Request",
      content:
        "Your request for approval has been received. It shall be vetted and we will revert soon",
      receiver: savedApproval.emailAddress
    });

    return savedApproval;
  };

  const getApprovals = async (filter = {}) => await ORM.Approval.find(filter);

  return {
    requestApproval,
    getApprovals
  };
}

module.exports = ApprovalService;
