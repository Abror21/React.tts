import './App.css'
import './common.css'
import React from 'react'
import { Provider } from './GlobalState'
import { Main } from './components/main/Main'
import { Intro } from './components/intro/Intro'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { UpButton } from './components/buttons/UpButton'

function App() {
  return (
    <Provider>
      <BrowserRouter>
          <Header />
          <Intro />
          <Main />
          <Footer />
          <UpButton />
      </BrowserRouter>
    </Provider>
  )
}

export default App;