import React from "react";
import { connect } from "react-redux";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id }) => (
        <Contact key={id} id={id} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
