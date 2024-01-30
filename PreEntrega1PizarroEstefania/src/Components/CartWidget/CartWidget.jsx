import { AiOutlineShoppingCart } from "react-icons/ai";
import {useCartContext} from '../Context/CartContext';
import './CartWidget.css'

const CartWidget =() => {
   const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <button className="styleBoton"> <AiOutlineShoppingCart /> </button>
        </div>
    )
}

export default CartWidget;