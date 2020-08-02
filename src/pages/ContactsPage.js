import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../Components/Form/Form";
import Filter from "../Components/Filter/Filter";
import ContactsList from "../Components/ContactList/ContactList";
import { contactsOperations, contactsSelectors } from "../redux/contacts";

class ContactsPage extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <>
        <Form />
        {this.props.isLoadingContacts && <h1>Doing HTTP stuff...</h1>}
        <Filter />
        <ContactsList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
