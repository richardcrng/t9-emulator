import React from 'react';
import classes from './KeyRow.module.css';

function KeyRow({ children }) {
  return (
    <div className={classes.KeyRow}>
      {children}
    </div>
  )
}

export default KeyRow;