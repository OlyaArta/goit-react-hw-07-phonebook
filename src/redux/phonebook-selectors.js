export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContacts = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) => {
    console.log(contact.name.name);
    console.log(contact.name);
    return contact.name.name.toLowerCase().includes(normalizedFilter);
    // return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
