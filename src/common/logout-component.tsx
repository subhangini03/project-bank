import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useHistory } from "react-router-dom";

let LogoutComponent = (props: any) => {
  const [inProp, setInProp] = useState(false);

  let history = useHistory();

  const nodeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 100);
  }, []);

  return (
    <div className="login-page-css">
      <div className="login-header-css ">
        <div className="flex-1">
          <h1 className="h1-override-css ">Project Bank</h1>
        </div>
      </div>
      <div className="login-content-css d-flex flex-direc-column overflow-hidden vertically-center-using-flex">
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={200}
          className="vertically-center-using-flex logout-block"
        >
          <div ref={nodeRef} className="position-relative d-flex">
            <div className="logout-text-css">
              You have been logged out successfully. Click here to{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </span>
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className="login-footer-css"> </div>
    </div>
  );
};

export default LogoutComponent;
