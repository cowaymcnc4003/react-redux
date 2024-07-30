import { connect } from "react-redux";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../../actions";
// redux toolkit 변경
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../../ducks/todoDuck";
import TodoApp from "../../components/TodoApp";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from '../actions/fetchTodosAction';
// import addTodoThunkActionCreator from "../../thunks/addTodoThunk";
// redux toolkit 변경
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeAllActionCreator,
  removeAll as removeTodoActionCreator
} from '../slices/todoSlice';

function mapStateToProps(state, ownProps) {
  return {
    todoItems: [...state.todo, ...state.fetchTodos.data],
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      // dispatch(addTodoActionCreator(text));
      // dispatch(addTodoThunkActionCreator(text));
      dispatch(addTodoActionCreator(text));

    },
    removeTodo: () => {
      dispatch(removeTodoActionCreator());
    },
    removeAll: () => {
      dispatch(removeAllActionCreator());
    },
    triggerAsyncFuction: (asyncFuction) => {
      dispatch(asyncFuction);
    },
    fetchTodo: () => {
      console.log('dispatch(fetchTodosRequestedActionCreator());');
      dispatch(fetchTodosRequestedActionCreator());
    }
  }
}

const TodoAppContainer = connect(
  mapStateToProps, mapDispatchToProps
)(TodoApp);

export default TodoAppContainer;