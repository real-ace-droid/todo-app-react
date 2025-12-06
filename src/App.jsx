
import './App.css';
import './components/TodoStyles.css'
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoActions from './components/TodoActions';
import { TodoProvider } from './context/TodoContext';

function App() {

  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo Application</h1>
        <TodoInput />
        <TodoActions />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;