const express= require('express');
const { givePoints ,getRewards , getPoints,deletePoints} = require('../controller/point_controller');

const pointsRouter = express.Router();

pointsRouter.post( "/:id",givePoints);
pointsRouter.get( "/rewards/:id",getRewards);
pointsRouter.get( "/p5/:id",getPoints);
pointsRouter.delete("/:id",deletePoints)

module.exports = pointsRouter