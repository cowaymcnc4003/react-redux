import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js'
// import TodoApp from './components/TodoApp.jsx';
// import TodoAppContainer from './redux/containers/TodoAppContainer.jsx';
import TodoApp from './components/TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
