import TodoFooter from "../../components/TodoFooter/Index";
import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import { TODOS } from "../../data/todos";

const TodoPage = () => {
    const countTodoLeft = () => TODOS.filter((todo) => !todo.isCompleted).length;

    return (
        <div className="todo-page">
            <TodoHeader />
            <TodoList todos={TODOS} />
            <TodoFooter todoLeft={countTodoLeft()} />
        </div>
    )
}

export default TodoPage;