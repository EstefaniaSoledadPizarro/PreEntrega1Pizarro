import React from "react";


import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import CartWidget from "./Components/CartWidget/CartWidget";

function App () {
  return (
    <div className="App">
<CartWidget/>
<NavBar/>
<ItemListContainer greeting= 'Tienda'/>
    
    </div>
  );
}

export default App;