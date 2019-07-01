import React from 'react';
import classes from './Keypad.module.css'
import Key from '../../atoms/Key';

function Keypad() {
  return (
    <div className={classes.Keypad}>
      <div>
        <Key n={1} />
        <Key n={2} />
        <Key n={3} />
      </div>
      <div>
        <Key n={4} />
        <Key n={5} />
        <Key n={6} />
      </div>
      <div>
        <Key n={7} />
        <Key n={8} />
        <Key n={9} />
      </div>
    </div>
  )
}

export default Keypad;