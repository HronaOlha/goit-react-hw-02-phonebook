import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';

const ContactItem = ({ contactName, contactNumber, onDeleteItem, itemId }) => {
  return (
    <>
      <p>
        &#x2022; {contactName} : {contactNumber}
      </p>
      <Button type="button" onClick={() => onDeleteItem(itemId)}>
        Delete
      </Button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  itemId: PropTypes.string.isRequired,
};
