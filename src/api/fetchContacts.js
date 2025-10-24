import axios from "axios"

export const fetchContacts = async()=>{

    const response = await axios.get("https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Phonebook")
    return response.data
}