import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text, onClick, style, disabled }) {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      disabled={disabled} 
      className="custom-button"
    >
      {text}
    </button>
  );
}

// Define default props
Button.defaultProps = {
  text: 'Click Me',
  style: {},
  disabled: false,
};

// Prop validation
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
