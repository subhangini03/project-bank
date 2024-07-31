export let loginSuccessAction = (value) => {
  if (value) {
    return { type: "LOGIN_SUCCESS", data: value };
  } else {
    return { type: "LOGIN_FAILED", data: value };
  }
};
