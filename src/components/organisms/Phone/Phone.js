import React from 'react';
import Display from '../../atoms/Display';
import Keypad from '../../molecules/Keypad/Keypad';

const PhoneContext = React.createContext()
export const usePhoneKeyClickHandler = () => React.useContext(PhoneContext).onKeyClick

function Phone({ onKeyClick, numericString, wordsArr }) {
  return (
    <PhoneContext.Provider value={{ onKeyClick }}>
      <Display {...{ numericString, wordsArr }} />
      <Keypad />
    </PhoneContext.Provider>
  )
}

export default Phone;