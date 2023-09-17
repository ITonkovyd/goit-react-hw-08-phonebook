import Loader from 'Services/Loader/Loader';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import contact from '../../Services/images/contact.png';
import { Button, Div, Li, Span } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleDeleteContact = contactData => {
    dispatch(deleteContact(contactData));
    setIsClicked(true);
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
