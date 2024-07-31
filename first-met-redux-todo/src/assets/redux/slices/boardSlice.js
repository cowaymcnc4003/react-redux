import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  selectedBoardId: null,
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    createBoard: (state, action) => {
      const newBoarName = action.payload;
      state.boards.push({
        id: state.boards.length + 1,
        title: newBoarName,
      });
    },
    deleteBoard: (state, action) => {
      const tartgetBoardId = action.payload;
      return {
        ...state,
        boards: state.boards.filter((board) => {
          return board.id !== tartgetBoardId;
        })
      };
    },
    selectBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },
    resetBoard: () => {
      return initialState;
    }
  }
});

export const {
  createBoard,
  updateBoard,
  deleteBoard,
  selectBoard,
  resetBoard,
} = boardSlice.actions;

export default boardSlice.reducer;