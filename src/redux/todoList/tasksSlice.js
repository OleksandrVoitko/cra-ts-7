import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { initialState } from "../initialState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tasksSlice = createSlice({
  name: "taskSlice",
  initialState: {
    tasks: [
      //   { id: "0", text: "Learn HTML and CSS", completed: true },
      //   { id: "1", text: "Get good at JavaScript", completed: true },
      //   { id: "2", text: "Master React", completed: false },
      //   { id: "3", text: "Discover Redux", completed: false },
      //   { id: "4", text: "Build amazing apps", completed: false },
    ],
  },
  reducers: {
    addTask: {
      reducer({ tasks }, action) {
        tasks.push(action.payload);
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
      reducer({ tasks }, action) {
        const index = tasks.findIndex((task) => task.id === action.payload);
        tasks.splice(index, 1);
      },
    },
    toggleCompleted: {
      reducer({ tasks }, action) {
        for (const task of tasks) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
    },
  },
});

const persistConfig = {
  key: "items",
  storage,
};

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);
