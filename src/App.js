import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import AppRouter from './router/router';
import appRoutes from './router/routeConfig';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducers'
import AppNavigator from './components/fixed/navBar';

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <AppNavigator />
        <div>
          <AppRouter routes={appRoutes} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
