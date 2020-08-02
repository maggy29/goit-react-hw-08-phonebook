import React from "react";
import { connect } from "react-redux";
import styles from "./Contact.module.css";
import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

function Contact({ id, name, number, onRemove }) {
  return (
    <li className={styles.container} key={id}>
      <p>
        {name}: {number}
      </p>
      <button className={styles.button} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
