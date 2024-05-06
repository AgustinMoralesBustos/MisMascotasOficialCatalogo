import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Nosotros from './components/Pages/Nosotros'
import Preguntas from './components/Pages/Preguntas';
import Comprar from './components/Pages/Comprar';
import Entrega from './components/Pages/Entrega';
import Uso from './components/Pages/Uso';


function App() {
      return (
            <Router>
                  <Navbar />
                  <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="category/:category" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/preguntas-frecuentes" element={<Preguntas />} />
                  </Routes>
                  <Footer />
            </Router>
      );
}

export default App;
