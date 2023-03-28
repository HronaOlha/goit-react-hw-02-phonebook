import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Container, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Héloïse Letissier', number: '4591256' },
      { id: 'id-2', name: 'Gwendoline Christie', number: '4438912' },
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
    const contactsName = this.state.contacts.map(contact => contact.name);
    if (contactsName.includes(obj.name)) {
      alert(`${obj.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };

  handleDeleteItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onHandleSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <Filter
          filter={this.state.filter}
          onHandleInputChange={this.handleInputChange}
        />
        <ContactList
          contacts={this.handleFilter()}
          deleteItem={this.handleDeleteItem}
        />
      </Container>
    );
  }
}
export default App;
