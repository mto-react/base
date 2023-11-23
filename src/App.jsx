import { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import AppContext from './contexts/AppContext';
import Header from './components/header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <AppContext.Provider value={{ isLogin: isLogin, setIsLogin: setIsLogin }}>

        <Header />
        <Main />
        <Footer />

      </AppContext.Provider>
    </>
  )
}

export default App
