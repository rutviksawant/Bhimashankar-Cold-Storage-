// import React from "react";
// import { useState } from "react";

// import "./EnquiryForm.css";

// const EnquiryForm = ({ closeForm }) => {
//   return (
//     <div className="form-overlay">
//       <div className="form-container">
//         <h2>Cold Storage Enquiry</h2>

//         <form>
//           <input type="text" placeholder="Full Name" required />
//           <input type="text" placeholder="Mobile Number" required />
//           <input type="email" placeholder="Email Address" required />

//           <select required>
//             <option value="">Select Storage Type</option>
//             <option>Fruit & Vegetable</option>
//             <option>Meat & Dairy</option>
//             <option>Pharmaceutical</option>
//             <option>Multi-Temperature</option>
//           </select>

//           <input type="text" placeholder="Required Temperature (°C)" />
//           <input type="number" placeholder="Quantity (in Tons)" />

//           <textarea placeholder="Additional Message"></textarea>

//           <div className="form-buttons">
//             <button type="submit" className="submit-btn">
//               Submit Enquiry
//             </button>
//             <button
//               type="button"
//               className="close-btn"
//               onClick={closeForm}
//             >
//               Cancel
//             </button>
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    alert("Enquiry Submitted Successfully");
    closeForm();
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Cold Storage Enquiry</h2>

        <form onSubmit={handleSubmit}>
          <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
          <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
          <input name="email" placeholder="Email Address" onChange={handleChange} required />

          <select name="storageType" onChange={handleChange} required>
            <required value="">Select Storage Type</required>
            <option>Fruit & Vegetable</option>
            <option>Meat & Dairy</option>
            <option>Pharmaceutical</option>
            <option>Multi-Temperature</option>
          </select>

          <input name="temperature" placeholder="Required Temperature (°C)" />
          <input name="quantity" placeholder="Quantity (in Tons)" />
          <textarea name="message" placeholder="Additional Message"></textarea>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Submit Enquiry</button>
            <button type="button" className="close-btn" onClick={closeForm}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
