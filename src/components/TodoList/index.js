import Todo from "../Todo";

const TodoList = ({ todos, editTodo, handleChangeStatus, handleDeleteTodo, hanleFilterByStatus }) => {

    return (
        <div className="todo-list">
            <select onChange={event => hanleFilterByStatus(event.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
            </select>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleChangeStatus={handleChangeStatus}
                    editTodo={editTodo}
                    handleDeleteTodo={handleDeleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList;