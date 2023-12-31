import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import AppContext from './contexts/AppContext';
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <>
      <AppContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>

        <Header />
        <Main />
        <Footer />

      </AppContext.Provider>
    </>
  )
}

export default App
