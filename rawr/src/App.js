import React from 'react';
import './App.css';

//components
import CombineAxios from './Components/CombineAxios';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CombineAxios />
    </div>
  );
}

export default App;
