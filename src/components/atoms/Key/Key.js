import React from 'react';
import classes from './Key.module.css';
import { T9_HASH } from '../../../constants/index';
import { usePhoneKeyClickHandler } from '../../organisms/Phone';
import useKeyListeners from '../../../hooks/useKeyListeners';

function Key({ main, detail }) {
  const onKeyClick = usePhoneKeyClickHandler()
  const handleKey = () => onKeyClick(main)

  useKeyListeners(`${main}`, { onKeyDown: handleKey })

  return (
    <button
      className={classes.KeyOuter}
      onClick={handleKey}
    >
      <span className={classes.KeyInner}>
        <span>
          {`${main} ${detail || T9_HASH[main]  || ''}`}
        </span>
      </span>
    </button>
  )
}

export default Key;