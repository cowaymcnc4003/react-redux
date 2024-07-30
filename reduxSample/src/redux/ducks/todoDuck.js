// ACTION
const ACTION_TYPE_ADD_TODO = "my-app/todo/ADD_TODO";
const ACTION_TYPE_REMOVE_TODO = "my-app/todo/REMOVE_TODO";
const ACTION_TYPE_REMOVE_ALL = "my-app/todo/REMOVE_ALL";

// Reducer

const initialState = [];

export default function todoReducer(state = initialState, action) {
  // console.log(action.name);
  // console.log(action.text);
  switch (action.type) {
    case ACTION_TYPE_ADD_TODO:
      return state.concat(action.text);
    case ACTION_TYPE_REMOVE_TODO:
      return state.slice(0, -1);
    case ACTION_TYPE_REMOVE_ALL:
      return [];
    default:
      return state;
  }
}

// Action create

export function addTodoActionCreator(text) {
  return {
    type: ACTION_TYPE_ADD_TODO,
    text: text,
  }
}

export function removeTodoActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_TODO,
  }
}

export function removeAllActionCreator() {
  return {
    type: ACTION_TYPE_REMOVE_ALL,
  }
}

