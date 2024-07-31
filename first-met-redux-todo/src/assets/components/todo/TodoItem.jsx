import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content : space-between;
  gpa: 8px;
`;

const TitleContainer = styled.div`
  flex: 1;
  color: black;
  ${(props) =>
    props.isFinished &&
    `
  color: #cccccc;
  `};
`

const TodoItem = () => {
  const { todo, onFinish, onDelete } = props;
  return (
    <Wrapper>

    </Wrapper>
  );
};

export default TodoItem;