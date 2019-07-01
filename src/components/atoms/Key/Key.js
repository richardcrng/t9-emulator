import React from 'react';
import classes from './Key.module.css';

function Key({ n, letters }) {
  return (
    <button className={classes.KeyOuter}>
      <span className={classes.KeyInner}>
        <span>
          {n}
        </span>
        <span>
          {letters}
        </span>
      </span>
    </button>
  )
}

export default Key;