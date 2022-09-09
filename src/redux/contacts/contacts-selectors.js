const getContactsList = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const contactsSelectors = {
  getContactsList,
  getFilter,
};

export default contactsSelectors;
