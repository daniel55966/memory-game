import { useRef, useEffect } from 'react';
import PropTypes from "prop-types";
import RegularButton from "./RegularButton";

export default function GameOver({ handleClick }) {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  return (
    <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
      <p className="p--large">You&apos;ve matched all the memory cards!</p>
      <RegularButton handleClick={handleClick}>
        Play again
      </RegularButton>
    </div>
  );
}

GameOver.propTypes = {
  handleClick: PropTypes.func.isRequired,
}