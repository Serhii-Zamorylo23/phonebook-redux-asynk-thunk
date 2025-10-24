import axios from "axios"

export const deleteContact= async(id) =>{
    const response = await axios.delete(`https://68f7b2c7f7fb897c6616d5be.mockapi.io/Phonebook/Phonebook/${id}`)
    return response.data
}