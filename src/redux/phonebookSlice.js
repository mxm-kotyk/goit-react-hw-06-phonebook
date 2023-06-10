import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
  contacts: [
    { id: 'lhluioiu', name: 'Abby Rat', number: '6546513213' },
    { id: 'lhluj0z5', name: 'Sally Suqirrel', number: '5461881637' },
    { id: 'lhlujbcu', name: 'Kenny Mice', number: '8735121813' },
    { id: 'lhlujnfs', name: 'William Hamster', number: '138431876' },
    { id: 'lhxel9t8', name: 'Molly Kangorou', number: '68461558' },
  ],
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: uniqid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
    chageFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, chageFilter } =
  phonebookSlice.actions;
export const phonebookReducer = phonebookSlice.reducer;
