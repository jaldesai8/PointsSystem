const UserModel = require("../model/user");

const createUser = async (req, res) => {
  try {
    const  name  = req.body.name;
    const data = await UserModel.create({name});
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await UserModel.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const name = req.body.name
    const id = req.bode._id
    const data = await UserModel.findOneAndUpdate(id, { name }, { new: true });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: "Somthing went wrong." });
  }
};


module.exports ={
  createUser,
  updateUser,
  getUsers,
};
