import { Component } from 'react';
import Contactlist from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  };

  handleFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  handleSubmit = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onHandleInputChange={this.handleInputChange}
        />
        <Contactlist contacts={this.handleFilter()} />
      </>
    );
  }
}
export default App;
