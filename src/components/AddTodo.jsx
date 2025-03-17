import React, { useState } from "react";
import { addTodo } from "../features/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleAddTodo} className=" mt-10 w-xl flex md:w-2xl ">
                <input
                    className=" flex-1 border px-3 py-2 rounded-l outline-none"
                    type="text"
                    placeholder=" Enter todo"
                    name="todo"
                    id="todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className=" border px-3 py-2 rounded-r bg-green-500">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
