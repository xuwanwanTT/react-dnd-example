import React from "react";
import "./App.css";
// import Dustbin from './components/dustbin/single-target/index';
// import Dustbin from './components/dustbin/copy-or-move/index';
import Dustbin from './components/drag-around/naive/index';

function App() {
  return (
    <div className="App" >
      <Dustbin />
    </div>
  );
}

export default App;
