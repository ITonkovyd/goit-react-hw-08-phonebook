import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL + '/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(URL + '/contacts', newContact);
      Notify.success(`${newContact.name} successfully added to your contacts.`);
      return { data: response.data, status: response.status };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ id, name }, thunkAPI) => {
    try {
      const response = await axios.delete(URL + `/contacts/${id}`);
      Notify.success(`${name} deleted from your contacts.`);
      return { id, status: response.status };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
