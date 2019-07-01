import React from 'react';
import classes from './Keypad.module.css'
import Key from '../../atoms/Key';
import KeyRow from '../KeyRow';

function Keypad() {
  return (
    <div className={classes.Keypad}>
      <KeyRow>
        <Key main={1} />
        <Key main={2} />
        <Key main={3} />
      </KeyRow>
      <KeyRow>
        <Key main={4} />
        <Key main={5} />
        <Key main={6} />
      </KeyRow>
      <KeyRow>
        <Key main={7} />
        <Key main={8} />
        <Key main={9} />
      </KeyRow>
      <KeyRow>
        <Key main='*' />
        <Key main={0} />
        <Key main='#' />
      </KeyRow>
    </div>
  )
}

export default Keypad;