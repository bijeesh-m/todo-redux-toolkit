import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/todoSlice";

const TodoList = () => {
    
    const todos = useSelector((state) => state.todos);

    const [todoId, setTodoId] = useState(null);
    const [todoText, setTodoText] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [todoId]);

    const dispatch = useDispatch();

    //////////// DELETE TODO ///////////////

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };

    //////////// TOGGLE TODO ///////////////

    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

    //////////// START OF EDIT TODO ///////////////

    const handleEditTodo = (todoId, todoText) => {
        setTodoId(todoId);
        setTodoText(todoText);
        setIsEditMode(true);
    };

    const handleChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleSave = () => {
        dispatch(editTodo({ id: todoId, todoText }));
        setIsEditMode(false);
        setTodoId(null);
        setTodoText("");
    };

    const handleCancel = () => {
        setIsEditMode(false);
        setTodoId(null);
        setTodoText("");
    };

    //////////// END OF EDIT TODO ///////////////

    return (
        <div className=" flex justify-center ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                {todos.map((todo) => {
                    return (
                        <div
                            key={todo.id}
                            className=" flex flex-col  gap-3 p-2 rounded md:max-w-2xl items-center border justify-between"
                            style={{ backgroundColor: todo.completed ? "greenyellow" : "" }}
                        >
                            {isEditMode && todo.id == todoId ? (
                                <input
                                    className=" border outline-none px-2 py-1 w-full"
                                    type="text"
                                    value={todoText}
                                    onChange={handleChange}
                                    ref={inputRef}
                                />
                            ) : (
                                <p className=" break-all">{todo.text}</p>
                            )}
                            {isEditMode && todo.id == todoId ? (
                                <div className=" flex gap-2 max-w-2xl">
                                    <button
                                        onClick={handleSave}
                                        className=" cursor-pointer border px-3 py-2 bg-amber-300"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className=" cursor-pointer border px-3 py-2 bg-red-500"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <div className=" cursor-pointer flex gap-2 max-w-2xl">
                                    <button
                                        onClick={() => handleEditTodo(todo.id, todo.text)}
                                        className=" cursor-pointer border px-3 py-2 bg-amber-300"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTodo(todo.id)}
                                        className=" cursor-pointer border px-3 py-2 bg-red-500"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleToggleTodo(todo.id)}
                                        className=" cursor-pointer border px-3 py-2 bg-blue-400"
                                    >
                                        Toggle
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;
