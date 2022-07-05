import './App.css';
import timex_logo from './components/timex_logo.js';
import {useState } from 'react';

const App = () => {

  const name = 'John';
  var main_menu_display = true;

  return (
    <div className="App">

      
      <h1>Hello {name}</h1>

      {main_menu_display ? (
        <>
          <timex_logo />
          <h2>menu</h2>
          <button>start</button>
          <timer cur_time={100}/>
        </>
      ) : (
        <>
          <h2>game</h2>
          <button>menu</button>
        </>
      )}
      
    </div>
  );
}

export default App;
