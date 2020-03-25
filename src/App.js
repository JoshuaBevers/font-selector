import React from 'react';
import FontSelector from './components/FontSelector.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Font Selector
        </p>
      </header>
      <main>
        <FontSelector />
      </main>
    </div>
  );
}

export default App;
