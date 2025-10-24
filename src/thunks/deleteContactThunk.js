import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact } from "../api/deleteContact";

export const deleteContactThunk = createAsyncThunk("phonebook/delete", (id) => {
  return deleteContact(id);
});
