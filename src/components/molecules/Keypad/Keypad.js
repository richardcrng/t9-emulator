import React from 'react';
import classes from './KeyPad.module.css'
import Key from '../../atoms/Key';
import KeyRow from '../../atoms/KeyRow';

function KeyPad() {
  return (
    <div className={classes.KeyPad}>
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
        <Key main='*' detail='CLR' />
        <Key main={0} />
        <Key main='#' detail='DEL' />
      </KeyRow>
    </div>
  )
}

export default KeyPad;