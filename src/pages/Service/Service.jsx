import "./Service.scss";

const baseUrl = "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/service-item";

let services = [
  { key: "cust", label: "專業客服支援", alt: "icon" },
  { key: "sdk", label: "高效SDK整合", alt: "icon" },
  { key: "design", label: "創新軟體設計", alt: "icon" },
  { key: "develop", label: "定製遊戲開發", alt: "icon" },
  { key: "pub", label: "遊戲發行服務", alt: "icon" },
  { key: "opt", label: "平台設計優化", alt: "icon" }
].map(service => ({
  ...service,
  url: `${baseUrl}/${service.key}.svg`
}));


const Service = () => {
  return (
    <section className="service" id="service">
      <h2 className="service-title">專屬於您的最佳選擇</h2>
      <div className="service-dots">
        {services.map((service) => (
          <div
            key={service.key}
            className={`dot ${service.key}`}
            title={service.label}
          ></div>
        ))}
      </div>
      <div className="service-item-container">
        {services.map((service) => (
          <div key={service.key} className={`service-item ${service.key}`}>
            <div className="service-item-inner">
              <div className="service-item-icon">
                <img src={service.url} alt={service.icon} />
              </div>
              <span className={`service-word ${service.key}-word`}>{service.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
