const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./src/router/user_router.js');
const pointsRouter = require('./src/router/points_router.js');

const app = express();
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/points",pointsRouter);

app.listen(6000,()=>{
  mongoose.
    connect("mongodb+srv://desaijal812:Abc123@cluster0.hl3ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log(`Server started on port ` + 6000);
      })
      .catch((err) => console.log(err.message));
})