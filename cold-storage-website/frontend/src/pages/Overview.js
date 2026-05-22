import './Overview.css';
import potatoImage from '../assets/overview-cold.PNG';

function Overview() {
  return (
    <section id="overview" className="section">
      <h1>Overview</h1>
      
      <h2>Reliable Cold Storage & Cold Chain Solutions</h2><br></br>
      <p>Our Cold Storage Facility is designed to preserve the freshness, quality, and nutritional value of perishable products through advanced temperature-controlled environments. We provide reliable and efficient cold storage solutions for fruits, vegetables, dairy products, pharmaceuticals, and other temperature-sensitive goods.

Equipped with modern refrigeration systems, 24×7 monitoring, and hygienic storage conditions, our facility ensures optimal preservation and extended shelf life. We follow strict quality and safety standards to minimize spoilage, reduce post-harvest losses, and support farmers, traders, and businesses across the supply chain.

With flexible storage capacities, easy accessibility, and professional handling, our cold storage acts as a vital link between production and market distribution—helping customers maintain product quality while improving profitability..</p>
     <br></br> <br></br>
     <img src={potatoImage} alt="Overview" className="overview-image" />
     <h2>Why Choose Our Cold Storage Facility?</h2><br></br>



     <h3>"Temperature-Controlled Warehousing"</h3>
     <p>Multiple temperature zones to suit chilled, frozen, and deep-freeze storage requirements.</p>
     <br></br>
     <h3>"Advanced Monitoring Systems"</h3>
     <p>24×7 temperature and humidity monitoring to maintain consistent storage conditions.</p><br></br>
     <h3>"High Safety & Hygiene Standards"</h3>
     <p>Clean, secure, and pest-controlled environments that meet industry regulations.</p><br></br>
     <h3>"Scalable Storage Capacity"</h3>
     <p>Flexible storage solutions for small businesses, distributors, and large enterprises.</p><br></br>
     <h3>"Efficient Inventory Management"</h3>
     <p>Systematic handling, labeling, and tracking of stored goods to reduce losses.</p>
     <br></br><br></br>
     <p>We provide end-to-end cold chain solutions including storage, handling, and logistics coordination. Our experienced team ensures smooth movement of goods while maintaining required temperature conditions throughout the supply chain.</p>
     <br></br>
     <p>We focus on minimizing spoilage, reducing operational risks, and delivering dependable cold storage services. Our infrastructure is built to support long-term storage as well as short-term inventory needs with maximum efficiency.</p>


     



    
    
    </section>
  );
}
export default Overview;
