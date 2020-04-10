const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mkdirp = require("mkdirp");
const securePin = require("secure-pin");
const mailgun = require("mailgun-js");
const uuidv1 = require("uuid/v1");
const axios = require("axios");
const XDate = require("xdate");

const MAILGUN_API = "26b2960b8ae02db40b88c8c21f69c262-5645b1f9-6b118c84";
const DOMAIN = "mail.polymorphlabs.io";

const mg = mailgun({ apiKey: MAILGUN_API, domain: DOMAIN });

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePassword = async ({ password, hashedPassword }) =>
  bcrypt.compare(password, hashedPassword);

const generateToken = ({ payload, secretKey }) =>
  new Promise(async (resolve, reject) => {
    jwt.sign(payload, secretKey, { expiresIn: "24h" }, (err, token) => {
      if (err) reject(err);

      resolve(token);
    });
  });

const validateToken = ({ token, secretKey }) =>
  new Promise(async (resolve, reject) => {
    jwt.verify(token, secretKey, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });

const generateMobileToken = () => uuidv1();

const ensureDirectory = ({ directory }) =>
  new Promise(async (resolve, reject) => {
    mkdirp(directory, (err) => {
      if (err) reject(err);
      resolve(true);
    });
  });

const generateMemberPin = async () =>
  new Promise(async (resolve, reject) => {
    try {
      securePin.generatePin(6, (pin) => {
        resolve(pin);
      });
    } catch (e) {
      reject(e);
    }
  });

const sendMail = async ({ subject, content, receiver }) => {
  const mailInfo = {
    from: "GMES & Africa <contact@gmes.polymorphlabs.io>",
    to: receiver,
    subject,
    text: content,
  };

  mg.messages().send(mailInfo, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
};

const sendSMS = async ({ phone, message }) => {
  const link = `https://apps.mnotify.net/smsapi?key=Fj369KxppKU0QJsngKBGdSNFS&to=${phone}&msg=${message}&sender_id=TicketLord`;

  try {
    return await axios.get(link);
  } catch (e) {
    throw new Error(e);
  }
};

const validatePin = async (phone, otp) => {
  if (process.env.NODE_ENV === "production") {
    const VALIDATE_LOGIN_PIN_URL =
      "https://hades.polymorphlabs.io/api/v1/otp/validate";
    try {
      const response = await axios.post(VALIDATE_LOGIN_PIN_URL, {
        phone,
        otp,
      });
      return response.data;
    } catch (e) {
      return false;
    }
  } else {
    return {
      success: true,
      message: "OTP validated successfully",
    };
  }
};

const generatePin = async (phone) => {
  if (process.env.NODE_ENV === "production") {
    console.log("Making real call");
    const GENERATE_LOGIN_PIN_URL = "https://hades.polymorphlabs.io/api/v1/otp";
    try {
      const response = await axios.post(GENERATE_LOGIN_PIN_URL, {
        phone,
        entity: "PCG",
      });
      return response.data;
    } catch (e) {
      return false;
    }
  } else {
    return {
      success: true,
      message: "OTP generated successfully",
    };
  }
};

const computeDaysAhead = (daysAhead) => {
  const today = new XDate();

  let days = [];
  for (let i = 0; i < daysAhead; i++) {
    let dayAhead = today.addDays(1);
    days.push(dayAhead.toString("ddd dS MMM"));
  }

  return days;
};

const parseAmpersandInString = (string, network) => {
  if (network === "MTN" || network === "VODAFONE") {
    return String(string).replace(/&/g, "&amp;");
  }

  return string;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  validateToken,
  ensureDirectory,
  generateMemberPin,
  sendMail,
  generateMobileToken,
  sendSMS,
  generatePin,
  validatePin,
  computeDaysAhead,
  parseAmpersandInString,
};
