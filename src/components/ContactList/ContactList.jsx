import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from './Contact/Contact';
import { ContactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts) ?? [];
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => {
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ContactsList>
    </div>
  );
};
