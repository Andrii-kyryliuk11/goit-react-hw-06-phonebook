import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/Redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.list);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

        break;

      default:
        console.log(value);
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const arrayOfNames = contacts.map(contact => contact.name.toLowerCase());

    if (contacts.length === 0) {
      dispatch(addContact({ name: name, number: number, id: nanoid() }));
      setName('');
      setNumber('');
      return;
    }

    if (arrayOfNames.includes(name.toLowerCase())) {
      alert(`${name} is alerady in Contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContact({ name: name, number: number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button className={css.button__submit} type="submit">
        Add contact
      </button>
    </form>
  );
};
