const express = require('express');
const {createUser, updateUser , getUsers} = require('../controller/user_controller.js');

const userRouter = express.Router();

userRouter.post("/",createUser)

userRouter.patch("/", updateUser);

userRouter.get("/", getUsers);

module.exports = userRouter