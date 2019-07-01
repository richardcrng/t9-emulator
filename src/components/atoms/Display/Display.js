import React from 'react';
import classes from './Display.module.css'

function Display({ numericString , wordsArr = [] }) {
  return (
    <div className={classes.Display}>
      <p>Input: {numericString}</p>
      <p>Words: {wordsArr.slice(0,11).join(', ')}</p>
    </div>
  )
}

export default Display;