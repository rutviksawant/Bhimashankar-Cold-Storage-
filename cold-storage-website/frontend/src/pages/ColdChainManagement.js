


import "./ColdChainManagement.css";
import management from "../assets/management.PNG";

function ColdChainManagement() {
  return (
    <section className="ccm-section">
      
      <div className="ccm-hero">
        <div className="ccm-text">
          <h1>Cold Chain Management</h1>
          <p>
            Our Cold Chain Management services deliver end-to-end control,
            visibility, and reliability for temperature-sensitive products
            such as potatoes.
          </p>
        </div>

        <div className="cmm-image">
          <img src={management} alt="Cold chain monitoring" />
        </div>
      </div>

      <h2>How It Works</h2>

      <div className="ccm-steps">
        <div className="step">
          <h3>Understanding Operational Requirements</h3>
          <p>
            We analyse storage volumes, seasonal demand, temperature needs,
            and logistics timelines.
          </p>
        </div>

        <div className="step">
          <h3>Customised Cold Chain Planning</h3>
          <p>
            Tailored workflows ensure optimal potato preservation and
            efficiency.
          </p>
        </div>

        <div className="step">
          <h3>Seamless Execution & Control</h3>
          <p>
            Daily operations are managed through SOPs and automated systems.
          </p>
        </div>

        <div className="step">
          <h3>Real-Time Visibility</h3>
          <p>
            Continuous monitoring enables proactive decision-making.
          </p>
        </div>
      </div>

      <h2>Why Choose Our Cold Chain Management?</h2>

      <div className="ccm-benefits">
        <div className="benefit">
          <h4>Greater Efficiency</h4>
          <p>Reduced losses and optimised operating costs.</p>
        </div>

        <div className="benefit">
          <h4>Optimised Planning</h4>
          <p>Adaptive cold chain strategies aligned with demand.</p>
        </div>

        <div className="benefit">
          <h4>Enhanced Control</h4>
          <p>Full visibility across storage and movement stages.</p>
        </div>

        <div className="benefit">
          <h4>Increased Resilience</h4>
          <p>Reliable operations even during disruptions.</p>
        </div>
      </div>

    </section>
  );
}

export default ColdChainManagement;

