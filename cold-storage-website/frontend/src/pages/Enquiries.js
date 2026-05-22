import React, { useEffect, useState } from "react";

function Enquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/enquiries")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Enquiries</h2>

      {data.length === 0 && <p>No enquiries found</p>}

      {data.map((e, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ccc", marginBottom: "15px" }}>
          <p><b>Name:</b> {e.fullName}</p>
          <p><b>Mobile:</b> {e.mobile}</p>
          <p><b>Email:</b> {e.email}</p>
          <p><b>Storage Type:</b> {e.storageType}</p>
          <p><b>Temperature:</b> {e.temperature || "N/A"}</p>
          <p><b>Quantity:</b> {e.quantity || "N/A"}</p>
          <p><b>Message:</b> {e.message || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default Enquiries;
