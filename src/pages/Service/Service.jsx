import "./Service.scss";

const services = [
  { key: "cust", label: "專業客服支援" },
  { key: "sdk", label: "高效SDK整合" },
  { key: "design", label: "創新軟體設計" },
  { key: "develop", label: "定製遊戲開發" },
  { key: "pub", label: "遊戲發行服務" },
  { key: "opt", label: "平台設計優化" }
];

const Service = () => {
  return (
    <section className="service">
      <h2 className="service-title">專屬於您的最佳選擇</h2>
      <div className="service-dots">
        {services.map(service => (
          <div key={service.key} className={`dot ${service.key}`} title={service.label}></div>
        ))}
      </div>
      <div className="service-item-container">
        {services.map(service => (
          <div key={service.key} className={`service-item ${service.key}`}>
            <span>{service.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

