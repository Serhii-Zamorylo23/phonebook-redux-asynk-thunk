import { createSlice } from "@reduxjs/toolkit";
import { AddContactThunk } from "../../thunks/addContactThunk";
import { toast } from "react-toastify";
import { deleteContactThunk } from "../../thunks/deleteContactThunk";
import {fetchContactsThunk} from "../../thunks/fetchContactsThunk";
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: "",
};
const Reducer = createSlice({
  name: "Phonebook",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("Контакт записано!");
        state.isLoading = false;
      })
      .addCase(AddContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(AddContactThunk.rejected, (state, action) => {
        state.error = "Упс..Помилка.Контакт не записано";
        toast.error(`${state.error}`);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter( (contact) => contact.id !== action.payload);
        toast.success("Контакт видалено");
        state.isLoading = false;
        fetchContactsThunk()
      })
      .addCase(deleteContactThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = "Упс..Помилка.Контакт не записано";
        toast.error(`${state.error}`);
        state.isLoading = false;
      })
      .addCase(fetchContactsThunk.fulfilled,(state,action)=>{
        state.items = action.payload
      })
  },
});

export default Reducer.reducer;
export const { filter } = Reducer.actions;
