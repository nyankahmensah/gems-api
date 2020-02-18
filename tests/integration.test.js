const MongoMemoryServer = require('mongodb-memory-server').default;
const RedisMock = require('ioredis-mock');
const Broker = require('../src/broker');
const data = require('./data');

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

describe('Integration Tests', () => {
  describe('Message tests', () => {
    it('Creates a new message that takes PT, FR, and EN', async () => {
      const newMessage = await broker.MessageService.createMessage({
        en: data.ENMessage,
        pt: data.PTMessage,
        fr: data.FRMessage,
        effectiveDate: data.dateIntended
      });

      expect(newMessage).toMatchObject({
        en: data.ENMessage,
        pt: data.PTMessage,
        fr: data.FRMessage,
        effectiveDate: new Date(data.dateIntended)
      })
    });
  });
});
