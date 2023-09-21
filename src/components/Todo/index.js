import "./style.css";
import { useState } from "react";

import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, handleChangeStatus, editTodo, handleDeleteTodo }) => {
    const { isCompleted, id, estPomodoros } = todo;
    const [isEditting, setIsEditting] = useState(false);
    const [text, setText] = useState(todo.text)

    const todoTextClass = `todo__text ${isCompleted && "todo__text--completed"}`;
    const handleEditTodo = (event) => {
        if (event.key === "Enter" && text) {
            editTodo(id, text);
            setIsEditting(!isEditting);
        }
    };

    return (
        <div className="todo">
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => handleChangeStatus(id)}
            ></input>
            {
                isEditting ? (<input
                    type="text"
                    value={text}
                    onChange={event => setText(event.target.value)}
                    onKeyDown={handleEditTodo}
                ></input>
                ) : (
                    <label
                        className={todoTextClass}

                        onDoubleClick={() => setIsEditting(!isEditting)}>{text}
                    </label>
                )}
            <label>{estPomodoros}</label>
            <button onClick={() => handleDeleteTodo(id)}>
                <AiOutlineDelete />
            </button>

        </div>
    )
}

export default Todo;