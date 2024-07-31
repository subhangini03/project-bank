import { combineReducers } from "redux";
import { dataReducer } from "../features/data-reducer.tsx";
import { loginReducer } from "../features/login-component/reducer/login-reducer.tsx";
import { todoReducer } from "../features/project_1_component/reducer/project-1-reducer.tsx";

export let rootReducer = {
  dataList: dataReducer,
  login: loginReducer,
  todo: todoReducer,
};
