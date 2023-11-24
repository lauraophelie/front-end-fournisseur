import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BoiteMail from './pages/BoiteMail'
import ListeArticles from './pages/ListeArticles'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="fournisseur" element={<Header />}>
            <Route path="mail" element={<BoiteMail />} />
            <Route path="articles" element={<ListeArticles />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
