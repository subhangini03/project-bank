import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccessAction } from "../action/login-action.tsx";
import { useHistory } from "react-router-dom";

let LoginComponent = (props) => {
  const userRef: any = useRef();
  const passwordRef: any = useRef();
  let dispatch = useDispatch();
  let history = useHistory();

  let [loginSuccess, setLoginSuccess]: any = useState(null);

  useEffect(() => {
    sessionStorage.setItem("user", "admin");
    sessionStorage.setItem("password", "admin");
  }, []);

  return (
    <div className="login-page-css">
      <div className="login-header-css">
        <div className="flex-1">
          <h1 className="h1-override-css ">Project Bank</h1>
        </div>
      </div>
      <div className="login-content-css d-flex flex-direc-column overflow-hidden">
        <div className="login-form-block">
          <div className="vertically-center-using-flex height-inherit position-relative">
            {loginSuccess === false && (
              <div className="margin-right-auto margin-left-auto height-50 color-red login-failure-css">
                Login failed. Please check Username or Password
              </div>
            )}
            <div className="margin-right-auto margin-left-auto height-50">
              <input
                type="text"
                placeholder="Username"
                ref={userRef}
                className="height-35 width-200 text-align-center font-size-15"
              />
            </div>
            <div className="margin-right-auto margin-left-auto height-50">
              <input
                type="password"
                ref={passwordRef}
                placeholder="Password"
                className="height-35 width-200 text-align-center font-size-15"
              />
            </div>
            <div className="margin-right-auto margin-left-auto height-50 margin-top-30">
              <button
                type="button"
                className="cursor-pointer height-35 width-200 sign-in-button font-size-15"
                onClick={() => {
                  if (
                    userRef.current.value === sessionStorage.getItem("user") &&
                    passwordRef.current.value ===
                      sessionStorage.getItem("password")
                  ) {
                    dispatch(loginSuccessAction(true));
                    setLoginSuccess(true);
                    history.push("/home");
                  } else {
                    setLoginSuccess(false);
                    dispatch(loginSuccessAction(false));
                  }
                }}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="login-footer-css"> </div>
    </div>
  );
};

export default LoginComponent;
