import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar';

function App() {
      return (
            <Router>
                  <Navbar /> { }
                  <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="category/:category" element={<ItemListContainer />} />
                        <Route path="/producto/:id" element={<ItemDetailContainer />} />
                  </Routes>
            </Router>
      );
}

export default App;
