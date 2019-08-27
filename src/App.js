import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppRouter from './router/router';
import appRoutes from './router/routeConfig';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppRouter routes={appRoutes} />
      </Provider>
    </div>
  );
}

export default App;
