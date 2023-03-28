import { Component } from 'react';

import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    const nameId = nanoid();

    const userContacts = {
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    };

    this.clearData();

    this.props.onHandleSubmit(userContacts);
  };

  clearData = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <form action="" onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
