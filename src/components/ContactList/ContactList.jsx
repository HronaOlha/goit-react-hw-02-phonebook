import ContactItem from 'components/ContactItem/ContactItem';

const Contactslist = ({ contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem contactName={name} contactNumber={number} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contactslist;
