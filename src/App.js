import './index.css';
import React from 'react';

const api = {
  key: '4966eeabf208e64426e6ddc19026986f',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
