/*
    This takes a model and exposes functions that map to
    database specific methods
 */

module.exports = (Model) => {
  const save = async (data) => new Model(data).save();

  const findOneAndUpdate = async (condition, data) =>
    Model.findOneAndUpdate(condition, data, { new: true });

  const findOneAndRemove = async (condition) =>
    Model.findByIdAndRemove(condition);

  const findById = async (id) => Model.findById(id);

  const findByIdAndUpdate = async (id, data) =>
    Model.findByIdAndUpdate(id, data, { new: true });

  const find = async (condition) =>
    Model.find(condition).sort({ updatedAt: -1 });

  const count = async (condition) => Model.find(condition).countDocuments();

  const findOne = async (condition) =>
    Model.findOne(condition).sort({ updatedAt: -1 });

  const paginate = async (condition, page = 1) => {
    const { docs: data, totalPages, page } = await Model.paginate(condition, { page, limit: 10 })
    return { data, totalPages, page }
  }

  return {
    save,
    find,
    findById,
    findByIdAndUpdate,
    findOne,
    findOneAndUpdate,
    findOneAndRemove,
    count,
    paginate
  };
};
