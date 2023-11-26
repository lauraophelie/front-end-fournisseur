import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import BoiteMail from './pages/BoiteMail'
import ListeArticles from './pages/ListeArticles'
import { Login } from '@mui/icons-material'
import AjoutArticle from './pages/AjoutArticle'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="fournisseur" element={<Header />}>
            <Route path="mail" element={<BoiteMail />} />
            <Route path="articles" element={<ListeArticles />} />
            <Route path="ajout_article" element={<AjoutArticle />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
