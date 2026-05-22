
// import React, { useState } from "react";
// import "./EnquiryForm.css";

// const EnquiryForm = ({ closeForm }) => {

//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobile: "",
//     email: "",
//     storageType: "",
//     temperature: "",
//     quantity: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch("http://localhost:5000/api/enquiries", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData)
//     });

//     alert("Enquiry Submitted Successfully");
//     closeForm();
//   };

//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <h2>Cold Storage Enquiry</h2>

//         <form onSubmit={handleSubmit}>
//           <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
//           <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
//           <input name="email" placeholder="Email Address" onChange={handleChange} required />

//           <select name="storageType" onChange={handleChange} required>
//             <option value="">Select Storage Type</option>
//             <option>Fruit & Vegetable</option>
//             <option>Meat & Dairy</option>
//             <option>Pharmaceutical</option>
//             <option>Multi-Temperature</option>
//           </select>

//           <input name="temperature" placeholder="Required Temperature (°C)" onChange={handleChange} required />
//           <input name="quantity" placeholder="Quantity (in Tons)" onChange={handleChange} required />
//           <textarea name="message" placeholder="Additional Message" onChange={handleChange} required></textarea>

//           <div className="form-buttons">
//             <button type="submit" className="submit-btn">Submit Enquiry</button>
//             <button type="button" className="close-btn" onClick={closeForm}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EnquiryForm;












import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = ({ closeForm }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    storageType: "",
    temperature: "",
    quantity: "",
    message: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit enquiry to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/add-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Enquiry Submitted Successfully");
        closeForm();
      } else {
        alert("Failed to submit enquiry");
      }

    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="form-overlay">
      <div className="form-container">

        <h2>Cold Storage Enquiry</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <select
            name="storageType"
            onChange={handleChange}
            required
          >
            <option value="">Select Storage Type</option>
            <option>Fruit & Vegetable</option>
            <option>Meat & Dairy</option>
            <option>Pharmaceutical</option>
            <option>Multi-Temperature</option>
          </select>

          <input
            name="temperature"
            placeholder="Required Temperature (°C)"
            onChange={handleChange}
            required
          />

          <input
            name="quantity"
            placeholder="Quantity (in Tons)"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            onChange={handleChange}
            required
          ></textarea>

          <div className="form-buttons">

            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>

            <button
              type="button"
              className="close-btn"
              onClick={closeForm}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default EnquiryForm;















// import React,{useState} from "react";
// import axios from "axios";

// function EnquiryForm(){

// const [form,setForm] = useState({
// name:"",
// email:"",
// contact:"",
// message:""
// });

// const handleChange=(e)=>{
// setForm({...form,[e.target.name]:e.target.value});
// }

// const handleSubmit=async(e)=>{
// e.preventDefault();

// await axios.post("http://localhost:5000/api/add-enquiry",form);

// alert("Enquiry Submitted Successfully");

// }

// return(

// <form onSubmit={handleSubmit}>

// <input
// name="name"
// placeholder="Enter Name"
// onChange={handleChange}
// />

// <input
// name="email"
// placeholder="Enter Email"
// onChange={handleChange}
// />

// <input
// name="contact"
// placeholder="Enter Contact"
// onChange={handleChange}
// />

// <textarea
// name="message"
// placeholder="Enter Message"
// onChange={handleChange}
// />

// <button type="submit">
// Submit Enquiry
// </button>

// </form>

// );

// }

// export default EnquiryForm;