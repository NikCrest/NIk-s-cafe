import React from "react";
import classes from './OrderItem.module.css'
import Card from "../../layout/Card";
const OrderItem = (props) => {
  return (
    <React.Fragment>
      <ul className={classes.container} >
        {props.items.map(ele=>{
          return <div>
          <li className={classes.item}>
          <div className={classes.main}>
          <div className={classes.title}>
              <span>{ele.name}</span>
            </div>
            <div className={classes.quantity}>
              <center><span>x{ele.qnt}</span></center>
            </div>
            <div className={classes.price}>
              <span >Total Price :{ele.price * ele.qnt}$</span>
            </div>
            
          </div>
        </li>
        
        </div>
        })}
       <div className={classes.total}>Total Amount : {props.total}$</div> 
       <br/><br/>
      </ul>
    </React.Fragment>
  );
};
export default OrderItem;
