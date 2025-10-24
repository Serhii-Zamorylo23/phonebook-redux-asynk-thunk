import { createAsyncThunk } from "@reduxjs/toolkit";
import { AddContact } from "../api/addContact";

export const AddContactThunk=createAsyncThunk("phonebook/add",({name,contact})=>{
    return AddContact({name,contact})
})