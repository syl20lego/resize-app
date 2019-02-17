import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/ConfigureStore'
import './App.css'
import HomePage from './home/HomePage'
import { ActionCreators } from './actions/Creator'
const store = configureStore()

class App extends Component {
	render() {
		if (window.require) {
			const { ipcRenderer } = window.require('electron')
			ipcRenderer.on('openFiles', (event, filenames) => {
				store.dispatch(ActionCreators.selectedFiles(filenames))
			})
		}
		return (
			<Provider store={store}>
				<HomePage />
			</Provider>
		)
	}
}

export default App
