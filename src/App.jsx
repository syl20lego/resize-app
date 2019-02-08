import React, { Component } from 'react'
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';
import './App.css'
import Home from './home/Home'
import { ActionCreators } from './actions/Creator'
const store = configureStore();

class App extends Component {
  render() {
    if (window.require) {
      const { ipcRenderer } = window.require("electron")
      ipcRenderer.on('openFiles',  (event, filename) => {
        console.log(event, filename)
        store.dispatch(ActionCreators.openFile(filename))
      })
    }
    return (
      <Provider store={store}>
          <Home/>
        </Provider>
    )
  }
}

export default App
