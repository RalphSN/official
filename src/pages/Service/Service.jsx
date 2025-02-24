import { useState } from "react";
import "./Service.scss";

const baseUrl =
  "https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/service-item";

let services = [
  {
    key: "cust",
    label: "專業客服支援",
    description:
      "快速響應玩家需求，解決各類問題，提升用戶滿意度並加強玩家忠誠度。",
  },
  {
    key: "sdk",
    label: "高效SDK整合",
    description:
      "定制化的SDK設計與整合服務，協助開發者輕鬆將遊戲功能與外部平台結合。",
  },
  {
    key: "design",
    label: "創新軟體設計",
    description:
      "專注於創新與功能優化，幫助客戶開發出高效能、易用且具有競爭力的程式。",
  },
  {
    key: "develop",
    label: "定製遊戲開發",
    description:
      "根據您的需求與創意，量身定制。從概念設計到最終實現，帶來專屬的遊戲體驗。",
  },
  {
    key: "pub",
    label: "遊戲發行服務",
    description: "提供遊戲發行解決方案，協助遊戲在平台上順利發行。",
  },
  {
    key: "opt",
    label: "平台設計優化",
    description: "為各類遊戲提供平台設計與優化服務，提升用戶互動體驗。",
  },
].map((service) => ({
  ...service,
  url: `${baseUrl}/${service.key}.svg`,
}));

const Service = () => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (key) => {
    setHoveredKey(key);
    setIsHovered(true);
    setTimeout(() => {
      if (hoveredKey === key) {
        setIsHovered(true);
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTimeout(() => {
      if (!isHovered) {
        setHoveredKey(null);
      }
    }, 100);
  };

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
          <div
            key={service.key}
            className={`service-item ${service.key}`}
            onMouseEnter={() => handleMouseEnter(service.key)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="service-item-inner"
              style={{
                transform: hoveredKey === service.key ? "scale(2)" : "scale(1)",
                zIndex: hoveredKey === service.key ? "10" : "5",
                transition: "transform 0.2s ease-in-out, z-index 0.1s",
              }}
            >
              <div className="service-item-icon">
                <img src={service.url} alt={service.label} />
              </div>
              <span className={`service-word ${service.key}-word`}>
                {service.label}
              </span>
              <div
                className={`service-item-details ${service.key}-word`}
                style={{
                  visibility: hoveredKey === service.key ? "visible" : "hidden",
                  opacity: isHovered && hoveredKey === service.key ? "1" : "0",
                  transition:
                    "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out",
                }}
              >
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
