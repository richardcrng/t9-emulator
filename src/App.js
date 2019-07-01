import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phone from './components/organisms/Phone';
import { T9_HASH } from './constants';
import { actions } from './redux/leaves';
import { processKeyClick } from './redux/saga';

function App() {
  const dispatch = useDispatch()
  const numericString = useSelector(state => state.numericString)
  const wordsArr = useSelector(state => state.wordsArr)

  const handleKeyClick = key => {
    const associatedLetters = T9_HASH[key]
    if (associatedLetters) {
      dispatch(actions.numericString.create.concat(`${key}`))      
    }
    dispatch(processKeyClick.trigger(key))
  }

  return (
    <Phone
      {...{ numericString, wordsArr }}
      onKeyClick={handleKeyClick}
    />
  );
}

export default App;
