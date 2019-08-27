import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Builder from './builder'
import rows from './mock/mockApp';

function App() {
  return (
    <div className="App">
      <Builder rows={rows} />
    </div>
  );
}

export default App;
