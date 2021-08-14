import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import CartContext from "../../context/cart/CartContext";
const Item = ({ book }) => {
  const { addToCart } = useContext(CartContext);
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  };
  const changeBackground = () => {
    if (like) return { backgroundColor: "#ee45a8", color: "#fff" };
  };
  return (
    <div className="page-products-items-item">
      <img src={book.img} alt="" />
      <div className="page-products-items-item-info">
        <Link to="/detail/"><p className="nameBook">{book.name}</p></Link>
        <p className="author">{book.author}</p>
        <div className="price">
          <span className="newPrice">
            <NumberFormat
              value={book.newPrice}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"} // <--- Don't forget this!
            />
          </span>
          <span className="oldPrice">
            <NumberFormat
              value={book.oldPrice}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"đ"} // <--- Don't forget this!
            />
          </span>
        </div>
        <div className="action">
          <button
            className="btn-like"
            style={changeBackground()}
            onClick={handleLike}
          >
            <i class="far fa-heart"></i>
          </button>
          <button className="btn-add" onClick={() => addToCart(book)}>
            <i class="far fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
