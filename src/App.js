import './App.css';
import Timex_logo from './components/Timex_logo.js';
import Timer from './components/Timer.js';
import { useState, useEffect } from 'react';

const App = () => {
  
  const [main_menu_display, setMain_menu_display] = useState(true);

  useEffect(() => {
    
  }, [main_menu_display]);

  return (
    <div className="App">

      {main_menu_display ? (
        <>
          < Timex_logo />
          <h2>menu</h2>
          <button onClick={() => setMain_menu_display(false)}>start</button>
          <Timer cur_time={100}/>
        </>
      ) : (
        <>
          <h2>game</h2>
          <button onClick={() => setMain_menu_display(true)}>menu</button>
        </>
      )}
      
    </div>
  );
}

export default App;
