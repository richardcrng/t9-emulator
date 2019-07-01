import React from 'react';

function Display({ numericString , wordsArr = [] }) {
  return (
    <div
      style={{
        backgroundColor: '#d1e3d8',
        width: '300px',
        height: '200px'
      }}
    >
      <p>Input: {numericString}</p>
      <p>Words: {wordsArr.join(', ')}</p>
    </div>
  )
}

export default Display;