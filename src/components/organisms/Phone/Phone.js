import React from 'react';
import Display from '../../atoms/Display';
import KeyPad from '../../molecules/KeyPad';

const PhoneContext = React.createContext()
export const usePhoneKeyClickHandler = () => React.useContext(PhoneContext).onKeyClick

function Phone({ onKeyClick, numericString, wordsArr }) {
  return (
    <PhoneContext.Provider value={{ onKeyClick }}>
      <Display {...{ numericString, wordsArr }} />
      <KeyPad>
        <KeyPad.Row>
          <KeyPad.Key main={1} />
          <KeyPad.Key main={2} />
          <KeyPad.Key main={3} />
        </KeyPad.Row>
        <KeyPad.Row>
          <KeyPad.Key main={4} />
          <KeyPad.Key main={5} />
          <KeyPad.Key main={6} />
        </KeyPad.Row>
        <KeyPad.Row>
          <KeyPad.Key main={7} />
          <KeyPad.Key main={8} />
          <KeyPad.Key main={9} />
        </KeyPad.Row>
        <KeyPad.Row>
          <KeyPad.Key main='*' detail='CLR' />
          <KeyPad.Key main={0} />
          <KeyPad.Key main='#' detail='DEL' />
        </KeyPad.Row>
      </KeyPad>
    </PhoneContext.Provider>
  )
}

export default Phone;