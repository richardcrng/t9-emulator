import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Phone from './components/organisms/Phone';
import { processKeyClick } from './redux/saga';

function App() {
  const dispatch = useDispatch()
  const filtering = useSelector(state => state.shouldFilter)
  const numericString = useSelector(state => state.numericString)
  const wordsArr = useSelector(state => state.shouldFilter ? state.filteredWords : state.unfilteredWords)

  const handleKeyClick = key => dispatch(processKeyClick.trigger(key))

  return (
    <Phone
      {...{ filtering, numericString, wordsArr }}
      onKeyClick={handleKeyClick}
    />
  );
}

export default App;
