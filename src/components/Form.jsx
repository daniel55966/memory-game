import { useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import RegularButton from "./RegularButton";
import Select from "./Select";

export default function Form({ handleSubmit, handleChange, isFirstRender }) {
  const divRef = useRef(null);

  useEffect(() => {
  !isFirstRender && divRef.current.focus();
  }, [isFirstRender]);

  return (
    <div className="form-container" ref={divRef}>
      <p className="p--regular">
        Customize the game by selecting an emoji category and a number of memory cards.
      </p>
      <form className="wrapper">
        <Select handleChange={handleChange} />
        <RegularButton handleClick={handleSubmit}>
          Start Game
        </RegularButton>
      </form>
    </div>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isFirstRender: PropTypes.func.isRequired
};