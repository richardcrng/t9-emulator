import React from 'react';
import Display from '../../atoms/Display';
import KeyPad from '../../atoms/KeyPad';

const PhoneContext = React.createContext()
export const usePhoneKeyClickHandler = () => React.useContext(PhoneContext).onKeyClick

function Phone({ onKeyClick, numericString, wordsArr }) {
  return (
    <PhoneContext.Provider value={{ onKeyClick }}>
      <Display {...{ numericString, wordsArr }} />
      <KeyPad>
        {keyRows.map((keys, idx) => (
          <KeyPad.Row key={idx}>
            {keys.map(key => (
              <KeyPad.Key key={key} main={key} />
            ))}
          </KeyPad.Row>
        ))}

        {/* special buttons */}
        <KeyPad.Row>
          <KeyPad.Key main='*' detail='CLR' />
          <KeyPad.Key main={0} detail='TGL' />
          <KeyPad.Key main='#' detail='DEL' />
        </KeyPad.Row>
      </KeyPad>
    </PhoneContext.Provider>
  )
}

const keyRows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

export default Phone;