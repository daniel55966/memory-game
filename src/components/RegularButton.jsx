import PropTypes from "prop-types"

export default function RegularButton({ children, handleClick }) {
  return (
    <button
      className="btn btn--text"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

RegularButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
}