import React from 'react';
import classes from './Key.module.css';
import { T9_HASH } from '../../../constants/index';
import { usePhoneKeyClickHandler } from '../../organisms/Phone';

function Key({ main, detail }) {
  const onKeyClick = usePhoneKeyClickHandler()

  return (
    <button
      className={classes.KeyOuter}
      onClick={() => onKeyClick(main)}
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