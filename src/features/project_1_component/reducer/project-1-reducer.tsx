export let todoInitialState: any = {
  toDoList: [],
};

export let todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        toDoList: [...state.toDoList, action.payload],
      });
    case "UPADTE_TODO":
      let cloneState = [...state.toDoList];
      let index = cloneState.findIndex(
        (todo) => todo.originalVal === action.payload.originalVal
      );
      cloneState.splice(index, 1, action.payload);
      return Object.assign({}, state, {
        toDoList: cloneState,
      });
    case "DELETE_TODO":
      let cloneTodo = [...state.toDoList];
      let deleteIndex = cloneTodo.findIndex(
        (todo) => todo.originalVal === action.payload.originalVal
      );
      cloneTodo.splice(deleteIndex, 1);
      return Object.assign({}, state, {
        toDoList: cloneTodo,
      });
    default:
      return state;
  }
};
