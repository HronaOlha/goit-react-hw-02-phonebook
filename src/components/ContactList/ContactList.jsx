import PropTypes from 'prop-types';
import { List, Item } from './ContactList.styled';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, deleteItem }) => {
  return (
    <>
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ContactItem
              contactName={name}
              contactNumber={number}
              onDeleteItem={deleteItem}
              itemId={id}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
};
