function PFZService({ ORM }) {
  const createPFZ = async ({ effectiveDate, pfzImage }) => {
    return ORM.PFZ.save({
      effectiveDate,
      pfzImage
    });
  };

  const getPFZ = async ({ effectiveDate }) => {
    const startDate = new Date(effectiveDate).setHours(0, 0, 0, 0);
    const endDate = new Date(effectiveDate).setHours(23, 59, 59, 59);

    return ORM.PFZ.findOne({
       effectiveDate: {
         $gte: new Date(startDate),
         $lt: endDate
       }
    })
  }

  return { createPFZ, getPFZ };
}

module.exports = PFZService;
