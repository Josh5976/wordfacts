import React from 'react';
import Header from './Header';
import Search from './Search';
import '../styles/Page.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Search />
    </div>
  );
}

export default App;
