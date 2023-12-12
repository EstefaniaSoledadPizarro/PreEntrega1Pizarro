import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Components/Error'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;