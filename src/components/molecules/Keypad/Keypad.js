import React from 'react';
import classes from './Keypad.module.css'
import Key from '../../atoms/Key';
import KeyRow from '../KeyRow';

function Keypad() {
  return (
    <div className={classes.KeypadOuter}>
      <KeyRow>
        <Key n={1} />
        <Key n={2} />
        <Key n={3} />
      </KeyRow>
      <KeyRow>
        <Key n={4} />
        <Key n={5} />
        <Key n={6} />
      </KeyRow>
      <KeyRow>
        <Key n={7} />
        <Key n={8} />
        <Key n={9} />
      </KeyRow>
    </div>
  )
}

export default Keypad;