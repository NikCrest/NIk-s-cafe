import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const CartItem = (props) => {
  const context = useContext(CartContext);
  const addHandler=(item)=>{
    context.addItem(
      {...item,qnt:1}
    )
   
  }
  const removeHandler=(id)=>{
    context.removeItem(id)
  }
  return (
    
    <li className={classes.item}>
    <header>
      <h3>{props.item.name}</h3>
      <div className={classes.price}>
        <span className={classes.itemprice}>Total Price : {props.item.price * props.item.qnt}$</span>
      </div>
    </header>
    <div className={classes.details}>
      <div className={classes.quantity}>
        x <span>{props.item.qnt}</span>
      </div>
      <div className={classes.actions}>
      <button onClick={removeHandler.bind(null,props.item.id)} >-</button>
      <button onClick={addHandler.bind(null,props.item)}>+</button>
        
        
      </div>
    </div>
  </li>
  
  );
};

export default CartItem;
