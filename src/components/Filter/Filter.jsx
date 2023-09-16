import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { FilterWrapper, Input, P } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <label htmlFor="filter">
        <P>Find contact by name</P>
        <Input
          type="text"
          name="filter"
          onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
        />
      </label>
    </FilterWrapper>
  );
}
