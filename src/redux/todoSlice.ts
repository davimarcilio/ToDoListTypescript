import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
export interface List {
  id: string;
  content: string;
  isDone: boolean;
}

interface InitialState {
  list: List[];
}

// Define the initial state using that type
const initialState: InitialState = {
  list: [],
};

function setItemsOnLocalStorage(items: List[]) {
  localStorage.setItem("items", JSON.stringify(items));
}

export const counterSlice = createSlice({
  name: "todo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    addToList: (state, { payload }) => {
      state.list.push(payload);
      setItemsOnLocalStorage(state.list);
    },
    changeIsDone: (state, { payload }) => {
      const newListOfItems = state.list.map((item) => {
        item.id === payload ? (item.isDone = !item.isDone) : item.isDone;
        return item;
      });
      state.list = newListOfItems;
      setItemsOnLocalStorage(state.list);
    },
    deleteFromList: (state, { payload }) => {
      const newListOfItems = state.list.filter((item) => item.id !== payload);
      state.list = newListOfItems;
      setItemsOnLocalStorage(state.list);
    },
    setListFromLocalData: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export const { addToList, changeIsDone, deleteFromList, setListFromLocalData } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todo;

export default counterSlice.reducer;
