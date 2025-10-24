import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "../api/fetchContacts";

export const fetchContactsThunk=createAsyncThunk("phonebook/fetch",()=>{
    return fetchContacts()
})
