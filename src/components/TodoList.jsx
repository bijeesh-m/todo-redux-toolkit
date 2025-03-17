import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);

    console.log(todos);

    const dispatch = useDispatch();

    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };
    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    };

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
                            <p className=" break-all">{todo.text}</p>
                            <div className=" flex gap-2 max-w-2xl">
                                <button className=" border px-3 py-2 bg-amber-300">Edit</button>
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    className=" border px-3 py-2 bg-red-500"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleToggleTodo(todo.id)}
                                    className=" border px-3 py-2 bg-blue-400"
                                >
                                    Toggle
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TodoList;
