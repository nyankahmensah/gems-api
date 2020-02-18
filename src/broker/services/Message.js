function MessageService({ ORM }) {
  const createMessage = async ({ pt, en, fr, effectiveDate }) => {
    try{
      return ORM.Message.save({
        pt, en, fr, effectiveDate,
      });
    }catch (e) {
      throw e;
    }
  };
  const getMessage = async filter => ORM.Message.find(filter);
  const getMessageForDay = async ({ dateStart, dateEnd }) => ORM.Message.findOne({
    effectiveDate: {
      $gte: dateStart, $lt: dateEnd,
    },
  });

  const broadcastMessage = async ({ category }) => ORM.Message.findOne({ category });


  return { createMessage, getMessage, broadcastMessage, getMessageForDay };
}

module.exports = MessageService;
