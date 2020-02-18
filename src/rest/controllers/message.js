const messageTemplates = require('./messageTemplates');


exports.broadcastMessage = async (req, res) => {
  const currentDate = new Date();
  const currentDateStart = currentDate.setHours(0, 0, 0, 0);
  const currentDateEnd = currentDate.setHours(23, 59, 59, 0);

  const message = await req.broker.MessageService.getMessageForDay({
    dateStart: currentDateStart,
    dateEnd: currentDateEnd,
  });


  if(!message){
    return res.status(200).json({
      ...req.body,
      MSG: messageTemplates.welcomeMessage + "No forecast has been provided for today",
      MSGTYPE: false
    });
  }

  return res.status(200).json({
    ...req.body,
    MSG: messageTemplates.welcomeMessage + message.en,
    MSGTYPE: false
  });
};

exports.receiveMessage = async (req, res) => {
  const { english, portuguese, french, effectiveDate } = req.body;

  if (!effectiveDate) {
    return res.status(403).send({
      success: false,
      message: 'InvalidEffectiveDate',
    });
  }

  try {
    await req.broker.MessageService.createMessage({
      en: english, pt: portuguese, fr: french, effectiveDate,
    });
    return res.status(201).send({
      success: true,
      message: 'Message saved successfully',
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};