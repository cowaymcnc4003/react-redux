import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardTodosMap: {},
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { boardId: tartgetBoardId, todo: newTodo } = action.payload;

      if (!state.boardTodosMap[tartgetBoardId]) {
        state.boardTodosMap[tartgetBoardId] = [];
      }

      state.boardTodosMap[tartgetBoardId].push({
        id: state.boardTodosMap[tartgetBoardId].length + 1,
        title: newTodo,
        isFinished: false,
      });
    },
    toggleFinishTodo: (state, action) => {
      const { boardId: tartgetBoardId, todoId: tartgetTodoId } = action.payload;

      const targetTodo = state.boardTodosMap[tartgetBoardId].find((todo) => {
        return todo.id === tartgetBoardId;
      });

      tartgetTodoId.isFinished = !targetTodo.isFinished;
    },
    deleteTodo: (state, action) => {
      const { boardId: tartgetBoardId, todoId: tartgetTodoId } = action.payload;

      state.boardTodosMap[tartgetBoardId] = state.boardTodosMap[tartgetBoardId].filter((todo) => {
        return todo.id !== tartgetTodoId;
      });
    },
    deleteBoardTodos: (state, action) => {
      const targetBoardId = action.payload;

      delete state.boardTodosMap[targetBoardId];
    },
    resetTodo: () => {
      return initialState
    }
  }
});

export const {
  addTodo,
  toggleFinishTodo,
  deleteTodo,
  deleteBoardTodos,
  resetTodo,
} = todoSlice.actions;

export default todoSlice.reducer;