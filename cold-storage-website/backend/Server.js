// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/coldstorage");

// app.use("/api/enquiries", require("./routes/EnquiryRoutes"));

// app.listen(5000, () => {
//   console.log("Backend running on port 5000");
// });

// const adminRoutes = require("./routes/adminRoutes");
// app.use("/api/admin", adminRoutes);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const enquiryRoutes = require("./routes/enquiry");

const app = express();

app.use(cors());
app.use(express.json());

// Simple request logger for debugging
app.use((req, res, next) => {
	console.log(new Date().toISOString(), req.method, req.originalUrl);
	next();
});

mongoose.connect("mongodb://127.0.0.1:27017/coldstorage")
.then(()=>console.log("Database Connected"));

app.use("/api/enquiries", enquiryRoutes);

app.listen(5000, ()=>{
console.log("Server running on port 5000");
});