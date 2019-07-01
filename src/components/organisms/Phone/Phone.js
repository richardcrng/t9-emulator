import React from 'react';
import Display from '../../atoms/Display';
import Keypad from '../../molecules/Keypad/Keypad';

function Phone({ numericString, wordsArr }) {
  return (
    <>
      <Display {...{ numericString, wordsArr }} />
      <Keypad />
    </>
  )
}

export default Phone;