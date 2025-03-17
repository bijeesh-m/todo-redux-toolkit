import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        editTodo: (state, action) => {},
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id != action.payload);
        },
        toggleTodo: (state, action) => {
            state.map((todo) => {
                if (todo.id == action.payload) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        },
    },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
