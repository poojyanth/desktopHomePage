import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import './App.css';
import Background from './components/Background';

function App() {
  return (
    <div className="app-container">
      <Background />
      <div className='main-container'>
        <LeftPane />
        <RightPane />
      </div>
    </div>
  );
}

export default App;
