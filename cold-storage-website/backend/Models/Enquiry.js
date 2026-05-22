// const mongoose = require("mongoose");

// const enquirySchema = new mongoose.Schema({
//   fullName: String,
//   mobile: String,
//   email: String,
//   storageType: String,
//   temperature: String,
//   quantity: String,
//   message: String,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("Enquiry", enquirySchema);


const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true
},

contact:{
type:String,
required:true
},

message:{
type:String
},

date:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Enquiry", enquirySchema);


