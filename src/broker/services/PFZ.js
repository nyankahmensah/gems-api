function PFZService({ ORM }) {
  const createPFZ = async ({ effectiveDate, pfzImage }) => {
    return ORM.PFZ.save({
      effectiveDate,
      pfzImage
    });
  };

  return { createPFZ };
}

export default PFZService;
