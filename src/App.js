import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
const alanKey = 'a14944d32ed248e5f4cd16582fc8e87e2e956eca572e1d8b807a3e2338fdd0dc/stage'
function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'Hello world') {
          alert('this is a test')
        }
      }
    })
  }, [])
  return (
    <div className="App">
      <h1>Keddy AI</h1>
    </div>
  );
}

export default App;