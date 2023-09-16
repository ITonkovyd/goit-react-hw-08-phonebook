import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  getContacts,
  getLoadingStatus,
} from 'redux/contacts/contactsSelectors';
import { Button, Form, Input, Label } from '../../Services/Styles/Form.styled';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);

  function handleSubmit(e) {
    e.preventDefault();

    const id = nanoid();
    const newContact = { id, name, number };

    const isIncluded = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const NameToTitleCase = newContact.name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (isIncluded) {
      alert(`${NameToTitleCase} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));

      setName('');
      setNumber('');
    }

    e.target.reset();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name <br />
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Phone <br />
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add to contacts'</Button>
    </Form>
  );
}
