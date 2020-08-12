import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import Aplication from './components/Aplication'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Aplication />
      </Provider>
    )
  }
}

export default App
