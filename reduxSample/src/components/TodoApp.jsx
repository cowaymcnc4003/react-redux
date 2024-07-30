import { useState } from "react";
// redux hook
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo as addTodoActionCreator,
  removeTodo as removeAllActionCreator,
  removeAll as removeTodoActionCreator
} from '../redux/slices/todoSlice';
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from '../redux/actions/fetchTodosAction'

const TodoApp = (props) => {
  // redux hook
  // const { todoItems, addTodo, removeTodo, removeAll, triggerAsyncFuction, fetchTodo } = props;

  // redux hook
  const todoItems = useSelector((state) => (
    [
      ...state.todo,
      ...state.fetchTodos.data,
    ]
  ));
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState('');
  return (
    <div>
      <h3>오늘 할 일</h3>
      <ul>
        {
          todoItems.map((todoItem, index) => {
            return (
              <li key={index}>
                {todoItem}
              </li>
            );
          })}
      </ul>
      <div>
        <input value={newTodo} onChange={(e) => {
          setNewTodo(e.target.value);
        }} />
      </div>
      <button onClick={() => {
        // redux hook
        // addTodo(newTodo);
        dispatch(addTodoActionCreator(newTodo));
        setNewTodo('');
      }}>할 일 추가</button>
      <button onClick={() => {
        // redux hook
        // removeTodo
        dispatch(removeTodoActionCreator());
      }}>할 일 삭제</button>
      <button onClick={() => {
        // redux hook
        // removeAll
        dispatch(removeAllActionCreator());
      }}>모두 삭제</button>
      <button onClick={() => {
        // redux hook
        // triggerAsyncFuction((dispatch, getState) => {
        //   console.log('비동기 함수 실행', getState());
        //   new Promise((resolve, reject) => {
        //     setTimeout(resolve, 3000);
        //   }).then(() => {
        //     console.log('비동기 함수 성공', getState());
        //   }).finally(() => {
        //     console.log('비동기 함수 종료', getState());
        //   })
        // });
        dispatch((dispatch, getState) => {
          console.log('비동기 함수 실행', getState());
          new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
          }).then(() => {
            console.log('비동기 함수 성공', getState());
          }).finally(() => {
            console.log('비동기 함수 종료', getState());
          })
        });
      }}>비동기 함수 테스트</button>
      <button onClick={() => {
        // fetchTodo
        dispatch(fetchTodosRequestedActionCreator());
      }}>서버에서 할 일 목록 받아오기</button>
    </div>
  );
};

export default TodoApp;