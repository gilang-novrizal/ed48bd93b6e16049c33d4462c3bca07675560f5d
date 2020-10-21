import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// setup redux
import {createStore} from "redux"
import {Provider} from "react-redux"
import allReducers from "./reducer"

let globalStore = createStore(allReducers)
globalStore.subscribe(()=>
  console.log("global store :", globalStore.getState()))

console.log(globalStore.getState())

ReactDOM.render(
  <Provider store={globalStore}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

