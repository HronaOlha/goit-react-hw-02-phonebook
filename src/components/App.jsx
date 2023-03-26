import { Component } from 'react';
// import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = e => {
    e.preventDefault();

    console.log(e);
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form action="">
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit" onSubmit={this.addContact}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        {/* <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default App;
