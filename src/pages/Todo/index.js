import TodoFooter from "../../components/TodoFooter/Index";
import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";

const TodoPage = () => {
    return (
        <div className="todo-page">
            <TodoHeader />
            <TodoList />
            <TodoFooter />
        </div>
    )
}

export default TodoPage;