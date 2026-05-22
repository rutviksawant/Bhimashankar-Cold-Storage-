import React from "react";
import "./ColdStorage.css";

import img1 from "../assets/cs1.jpeg";
import img2 from "../assets/cs2.jpeg";
import img3 from "../assets/cs3.jpeg";
import img4 from "../assets/cs4.jpeg";
import img5 from "../assets/cs5.jpeg";
import img6 from "../assets/cs6.jpeg";
import img8 from "../assets/cs8.jpeg";
import img9 from "../assets/cs9.jpeg";
import img10 from "../assets/cs10.jpeg";


function ColdStorage() {
  return (
    <section className="cold-storage-section">

      {/* HERO */}
      <div className="cs-hero">
        <h1>Cold Storage Facility</h1>
        <p>
          Our cold storage facility is designed to preserve the quality,
          freshness, and commercial value of agricultural produce through
          scientifically controlled storage environments.
        </p>
      </div>

      {/* ABOUT */}
      <div className="cs-block">
        <h2>About Our Cold Storage</h2>
        <p>
          The cold storage infrastructure is built to support long-term and
          short-term storage of temperature-sensitive commodities such as
          potatoes and other agricultural produce. Advanced refrigeration
          systems, insulated chambers, and controlled airflow ensure uniform
          cooling and stable internal conditions.
        </p>
      </div>

      IMAGE GRID
      <div className="cs-gallery">
        <img src={img1} alt="Cold storage chamber" />
        <img src={img2} alt="Potato cold storage racks" />
        <img src={img3} alt="Temperature controlled warehouse" />
        <img src={img4} alt="Cold storage interior" />
        <img src={img5} alt="Loading and unloading area" />
        <img src={img6} alt="Cold storage refrigeration system" />
        <img src={img8} alt="Cold storage security system" />
        <img src={img9} alt="Cold storage ventilation system" />
        <img src={img10} alt="Cold storage emergency exit" />
      </div>

      {/* FEATURES */}
      <div className="cs-block">
        <h2>Facility Features</h2>
        <ul className="cs-features">
          <li>Multi-chamber temperature-controlled storage</li>
          <li>High-capacity insulated storage rooms</li>
          <li>Energy-efficient refrigeration systems</li>
          <li>24×7 temperature and humidity monitoring</li>
          <li>Power backup and safety alarms</li>
          <li>Hygienic and pest-controlled environment</li>
        </ul>
      </div>

      {/* STORAGE PROCESS */}
      <div className="cs-process">
        <h2>Storage Process</h2>

        <div className="process-step">
          <h3>Receiving & Inspection</h3>
          <p>
            Incoming produce is inspected for quality, weight, and condition
            before storage.
          </p>
        </div>

        <div className="process-step">
          <h3>Grading & Stacking</h3>
          <p>
            Goods are systematically stacked to allow proper air circulation
            and easy identification.
          </p>
        </div>

        <div className="process-step">
          <h3>Temperature Regulation</h3>
          <p>
            Storage chambers maintain stable temperature and humidity levels
            suitable for long-term preservation.
          </p>
        </div>

        <div className="process-step">
          <h3>Dispatch & Handling</h3>
          <p>
            Controlled unloading ensures produce quality remains intact until
            delivery.
          </p>
        </div>
      </div>

      {/* SAFETY */}
      <div className="cs-block highlight">
        <h2>Safety & Quality Standards</h2>
        <p>
          The facility follows strict operational standards to minimize spoilage
          and maintain product integrity. Regular inspections, sanitation
          protocols, and monitoring systems ensure consistent quality throughout
          the storage period.
        </p>
      </div>

    </section>
  );
}

export default ColdStorage;
