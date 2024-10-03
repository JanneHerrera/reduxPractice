import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "task 1 description",
  },
  {
    id: "2",
    title: "task 2",
    description: "task 2 description",
  },
];
export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {},
  },
});

export default taskSlice.reducer;
