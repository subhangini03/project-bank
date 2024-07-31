import { createStore, applyMiddleware, Middleware } from "redux";
// import rootReducer from "./root-reducer";
// import applicationInitialState from "./application-initial-state";
let store;

export const configureStore = (
  reducer: (state: any, action: any) => any,
  initialState: any
) => {
  return createStore(
    reducer,
    initialState
  );
};
// store = configureStore(rootReducer, applicationInitialState);
// configureStore(loginReducer, undefined, middlewares);

export default store;
