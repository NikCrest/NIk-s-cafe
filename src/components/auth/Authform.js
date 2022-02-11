import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./Authform.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory()
  const toggleHandler = () => {
    setIsLogin((prev) => !prev);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKFkgRllNTf-DT3EiaQ0HCnUOvz41NJe4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKFkgRllNTf-DT3EiaQ0HCnUOvz41NJe4";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      const data = await response.json();
      if (!response.ok) {
        let errorMessage = "Authentication failed :";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
      authCtx.login(data.idToken,data.localId);
      history.replace("/home")
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email :"
            required
            ref={emailRef}
          />
        </div>
        <br />
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            placeholder="Enter Your password :"
            type="password"
            id="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={toggleHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
