import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Form.module.css";
import "react-toastify/dist/ReactToastify.css";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handlerInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmit = (e) => {
    e.preventDefault();

    const { contacts } = this.props;
    const { name, number } = this.state;
    const nameAtList = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    const numberAtList = contacts.some((contact) => contact.number === number);

    if (nameAtList) {
      toast.info(`${name} is already in contacts!`);
    } else if (numberAtList) {
      toast.info(`${number} is already in contacts!`);
    } else if (!name || !number) {
      toast.info("Please, fill out the form!");
    } else {
      this.props.onAddContact(this.state);
    }

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <ToastContainer />

        <form className={styles.container} onSubmit={this.handlerSubmit}>
          <label className={styles.label}>
            Name <br />
            <input
              type="text"
              value={name}
              onChange={this.handlerInputChange}
              name="name"
            />
          </label>
          <label className={styles.label}>
            Number <br />
            <input
              type="tel"
              value={number}
              onChange={this.handlerInputChange}
              name="number"
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { contacts: contactsSelectors.getContacts(state) };
};

const mapDispatchToProps = {
  onAddContact: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
