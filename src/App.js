import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
const alanKey = 'c768747ee275e97df4cd16582fc8e87e2e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: (commandData) => {
        if (commandData.command === 'testCommand') {
          alert('the command was executed')
        }
      },
      zIndex: 10
    })
  }, [])
  return (
    <div className="App">
      <h1>Keddy AI</h1>
    </div>
  );
}

export default App;