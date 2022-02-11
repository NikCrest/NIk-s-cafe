import Nav from "./Nav";
import React from "react";
const Layout = (props) => {
  return (
    <React.Fragment>
      <Nav />
      <main >{props.children}</main>
    </React.Fragment>
  );
};
export default Layout;