import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phone from './components/organisms/Phone';
import { T9_HASH } from './constants';
import { actions } from './redux/leaves';

function App() {
  const dispatch = useDispatch()
  const numericString = useSelector(state => state.numericString)
  const wordsArr = useSelector(state => state.wordsArr)

  const handleKeyClick = key => {
    dispatch(actions.numericString.create.concat(`${key}`))
    const associatedLetters = T9_HASH
    if (T9_HASH) {
      
    }
  }

  return (
    <Phone
      {...{ numericString, wordsArr }}
      onKeyClick={handleKeyClick}
    />
  );
}

export default App;
