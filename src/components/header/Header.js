import React from "react";
import classes from "./Header.module.css";
import Cart from "./Cart";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <header className={classes.header}>
            <h1 className="">PharmEasy</h1>
            <div className="justify-content-end">
              <Cart />
            </div>
          </header>
        </div>
      </nav>
    </>
  );
}
