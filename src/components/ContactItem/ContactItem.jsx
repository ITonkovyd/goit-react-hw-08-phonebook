import Loader from 'Services/Loader/Loader';
import { Notify } from 'notiflix';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  getDeletingStatusCode,
  getIsDeletingContact,
} from 'redux/contacts/contactsSelectors';
import contact from '../../Services/images/contact.png';
import { Button, Div, Li, Span } from './ContactItem.styled';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const isDeletingContact = useSelector(getIsDeletingContact);
  const deletingStatusCode = useSelector(getDeletingStatusCode);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));

    if (deletingStatusCode === 200) {
      Notify.success(`${name} was deleted from your contactlist.`);
    }
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

      <Button type="button" onClick={() => handleDeleteContact(id, name)}>
        {isDeletingContact ? (
          <Loader width="16" height="16" color="black" />
        ) : (
          'Delete'
        )}
      </Button>
    </Li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
