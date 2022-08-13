import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { Title } from './App.styled';
import { FormContacts } from './formContacts/FormContacts';
import { ContactList } from './contactsList/ContactsList';
import { Filter } from './filter/Filter';
import { useLocalStorage } from '../hooks/useLocalStorage';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  const [filter, setFilter] = useState('');

  const submitForm = (values, { resetForm }) => {
    const person = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    )
      ? alert(`This ${values.name} is already in contacts`)
      : setContacts(prevState => [person, ...prevState]);

    resetForm();
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    console.log('filter getvisible');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Box bg="lavender" width="50%" mx="auto" p="4" my="4" boxShadow="boxShadow">
      <Title>Phonebook</Title>
      <FormContacts submitForm={submitForm} />
      <Title>Contacts</Title>
      <Filter onChange={changeFilter} />

      <ContactList contacts={getVisibleContacts()} delContact={deleteContact} />
    </Box>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   submitForm = (values, { resetForm }) => {
//     const person = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };

//     this.state.contacts.some(
//       contact => contact.name.toLowerCase() === values.name.toLowerCase()
//     )
//       ? alert(`This ${values.name} is already in contacts`)
//       : this.setState(prevState => {
//           return {
//             contacts: [person, ...prevState.contacts],
//           };
//         });

//     resetForm();
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   render() {
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Box
//         bg="lavender"
//         width="50%"
//         mx="auto"
//         p="4"
//         my="4"
//         boxShadow="boxShadow"
//       >
//         <Title>Phonebook</Title>
//         <FormContacts submitForm={this.submitForm} />
//         <Title>Contacts</Title>
//         <Filter onChange={this.changeFilter} />

//         <ContactList
//           contacts={visibleContacts}
//           delContact={this.deleteContact}
//         />
//       </Box>
//     );
//   }
// }
