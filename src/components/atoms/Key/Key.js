import React from 'react';
import classes from './Key.module.css';
import { T9_HASH } from '../../../constants/index';

function Key({ main, detail }) {
  return (
    <button className={classes.KeyOuter}>
      <span className={classes.KeyInner}>
        <span>
          {main}
        </span>
        <span>
          {detail || T9_HASH[main]}
        </span>
      </span>
    </button>
  )
}

export default Key;