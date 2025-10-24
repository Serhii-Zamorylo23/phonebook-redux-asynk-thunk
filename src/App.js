import './App.css';
import NewContact from './Components/NewContact';
import Contacts from './Components/Contacts';
import Filter from './Components/Filter';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
`;
const App=()=>{
  return(
    <>
      <Title>Phonebook</Title>
      <NewContact/>
      <Title>Contacts</Title>
      <Filter /> 
      <Contacts/> 
      <ToastContainer/>
      </>
  )
}

export default App;

