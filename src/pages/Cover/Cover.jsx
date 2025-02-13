import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import "./Cover.scss";

const Cover = (props) => {
  const { title = "Welcome", description = "Your journey begins here" } = props;

  return (
    <section className="cover">
      <div className="cover-image-container">
        <img
          src="https://cdn.jsdelivr.net/gh/RalphSN/images@main/official-images/logo-thin.png"
          alt="logo"
        />
      </div>
      <div className="cover-content">
        <h1 className="cover-title">{title}</h1>
        <p className="cover-description">{description}</p>
      </div>
      <div className="cover-btn-container">
        <Button text="了解更多" href="#" />
        <Button text="聯絡我們" href="#" />
      </div>
    </section>
  );
};

// 添加 PropTypes 驗證
Cover.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Cover;
