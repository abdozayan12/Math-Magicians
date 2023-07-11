import React from 'react';
import PropTypes from 'prop-types';

function InputButton({ inputSymbol, background, handleInputBtn }) {
  const defaultClass = `input-container ${background}`;
  const gridspanClass = `input-container grid-span-2 ${background}`;

  return (
    <>
      {inputSymbol === '0' ? (
        <button type="button" className={gridspanClass} onClick={handleInputBtn}>
          {inputSymbol}
        </button>
      ) : (
        <button type="button" className={defaultClass} onClick={handleInputBtn}>
          {inputSymbol}
        </button>
      )}
    </>
  );
}

InputButton.propTypes = {
  inputSymbol: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  background: PropTypes.string.isRequired,
  handleInputBtn: PropTypes.func.isRequired,
};

export default InputButton;
