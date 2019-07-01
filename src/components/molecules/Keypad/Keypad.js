import React from 'react';
import classes from './KeyPad.module.css'
import Key from '../../atoms/Key';
import KeyRow from '../../atoms/KeyRow';

function KeyPad({ children }) {
  return (
    <div className={classes.KeyPad}>
      {children}
    </div>
  )
}

KeyPad.Row = KeyRow
KeyPad.Key = Key

export default KeyPad;