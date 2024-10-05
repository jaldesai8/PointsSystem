const mongoose=require("mongoose")

let pointSchema = new mongoose.Schema({
    pointTo: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"UserModel" },
    pointFrom: { type: mongoose.Schema.Types.ObjectId, required: true,ref:"UserModel" },
    point:{type:Number,required:true}
},{
    timestamps:true
});

 const Points = mongoose.model("Point", pointSchema);
 module.exports = Points

