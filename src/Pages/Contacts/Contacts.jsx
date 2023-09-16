import { useEffect } from 'react';

import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  getContacts,
  getLoadingStatus,
} from 'redux/contacts/contactsSelectors';

import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import { H1 } from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <H1>Phonebook</H1>
      <ContactsForm />
      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>
          No contacts yet. <br /> It's time to create new contacts!
        </p>
      )}
    </>
  );
};

export default Contacts;
