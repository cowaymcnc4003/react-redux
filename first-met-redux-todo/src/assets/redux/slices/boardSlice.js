import { createSlice } from '@reduxjs/toolkit';
import deleteBoardThunk from '../thunks/deleteBoardThunk';

const initialState = {
  boards: [],
  selectedBoardId: null,
  // saga
  resetBoardSage: {
    pending: false,
    data: null,
    error: null,
  }
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
      const targetBoardId = action.payload;
      return {
        ...state,
        boards: state.boards.filter((board) => {
          return board.id !== targetBoardId;
        })
      };
    },
    selectBoard: (state, action) => {
      state.selectedBoardId = action.payload;
    },
    resetBoard: () => {
      return initialState;
    },
    extraReducers: (builder) => {
      builder
        .addCase(deleteBoardThunk.pending, (state, action) => {
          console.log(action.type);
        })
        .addCase(deleteBoardThunk.fulfilled, (state, action) => {
          console.log(action.type);
        })
        .addCase(deleteBoardThunk.rejected, (state, action) => {
          console.log(action.type);
        });
    },
    // resetboardSage
    resetBoardSagaRequested: (state, action) => {
      state.resetBoardSaga = {
        ...state.resetBoardSage,
        pending: false,
        data: null,
        error: null,
      }
    },
    resetBoardSagaSucceede: (state, action) => {
      state.resetBoardSaga = {
        ...state.resetBoardSage,
        pending: false,
        data: action.payload,
      }
    },
    resetBoardSagaFail: (state, action) => {
      state.resetBoardSaga = {
        ...state.resetBoardSage,
        pending: false,
        error: action.payload,
      }
    },
  }
});

export const {
  createBoard,
  updateBoard,
  deleteBoard,
  selectBoard,
  resetBoard,
  // resetBoardSaga
  resetBoardSagaRequested,
  resetBoardSagaSucceede,
  resetBoardSagaFail,
} = boardSlice.actions;

export default boardSlice.reducer;