export let addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export let updateTodo = (todo) => {
  return {
    type: "UPADTE_TODO",
    payload: todo,
  };
};

export let deleteTodo = (todo) => {
  return {
    type: "DELETE_TODO",
    payload: todo,
  };
};
