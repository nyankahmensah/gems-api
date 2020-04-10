const MongoMemoryServer = require("mongodb-memory-server").default;
const RedisMock = require("ioredis-mock");
const Broker = require("../src/broker");
const data = require("./data");

let broker;
let mongoServer;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;

beforeAll(async () => {
  mongoServer = new MongoMemoryServer({
    debug: false,
  });
  const databaseURI = await mongoServer.getConnectionString();
  const redisURI = new RedisMock();
  broker = await Broker({
    databaseURI,
    redisURI,
  });
});

afterAll(async () => {
  await mongoServer.stop();
});

describe("Integration Tests", () => {
  describe("Approval tests", () => {
    it("Should request for approval and return a PENDING status", async () => {
      const requestApproval = await broker.ApprovalService.requestApproval(
        data.approvalRequest
      );

      expect(requestApproval).toMatchObject({
        ...data.approvalRequest,
        status: "pending",
      });
    });

    it("Should accept request for approval by returning an APPROVED status", async () => {
      const [
        existingApprovalRequest,
      ] = await broker.ApprovalService.getApprovals();

      const approvedRequest = await broker.ApprovalService.approve({
        approval: existingApprovalRequest._id,
      });

      expect(approvedRequest.status).toBe("approved");
    });

    it("Should reject request for approval by returning a DENIED status", async () => {
      const [
        existingApprovalRequest,
      ] = await broker.ApprovalService.getApprovals();

      const approvedRequest = await broker.ApprovalService.reject({
        approval: existingApprovalRequest._id,
      });

      expect(approvedRequest.status).toBe("denied");
    });
  });
});
