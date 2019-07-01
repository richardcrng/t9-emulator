import React from 'react';
import Display from '../../atoms/Display';
import KeyPad from '../../molecules/KeyPad';

const PhoneContext = React.createContext()
export const usePhoneKeyClickHandler = () => React.useContext(PhoneContext).onKeyClick

function Phone({ onKeyClick, numericString, wordsArr }) {
  return (
    <PhoneContext.Provider value={{ onKeyClick }}>
      <Display {...{ numericString, wordsArr }} />
      <KeyPad />
    </PhoneContext.Provider>
  )
}

export default Phone;