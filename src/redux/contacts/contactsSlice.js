import { createSlice } from '@reduxjs/toolkit';
import { addContactReducer } from './reducers/addContactReducer';
import { deleteContactReducer } from './reducers/deleteContactReducer';
import { fetchContactsReducer } from './reducers/fetchContactsReducer';

const initialState = {
  contacts: {
    items: [],
    isLoadingContacts: false,
    addingContact: {
      isAddingContact: false,
      addingContactStatus: null,
    },
    deletingContact: {
      isDeletingContact: false,
      deletingStatusCode: null,
    },
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    fetchContactsReducer(builder);
    deleteContactReducer(builder);
    addContactReducer(builder);
  },
});

export const { filterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
