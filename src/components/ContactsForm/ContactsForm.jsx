import Loader from 'Services/Loader/Loader';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  getAddingContactStatus,
  getContacts,
  getIsAddingContact,
} from 'redux/contacts/contactsSelectors';
import { Button, Form, Input, Label } from '../../Services/Styles/Form.styled';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isAddingContact = useSelector(getIsAddingContact);
  const addingContactStatus = useSelector(getAddingContactStatus);

  useEffect(() => {
    if (addingContactStatus === 201) {
      setName('');
      setNumber('');
    }
  }, [addingContactStatus]);

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
      Notify.failure(`${NameToTitleCase} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
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
      <Button type="submit">
        {isAddingContact ? (
          <Loader width="16" height="16" color="black" />
        ) : (
          'Add to contacts'
        )}
      </Button>
    </Form>
  );
}
