import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phone from './components/organisms/Phone';

function App() {
  const numericString = useSelector(state => state.numericString)
  const wordsArr = useSelector(state => state.wordsArr)

  return (
    <Phone {...{ numericString, wordsArr }} />
  );
}

export default App;
