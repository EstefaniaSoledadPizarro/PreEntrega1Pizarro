import React from "react";


import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";

function App () {
  return (
    <div className="App">
<NavBar/>
<ItemListContainer greeting= 'Bienvenidos a Tienda Mate'/>
    </div>
  );
}

export default App;