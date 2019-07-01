import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phone from './components/organisms/Phone';
import { processKeyClick } from './redux/saga';

function App() {
  const dispatch = useDispatch()
  const numericString = useSelector(state => state.numericString)
  const wordsArr = useSelector(state => state.wordsArr)

  const handleKeyClick = key => dispatch(processKeyClick.trigger(key))

  return (
    <Phone
      {...{ numericString, wordsArr }}
      onKeyClick={handleKeyClick}
    />
  );
}

export default App;
