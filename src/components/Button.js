import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

//Defining the button component used throughout the webapp
function Button({ className, text, onClick, style, disabled }) {
  return (
    <button 
      onClick={onClick} 
      style={style} 
      disabled={disabled} 
      className={className}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Click Me',
  style: {},
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
