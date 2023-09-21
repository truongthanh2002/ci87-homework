import { useState, useEffect } from "react";

import TodoFooter from "../../components/TodoFooter/Index";
import TodoList from "../../components/TodoList";
import TodoHeader from "../../components/TodoHeader";
import { TODOS } from "../../data/todos";

const TodoPage = () => {
    const [todos, setTodos] = useState(TODOS)
    const [filteredTodos, setFilteredTodos] = useState(TODOS);
    const countTodoLeft = () => todos.filter((todo) => !todo.isCompleted).length;

    useEffect(() => {
        setFilteredTodos(todos)
    }, [todos])

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

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    const hanleFilterByStatus = (status) => {
        if (status === "active") {
            setFilteredTodos(todos.filter((todos) => todos.isCompleted === false))
        } else if (status === "completed") {
            setFilteredTodos(todos.filter((todo) => todo.isCompleted === true))
        } else {
            setFilteredTodos(todos)
        }

    };

    return (
        <div className="todo-page">
            <TodoHeader addTodo={addTodo} />
            <hr />
            <TodoList
                todos={filteredTodos}
                handleChangeStatus={handleChangeStatus}
                editTodo={editTodo}
                handleDeleteTodo={handleDeleteTodo}
                hanleFilterByStatus={hanleFilterByStatus}
            />
            <hr />
            <TodoFooter todoLeft={countTodoLeft()} />
        </div>
    )
}

export default TodoPage;