import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts.list);

  const filterValue = useSelector(state => state.filter);

  const filteredData = () => {
    if (filterValue !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList data={filteredData()} />
    </div>
  );
}
