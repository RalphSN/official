import "./Footer.scss";

const Footer = () => {
  const services = [
    "定製遊戲開發",
    "遊戲發行服務",
    "專業客服支援",
    "創新軟體設計",
    "平台設計優化",
    "高效SDK整合"
  ];

  return (
    <footer className="footer" id="footer">
      <div className="footer-info">
        <div className="footer-logo">
          <img 
            src="https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/logo-thin.png" 
            alt="公司標誌" 
          />
        </div>
        <address className="footer-address">
          <p>10690</p>
          <p>台北市大安區敦化南路一段205號14樓之8 ( 1608室 )</p>
          <p>TEL <a href="tel:0227318957"> 02-2731-8957</a></p>
        </address>
      </div>
      <div className="footer-item">
        <h3 className="footer-item-title">服務項目</h3>
        <nav className="footer-links">
          {services.map((service, index) => (
            <a key={index} href="#" className="footer-link">{service}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

