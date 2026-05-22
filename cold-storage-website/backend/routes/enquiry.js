// const express = require("express");
// const router = express.Router();

// const Enquiry = require("../Models/Enquiry");

// // Add enquiry
// router.post("/add-enquiry", async(req,res)=>{

// try{

// const enquiry = new Enquiry({
// name:req.body.name,
// email:req.body.email,
// contact:req.body.contact,
// message:req.body.message
// });

// await enquiry.save();

// res.status(201).json({
// message:"Enquiry submitted successfully"
// });

// }

// catch(error){
// res.status(500).json(error);
// }

// });


// router.get("/get-enquiries", async(req,res)=>{

// try{

// const data = await Enquiry.find().sort({date:-1});

// res.json(data);

// }

// catch(error){
// res.status(500).json(error);
// }

// });

// module.exports = router;





// router.post("/add-enquiry", async (req, res) => {

//   try {

//     const enquiry = new Enquiry(req.body);

//     await enquiry.save();

//     res.status(201).json({
//       message: "Enquiry submitted successfully"
//     });

//   } catch (error) {
//     res.status(500).json(error);
//   }

// });



const express = require("express");
const router = express.Router();

const Enquiry = require("../Models/Enquiry");

/* ADD ENQUIRY */
router.post("/add", async (req, res) => {

  try {

    const newEnquiry = new Enquiry({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      message: req.body.problem
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }

});

module.exports = router;