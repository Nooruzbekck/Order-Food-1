import React from "react";
import Modalka from "../../assets/icon/modalka.svg?react";
import Plus from "../../assets/icon/plus.svg?react";
// import Plus from "./assets/icon/plus.svg?react";
import LoginButton from "./LoginButton";
export const Login = () => {
  return (
    <div>
      <LoginButton>
        <Modalka className="svgg" />
      </LoginButton>
      <LoginButton>
        <Plus className="svgg" />
      </LoginButton>
    </div>
  );
};

export default Login;
