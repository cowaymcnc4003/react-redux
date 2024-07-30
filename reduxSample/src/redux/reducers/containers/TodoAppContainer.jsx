import { connect } from "react-redux";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../../actions";
import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../../ducks/todoDuck";
import TodoApp from "../../../components/TodoApp";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from '../../actions/fetchTodosAction';
import addTodoThunkActionCreator from "../../thunks/addTodoThunk";

function mapStateToProps(state, ownProps) {
  return {
    todoItems: [...state.todo, ...state.fetchTodos.data],
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (text) => {
      // dispatch(addTodoActionCreator(text));
      dispatch(addTodoThunkActionCreator(text));
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