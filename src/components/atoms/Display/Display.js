import React from 'react';
import classes from './Display.module.css'

function Display({ filtering, numericString , wordsArr = [] }) {
  return (
    <div className={classes.Display}>
      <p>Input: {numericString}</p>
      <p>Words: {wordsArr.slice(0,11).join(', ')}</p>
      <p>Filtering: {`${filtering}`}</p>
    </div>
  )
}

export default Display;