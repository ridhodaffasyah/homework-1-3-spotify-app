import './App.css'
import React from 'react'
import Navigation from './pages/navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './store/store'

function App () {
  const store = createStore(reducer)
  return (
    <>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </>
  )
}

export default App
