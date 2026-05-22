import "./Services.css";

function Services() {
  const services = [
    { title: "Multi-Temperature Storage", desc: "Flexible climate zones" },
    { title: "Controlled Temperature", desc: "Precise climate management" },
    { title: "Fruit & Vegetable Storage", desc: "Optimized freshness" },
    { title: "Meat & Dairy Storage", desc: "Preserving perishables" },
    { title: "Pharmaceutical Storage", desc: "GMP-compliant units" },
    { title: "Fire & Safety Systems", desc: "Advanced protection" },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
