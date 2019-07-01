import React from 'react';

function Key({ n, letters }) {
  return (
    <div>
      <span>
        {n}
      </span>
      <span>
        {letters}
      </span>
    </div>
  )
}

export default Key;