import { AiOutlineShoppingCart } from "react-icons/ai";
import {useCartContext} from '../Context/CartContext';

const CartWidget =() => {
   const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <button> <AiOutlineShoppingCart /> </button>
        </div>
    )
}

export default CartWidget;