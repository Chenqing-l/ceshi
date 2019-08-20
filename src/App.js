import React from 'react';
import logo from './logo.svg';
import './App.css';
import Roo from './router/route'
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  return (
    <div className="App">
  <Provider  store={store} >
  <Roo />
     
  </Provider>
    </div>
  );
}

export default App;
