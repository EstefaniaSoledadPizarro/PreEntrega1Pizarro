
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckOut } from '../src/components/CheckOut/CheckOut';
import Error from './Components/NavBar/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Context/CartContext';
import './components/Firebase/firebase'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<ItemListContainer />} />
            <Route path={'/category/:id'} element={<ItemListContainer />} />
            <Route path={'/item/:id'} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<CheckOut />} />
            <Route path={'*'} element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;