import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import produce from 'immer'
import Builder from './builder'
import { renederCell } from './builder/columnCreator';

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
      component: {
        name:"ACCOUNT_NO",
        dest:"src/components/columnUI.js"
      },
      columnProps: [{style:{height:"120px"}},{name: 'ACCOUNT_NO', placeholder: 'type here'}],
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
      component: {
        name:"DUMMY_NAME",
        dest:"src/components/columnUI.js"
      },
      columnProps: [{style:{height:"160px"}},{name: 'DUMMY_NAME', placeholder: 'type here'}],
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
