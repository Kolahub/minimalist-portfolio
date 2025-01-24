import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// BasicBtn component renders a styled navigation link button
// Props:
// - text: The text to display inside the button
// - to: The path to navigate to when the button is clicked
function BasicBtn({ text, to }) {
  return (
    // NavLink component from react-router-dom for navigation
    // Applies custom styles and hover effects
    <NavLink
      to={to}
      className='border-2 border-cusGrayDarkBlue text-center leading-[44px] uppercase px-10 text-cusGrayDarkBlue hover:bg-cusGrayDarkBlue hover:text-cusVeryLightGrey h-12 transition-all inline-block'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {text}
    </NavLink>
  );
}

// Define prop types for the BasicBtn component
BasicBtn.propTypes = {
  text: PropTypes.string.isRequired, // text is a required string
  to: PropTypes.string.isRequired,   // to is a required string
};

export default BasicBtn;