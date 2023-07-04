import React from 'react';
import PropTypes from 'prop-types';
import './Numbers.css';

function InputButton({ inputSymbol, background }) {
  const defaultClass = `input-container ${background}`;
  const gridspanClass = `input-container grid-span-2 ${background}`;

  return (
    <>
      {inputSymbol === 0 ? (
        <div className={gridspanClass}>
          {inputSymbol}
        </div>
      ) : (
        <div className={defaultClass}>{inputSymbol}</div>
      )}
    </>
  );
}

InputButton.propTypes = {
  inputSymbol: PropTypes.isRequired,
  background: PropTypes.isRequired,
};

export default InputButton;
