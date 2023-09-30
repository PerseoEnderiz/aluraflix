import './App.css';
import "./assets/css/normalize.css"
import "./assets/css/bases.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Uso de componentes
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Page404 from './pages/Page404';
import NewCategory from './pages/NewCategory';
import NewVideo from './pages/NewVideo';

function App() {
  return (
    <>
      <Router>
        {/* Todo esto permanece en todas las paginas */}
        <Header/>
        {/* Rutas generadas por javascript dinamicamente */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/newvideo" element={<NewVideo/>} />
          <Route path="/newcategory" element={<NewCategory/>} />

          {/* paginas que no existen */}
          <Route path="*" element={<Page404/>} />

        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
