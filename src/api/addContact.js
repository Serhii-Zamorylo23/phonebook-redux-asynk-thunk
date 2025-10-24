import axios from "axios"

export const AddContact=async({name,contact})=>{
    const response = await axios.post("https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Phonebook",{name,contact})
    return response.data
}