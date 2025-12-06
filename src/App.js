


import TodoList from "@app/components/TodoList";
import TodoInput from "@app/components/TodoInput";
import TodoActions from "@app/components/TodoActions";
import { TodoProvider } from "@app/context/TodoContext";

function App() {

  return (
    <TodoProvider>
      <div className="m-2.5">
        <h1>Todo Application</h1>
        <TodoInput />
        <TodoActions />
        <TodoList />
      </div>
    </TodoProvider>);

}

export default App;