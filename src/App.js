import React from 'react';
import Phone from './components/organisms/Phone';

function App() {
  const numericString = '324325325'
  const wordsArr = ['fewf', 'gwgw', 'qiomlpp']

  return (
    <Phone {...{ numericString, wordsArr }} />
  );
}

export default App;
