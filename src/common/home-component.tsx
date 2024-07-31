import React, { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import { useHistory } from "react-router-dom";
import ResultComponent from "./result-component.tsx";
import NoDataComponent from "./no-data-component.tsx";
import LogoutIcon from "../common/images/logout.svg";

let HomeComponent = (props: any) => {
  let { component: Component, match } = props;

  const [inProp, setInProp] = useState(false);
  const [projectArray, setProjectArray]: any = useState([]);
  const [selectedProj, setSelectedProj]: any = useState("");
  const [showContent, setShowContent]: any = useState(false);
  const [showResult, setShowResult]: any = useState(false);

  const nodeRef = useRef(null);
  let history = useHistory();

  useEffect(() => {
    setInProp(true);
    setTimeout(() => {
      let projectArr = [
        { name: "Project 1", urlName: "project-1" },
        { name: "Project 2", urlName: "project-2" },
        { name: "Project 3", urlName: "project-3" },
        { name: "Project 4", urlName: "project-4" },
        { name: "Project 5", urlName: "project-5" },
      ];
      setProjectArray(projectArr);
      setShowContent(true);
      setShowResult(true);
    }, 600);
  }, []);

  useEffect(() => {
    let path = match?.path.substring(1, match?.path.length);
    if (path) {
      setSelectedProj(path);
    }
  }, [match]);

  return (
    <div className="login-page-css">
      <div className="login-header-css ">
        <div className="flex-1">
          <h1 className="h1-override-css ">Project Bank</h1>
        </div>
        <div className="vertically-center-using-flex logout-icon-css">
          <img
            className="cursor-pointer"
            title="Logout"
            src={LogoutIcon}
            width="20"
            height={20}
            alt="logout"
            onClick={() => {
              history.push("/logout");
              sessionStorage.clear();
            }}
          />
        </div>
      </div>
      <div className="login-content-css d-flex flex-direc-column overflow-hidden vertically-center-using-flex">
        <CSSTransition
          nodeRef={nodeRef}
          in={inProp}
          timeout={200}
          className="home-block"
        >
          <div ref={nodeRef} className="position-relative d-flex">
            <div className="side-bar-css">
              {projectArray?.map((project: any) => (
                <div
                  className={`project-name-css ${cx({
                    selected: selectedProj === project?.urlName,
                  })} `}
                  onClick={(event: any) => {
                    setSelectedProj(event?.target?.innerText);
                    history.push(`/${project.urlName}`);
                  }}
                >
                  {project?.name}
                </div>
              ))}
            </div>
            <div
              className={`content-css vertically-center-using-flex ${cx({
                noDataCss: match.path === "/home",
              })}`}
            >
              {showContent ? (
                match.path !== "/home" && Component ? (
                  <Component />
                ) : (
                  <NoDataComponent message="No project selected" />
                )
              ) : (
                ""
              )}
            </div>
            <div className="result-css vertically-center-using-flex">
              {showResult ? (
                match.path !== "/home" && Component ? (
                  <ResultComponent match={match} />
                ) : (
                  <NoDataComponent message="No result to display" />
                )
              ) : (
                ""
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
      <div className="login-footer-css"> </div>
    </div>
  );
};

export default HomeComponent;
