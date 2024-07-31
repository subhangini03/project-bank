/* eslint-disable no-sparse-arrays */
import { Route, Switch } from "react-router-dom";
import LoginComponent from "../features/login-component/component/login.tsx";
import React from "react";
import HomeComponent from "./home-component.tsx";
import Project_1_Component from "../features/project_1_component/component/project_1.tsx";
import Project_2_Component from "../features/project_2_component/component/project_2.tsx";
import Project_3_Component from "../features/project_3_component/component/project_3.tsx";
import Project_4_Component from "../features/project_4_component/component/project_4.tsx";
import Project_5_Component from "../features/project_5_component/component/project_5.tsx";
import LogoutComponent from "./logout-component.tsx";

let routeConfig = [
  {
    path: "/login",
    component: LoginComponent,
    name: "Login",
    exact: true,
  },
  {
    path: "/logout",
    component: LogoutComponent,
    name: "Logout",
    exact: true,
  },
  {
    path: "/home",
    component: HomeComponent,
    name: "Home",
    exact: true,
  },
  ,
  {
    path: "/project-1",
    component: Project_1_Component,
    name: "Project_1",
  },
  {
    path: "/project-2",
    component: Project_2_Component,
    name: "Project_2",
  },
  {
    path: "/project-3",
    component: Project_3_Component,
    name: "Project_3",
  },
  {
    path: "/project-4",
    component: Project_4_Component,
    name: "Project_4",
  },
  {
    path: "/project-5",
    component: Project_5_Component,
    name: "Project_5",
  },
];

let routeComponent = () => {
  return (
    <Switch>
      {routeConfig.map((route: any, index) => {
        if (route.isActive !== false) {
          if (route.name === "Login") {
            return (
              <Route
                key={index}
                path={route.path}
                // component={route.component}
                render={(props) => <route.component {...props} />}
              />
            );
          } else if (route.name === "Logout") {
            return (
              <Route
                key={index}
                path={route.path}
                // component={route.component}
                render={(props) => <route.component {...props} />}
              />
            );
          } else {
            return (
              // <React.Fragment>
              <Route
                path={route.path}
                render={(props) => (
                  <HomeComponent component={route.component} {...props} />
                )}
              />
              // </React.Fragment>
            );
          }
        }
        return "";
      })}
      {
        // ERROR COMPONENT ROUTE
      }
      {/* <Route
        component={() => {
          window.location.href =
            getApplicationBaseUrl() +
            "/web/apps/kb/work/error?PathNotFound=true&url=" +
            window.location.href;
          return null;
        }}
      /> */}
    </Switch>
  );
};

export default routeComponent;
