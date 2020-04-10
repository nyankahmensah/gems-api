const utils = require("../src/broker/utils");
const data = require("./data");

process.env.UPLOAD_FOLDER = `${__dirname}/uploads`;

describe("Utility tests", () => {
  describe("Password utility tests", () => {
    const password = "anewpassword";
    let hashedPassword = "";
    let token = "";

    it("Should hash password", async () => {
      hashedPassword = await utils.hashPassword(password);
    });

    it("Should check hashed password and verify correctly", async () => {
      const status = await utils.comparePassword({ password, hashedPassword });
      expect(status).toBe(true);
    });

    it("Should generate JSON web token for user", async () => {
      token = await utils.generateToken({
        payload: {
          name: "Raaj",
          email: "raaj@nexthealth.io",
          password: "anewpassword",
        },
        secretKey: "ojfo9j8f98fjh938hjf9ohf",
      });
    });

    it("Should verify generated JSON web token", async () => {
      const payload = await utils.validateToken({
        token,
        secretKey: "ojfo9j8f98fjh938hjf9ohf",
      });

      expect(payload).toMatchObject({
        name: "Raaj",
        email: "raaj@nexthealth.io",
        password: "anewpassword",
      });
    });
  });

  describe("Date utility tests", () => {
    it("Computes days ahead", () => {
      utils.computeDaysAhead(3);
    });
  });

  describe("String utility tests", () => {
    it("Should parse ampersand in string", () => {
      const string = "Jack & Jill went up the hill";

      let parsedString = utils.parseAmpersandInString(string, "MTN");
      expect(parsedString).toBe("Jack &amp; Jill went up the hill");
    });
  });
});
