import Layout from "./layout/Layout";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Menu from "./components/Menu/Menu";
import Home from "./layout/Home";
import Order from "./components/Order/Order";
import CartProvider from "./store/Context-provider";
import AuthForm from "./components/auth/Authform";
import AuthContext from "./store/auth-context";
import { useContext } from "react";
function App() {
  const authCtx = useContext(AuthContext);
  return (
    <CartProvider>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AuthForm />
            </Route>
           {authCtx.isLoggedIn &&  <Route path="/home" exact>
              <Home />
            </Route>}
            {authCtx.isLoggedIn && <Route path="/Menu">
              <Menu />
            </Route>}
           {authCtx.isLoggedIn && <Route path="/Cart">
              <Cart />
            </Route>}
            {authCtx.isLoggedIn &&<Route path="/order">
              <Order />
            </Route>}
            <Route path="*">
              <AuthForm />
            </Route>
          </Switch>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
