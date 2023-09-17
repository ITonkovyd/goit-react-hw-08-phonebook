import Loader from 'Services/Loader/Loader';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { getIsDeletingContact } from 'redux/contacts/contactsSelectors';
import contact from '../../Services/images/contact.png';
import { Button, Div, Li, Span } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const isDeletingContacts = useSelector(getIsDeletingContact);

  useEffect(() => {
    if (!isDeletingContacts) {
      setIsClicked(false);
    }
  }, [isDeletingContacts]);

  const handleDeleteContact = contactData => {
    setIsClicked(true);
    dispatch(deleteContact(contactData));
  };

  return (
    <Li>
      <Div>
        <img src={contact} alt="contact" width="20px" />
        <Span>
          {name}: <span> </span>
          {number}
        </Span>
      </Div>

      <Button type="button" onClick={() => handleDeleteContact({ id, name })}>
        {isClicked ? <Loader width="16" height="16" color="black" /> : 'Delete'}
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
