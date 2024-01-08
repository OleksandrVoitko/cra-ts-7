import { createSlice, nanoid } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const tasksSlice = createSlice({
  name: "taskSlice",
  initialState: initialState.todoList.tasks,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            text,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.findIndex((task) => task.id === action.payload);
        state.splice(index, 1);
      },
    },
    toggleCompleted: {
      reducer(state, action) {
        for (const task of state) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
