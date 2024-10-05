const Points = require("../model/points");
const UserModel = require("../model/user");

const givePoints = async (req,res) => {
    
    try {
        const userId = req.params.id
        const reciverId = req.body.reciverId
        const point = req.body.point
        
        const points = await Points.create({pointTo:userId,pointFrom:reciverId,point : point})
        
        const isUser = await UserModel.findById(userId)
      
        const userTo = await UserModel.findByIdAndUpdate(
            userId,
            { $push: { "P5.P5History": points._id }, $inc: { "P5.points": -point } },
            { new: true }
          );

        
          const userFrom = await UserModel.findByIdAndUpdate(
            reciverId,
            {
              $push: { "reward.RewardHistory": points._id },
              $inc: { "reward.points": point },
            },
            { new: true }
          );
        
        
          return res.status(200).json({points});
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error.message})
    }
}

const getRewards = async (req ,res) => {
    try {
        const id = req.params.id
        const data = await Points.find({pointFrom:id}).populate("pointTo")
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error.message})
    }
}

const getPoints = async (req ,res) => {
    try {
        const id = req.params.id
        const data = await Points.find({pointTo:id}).populate("pointFrom")
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(400).json({message : error.message})
    }
}

const deletePoints = async (req ,res) => {
   try {
     const pointId = req.params.id
     
     const pointData = await Points.findById(pointId)
 
     const userTo = await UserModel.findByIdAndUpdate(
        pointData.pointTo,
        { $pull: { "P5.P5History": pointData._id }, $inc: { "P5.points": pointData.point } },
        { new: true }
      );

    
      const userFrom = await UserModel.findByIdAndUpdate(
        pointData.pointFrom,
        {
          $pull: { "reward.RewardHistory": pointData._id },
          $inc: { "reward.points": -pointData.point },
        },
        { new: true }
      );

     const deleteId = await Points.findByIdAndDelete(pointId)
     return res.status(200).json({message : "Deleted Successfully"})
   } catch (error) {
    return res.status(400).json(error.message)
   }
}
module.exports = {givePoints,getRewards,getPoints,deletePoints}