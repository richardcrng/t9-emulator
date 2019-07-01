import React from 'react';
import classes from './Display.module.css'

function Display({ filtering, numericString , wordsArr = [] }) {
  return (
    <div className={classes.Display}>
      <p><b>Input:</b> {numericString || '(empty)'}</p>
      <p><b>Words:</b> {wordsArr.slice(0,11).join(', ')}</p>
      <p><b>Filtering:</b> {`${filtering}`}</p>
    </div>
  )
}

export default Display;