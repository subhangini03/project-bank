export let loginInitialState = {
  loginSuccess: false,
};

export let loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return Object.assign({}, state, { loginSuccess: action.data });
    case "LOGIN_FAILED":
      return Object.assign({}, state, { loginSuccess: action.data });
    default:
      return state;
  }
};
