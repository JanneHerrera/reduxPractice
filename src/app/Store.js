import { configureStore } from "@reduxjs/toolkit";
import taskSReducer from "../features/tasks/TaskSlice";
export const store = configureStore({
  reducer: {
    tasks: taskSReducer,
  },
});
