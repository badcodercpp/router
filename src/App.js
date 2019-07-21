import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import produce from 'immer'
import Builder from './builder'
import columnCreator, { renederCell } from './builder/columnCreator';
import Util from './builder/util';



const rows = [
  [
    {
      name: "ACCOUNT_NO",
      synthaticEventDispatchData: {},
      handlers: {
        onFocus: function(){
        },
        onChange: function(e){
          const { setstate, state, name } = this;
          const newFormState = produce(state , draft => {
            draft[name] = e.target.value;
          })
          setstate(newFormState)
        }
      },
      style: {},
      column: renederCell,
      columnProps: [{style:{height:"600px"}},{name: 'ACCOUNT_NO'}],
      ui: {
        appendBefore: {},
        appendAfter: {},
        isApiSyncNeeded: {},
        validations: []
      }
    },
    {
      name: "DUMMY_NAME",
      synthaticEventDispatchData: {},
      handlers: {
        onFocus: function(){
        },
        onChange: function(e){
          const { target } = e;
          const { value } = target;
          const { setstate, state, name } = this;
          const newFormState = produce(state , draft => {
            draft[name] = value;
          })
          setstate(newFormState)
        }
      },
      style: {},
      column: renederCell,
      columnProps: [{style:{height:"160px"}},{name: 'DUMMY_NAME'}],
      ui: {
        appendBefore: {},
        appendAfter: {},
        isApiSyncNeeded: {},
        validations: []
      }
    }
  ]
];



function App() {
  return (
    <div className="App">
      <Builder rows={rows} />
    </div>
  );
}

export default App;
