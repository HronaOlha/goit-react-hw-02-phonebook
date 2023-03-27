import { Component } from 'react';
import { nanoid } from 'nanoid';
import Contactlist from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  /* <div>
    <h1>Phonebook</h1>
    <ContactForm ... />
  
    <h2>Contacts</h2>
    <Filter ... />
    <ContactList ... />
  </div> */

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>

        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.filter}
            onChange={this.inputChange}
          />
        </label>
        <Contactlist contacts={this.handleFilter()} />
      </>
    );
  }
}
export default App;
