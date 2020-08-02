import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;
const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter.toLowerCase())
    );
  }
);

const getContactById = createSelector(
  [(state, id) => id, getContacts],
  (id, contacts) => contacts.find((contact) => contact.id === id)
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getVisibleContacts,
  getContactById,
};
