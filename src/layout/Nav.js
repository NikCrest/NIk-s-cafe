import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
const Nav = () => {
  const context = useContext(CartContext)
  const authCtx = useContext(AuthContext)
  let totalQuantity = 0;
  for(let i=0;i<context.items.length;i++){
    totalQuantity=totalQuantity+context.items[i].qnt;
  }
  const logoutHandler = ()=>{
    authCtx.logout();
  }
  return (
    <div className="fix">
    <header className={classes.header}>
      <Link to="/Home">
        <div className={classes.logo}>Nik's cafe</div>
      </Link>
     {authCtx.isLoggedIn && <ul>
        <li>
          <Link to="/Menu">Menu</Link>
        </li>
        <li>
          <Link to="/Cart">Cart({totalQuantity})</Link>
        </li>

        <li>
          <Link to="/order">Orders</Link>
        </li>
        <li>
          <Link onClick={logoutHandler} to="/auth">Logout</Link>
        </li>
      </ul>}
    </header>
    </div>
  );
};

export default Nav;
