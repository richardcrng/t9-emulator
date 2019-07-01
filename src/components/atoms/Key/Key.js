import React from 'react';
import classes from './Key.module.css';

function Key({ main, detail }) {
  return (
    <button className={classes.KeyOuter}>
      <span className={classes.KeyInner}>
        <span>
          {main}
        </span>
        <span>
          {detail}
        </span>
      </span>
    </button>
  )
}

export default Key;