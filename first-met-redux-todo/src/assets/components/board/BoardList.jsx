import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BoardItem from "./BoardItem";
import { selectBoard, deleteBoard } from "../../redux/slices/boardSlice";
import deleteBoardThunk from "../../redux/thunks/deleteBoardThunk";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BoardList = (props) => {
  const boards = useSelector((state) => state.board.boards);
  const selectedBoardId = useSelector((state) => state.board.selectedBoardId);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {boards.map((board, index) => {
        const isSelected = board.id === selectedBoardId;
        console.log(board.id);
        console.log(isSelected);
        return (
          <BoardItem
            key={index}
            board={board}
            isSelected={isSelected}
            onSelect={() => {
              dispatch(selectBoard(board.id));
            }}
            onDelete={() => {
              // dispatch(deleteBoard(board.id));
              // Thunk
              dispatch(deleteBoardThunk(board.id));

            }}
          />
        )
      })}
    </Wrapper>
  );
};

export default BoardList;