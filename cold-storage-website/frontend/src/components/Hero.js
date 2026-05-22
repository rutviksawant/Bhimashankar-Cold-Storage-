





// import React, { useState } from "react";
// import "./Hero.css";
// import bgImage from "../assets/cold-bg-image.PNG";
// import EnquiryForm from "./EnquiryForm";

// const Hero = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <>
//       <section
//         className="hero"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       >
//         <div className="overlay"></div>

//         <div className="hero-content">
//           <h1>Potato Cold Storage & Logistics Solutions</h1>
//           <p>Safe, Reliable & Temperature Controlled Warehousing</p>
//         </div>
         
//       </section>

//        {showForm && (<EnquiryForm closeForm={() => setShowForm(false)} />)}
   
     
//     </>
//   );
// };

// export default Hero;


import React from "react";
import "./Hero.css";

import coldBg from "../assets/back12345.png";

const Hero = () => {
  return (
    <div className="hero">

      <img
        src={coldBg}
        alt="Cold Storage"
        className="hero-image"
      />

    </div>
  );
};

export default Hero;