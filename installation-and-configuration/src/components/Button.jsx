// ========== Button
// import all packages
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button 
      disabled={props.disabled} 
      style={props.style} 
      type="button" 
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Button