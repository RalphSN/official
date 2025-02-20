import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, href }) => {
    return (
        // <a className="cover-btn" href={href} target="_blank" rel="noopener noreferrer">
        //     {text}
        // </a>
        <a className="cover-btn" href={href} >
            {text}
        </a>
    );
};

// ✅ PropTypes 驗證
Button.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export default Button;
