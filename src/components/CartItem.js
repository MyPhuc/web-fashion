import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import NumberFormat from "react-number-format";
const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className="CartItem__item">
      <img src={item.img} alt="" />
      <div className="nameBooks-Cart">{item.name}</div>
      <br />
      <div className="price-Cart">
        <NumberFormat
          value={item.newPrice}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"đ"} // <--- Don't forget this!
        />
      </div>
      <button
        className="CartItem__button"
        onClick={() => removeItem(item.id)}
      >
        <i class="far fa-trash-alt"></i>
      </button>
    </li>
  );
};

export default CartItem;
