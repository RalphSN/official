import "./Service.scss";

const services = [
  { key: "cust", label: "客製化" },
  { key: "sdk", label: "SDK 開發" },
  { key: "design", label: "UI/UX 設計" },
  { key: "develop", label: "前後端開發" },
  { key: "pub", label: "發布與維護" },
  { key: "opt", label: "效能優化" }
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

