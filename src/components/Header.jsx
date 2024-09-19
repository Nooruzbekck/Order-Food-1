import React from "react";
import "./Header.css";
import { HeaderButton } from "./UI/HeaderButton";

export const Header = () => {
  return (
    <header className="header-two">
      <h1>ReactMeals</h1>
      <HeaderButton>
        Your Cart <b className="b-title">7</b>
      </HeaderButton>
    </header>
  );
};
