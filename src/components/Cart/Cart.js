import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Card from "../../layout/Card";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Cart = () => {
  const context = useContext(CartContext);
  const history = useHistory()
  const cartData = context.items.map((ele) => <CartItem item={ele} />);
  const data = {
    id: localStorage.getItem("Id"),
    items: context.items,
    totalAmount : context.totalAmount
  };
  const orderHandler = async () => {
    try {
      if (data.items.length === 0) {
        throw new Error("Please Add Some Items to Cart");
      }
      const response = await fetch('https://nik-s-cafe-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(!response){
        throw new Error("Something wrong happened!!")
      }
      context.clearCart()
    } catch (err) {
      alert(err);
    }
    history.push('/order')
  };
  const cancleHandler = () => {
    context.clearCart();
  };
  return (
    <Card className={classes.cart}>
      {context.items.length !== 0 ? (
        <div>
          <h2>Your Shopping Cart</h2>
          <hr />
        </div>
      ) : (
        <h2>Add something to your cart!</h2>
      )}

      <ul>{cartData}</ul>

      <hr />
      {context.items.length !== 0 && (
        <div className={classes.total}>
          Total Amount : {context.totalAmount}$
        </div>
      )}
      {context.items.length !== 0 && (
        <div className={classes.links}>
          <button onClick={orderHandler}  className={classes.btn}>
            Order
          </button>
          <NavLink onClick={cancleHandler} to="/menu" className={classes.btn}>
            Cancel
          </NavLink>
        </div>
      )}
    </Card>
  );
};
export default Cart;
