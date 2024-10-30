import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = 1;
      }
    },
    MarkAsPending: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = 0;
      }
    },
  },
});

export const { addTodo, deleteTodo, markAsDone, MarkAsPending } =
  todoSlice.actions;

export default todoSlice.reducer;
