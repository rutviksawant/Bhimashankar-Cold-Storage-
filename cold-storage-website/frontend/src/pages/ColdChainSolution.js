// 

import React from "react";
import "./ColdChainSolution.css";

function ColdChainSolution() {
  return (
    <div className="cold-chain-solution" id="solution">
      <h1>Potato Cold Chain Solution</h1>

      <h2>End-to-End Potato Cold Chain Management</h2>
      <p>
        Our Potato Cold Chain Solution is designed to preserve freshness,
        quality, and market value from harvest to distribution. We provide a
        fully integrated cold chain system that controls temperature, humidity,
        and handling at every stage—reducing post-harvest losses and ensuring
        long-term storage efficiency.
      </p>

      <h3>Post-Harvest Handling</h3>
      <p>
        Freshly harvested potatoes are carefully handled to minimize mechanical
        damage. Proper curing and pre-cooling are carried out to stabilize
        moisture levels and prepare the produce for long-term storage.
      </p>

      <h3>Temperature-Controlled Cold Storage</h3>
      <p>
        Potatoes are stored under precisely regulated conditions to prevent
        sprouting, rotting, and weight loss.
      </p>

      <h3>Monitoring & Quality Control</h3>
      <p>
        Our facility uses 24×7 digital monitoring systems to track temperature,
        humidity, and storage performance in real time.
      </p>

      <h3>Cold Chain Logistics</h3>
      <p>
        We ensure potatoes remain within the cold chain during transportation
        and dispatch to markets, processors, or exporters.
      </p>

      {/* IMAGE SLIDER GRID */}
      <div className="benefit-slider-grid">
        <div className="slider-item">
          <div className="slider-box slider-1"></div>
          <p className="slider-label">Harvesting</p>
        </div>
        <div className="slider-item">
          <div className="slider-box slider-2"></div>
          <p className="slider-label">Temperature Control</p>
        </div>
        <div className="slider-item">
          <div className="slider-box slider-3"></div>
          <p className="slider-label">Monitoring</p>
        </div>
        <div className="slider-item">
          <div className="slider-box slider-4"></div>
          <p className="slider-label">Transportation</p>
        </div>
      </div>

      <h3>Benefits</h3>
      <p className="benefits-text">
        Reduced post-harvest losses.<br />
        Better price realization.<br />
        Year-round market availability.<br />
        Improved inventory planning.<br />
        Enhanced product quality.
      </p>
    </div>
  );
}

export default ColdChainSolution;
