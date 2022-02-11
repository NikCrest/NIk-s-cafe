import React from "react";
import './MenuItem.css'
import { useContext } from 'react';
import CartContext from "../../store/cart-context";
const MenuItem = (props) => {
  const context = useContext(CartContext)
  let quantity = 0;
  const item = context.items.find(ele=>props.id===ele.id);
  if(item){
    quantity=item.qnt;
  }
  const addHandler=()=>{
    context.addItem({
      id:props.id,
      price:props.price,
      name:props.name,
      qnt : 1
    })
   
  }
  const removeHandler=()=>{
    context.removeItem(props.id)
  }

  return (
    <React.Fragment>
      <div className="ui-card">
        <img src={props.image} alt="Cofffee" />
        <div className="title">
          {props.name}
        </div>
        <div className="description">
          <h3>Price : {props.price}$</h3>
          <p>Ingredients : {props.ingredients}</p>
          <span>
            <button onClick={addHandler} className="btn">+</button>
            <h3>{quantity}</h3>
            <button onClick={removeHandler} disabled={!quantity} className="btn">-</button>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MenuItem;
