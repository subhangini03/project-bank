import { initialState } from "../features/data-reducer.tsx";
import { loginInitialState } from "../features/login-component/reducer/login-reducer.tsx";
import { todoInitialState } from "../features/project_1_component/reducer/project-1-reducer.tsx";

export let applicationInitialState = {
  dataList: initialState,
  login: loginInitialState,
  todo: todoInitialState,
};
