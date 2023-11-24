import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BoiteMail from './pages/BoiteMail'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="fournisseur" element={<Header />}>
            <Route path="mail" element={<BoiteMail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
