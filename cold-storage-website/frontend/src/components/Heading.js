

import React, { useState } from "react";
import "./Heading.css";
import EnquiryForm from "./EnquiryForm";

export const Heading = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <header className="heading">
        <div className="logo">
          ❄️ BHIMASHANKAR AGRO COLD-CHAIN AND PROCESSING PRODUCER PVT.LTD.
        </div>
{/* 
        <button
          className="enquiry-btn"
          onClick={() => setShowForm(true)}
        >
          Send Enquiry
        </button> */}
      </header>

      {showForm && (
        <EnquiryForm closeForm={() => setShowForm(false)} />
      )}
    </>
  );
};
