import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function BasicBtn({ text, to }) {
  return (
    <NavLink 
      to={to} 
      className="border-2 border-cusGrayDarkBlue text-center leading-[44px] uppercase px-10 text-cusGrayDarkBlue hover:bg-cusGrayDarkBlue hover:text-cusVeryLightGrey h-12 transition-all inline-block"
    >
      {text}
    </NavLink>
  );
}

BasicBtn.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default BasicBtn;