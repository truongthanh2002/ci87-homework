import { useState } from "react";
import TodoFooter from "../../components/TodoFooter/Index";
import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import { TODOS } from "../../data/todos";

const TodoPage = () => {
    const [todos, setTodos] = useState(TODOS)
    const countTodoLeft = () => todos.filter((todo) => !todo.isCompleted).length;
    const handleChangeStatus = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        }))
    };

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo])
    }

    const editTodo = (id, text) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <div className="todo-page">
            <TodoHeader addTodo={addTodo} />
            <hr />
            <TodoList todos={todos} handleChangeStatus={handleChangeStatus} editTodo={editTodo} />
            <hr />
            <TodoFooter todoLeft={countTodoLeft()} />
        </div>
    )
}

export default TodoPage;