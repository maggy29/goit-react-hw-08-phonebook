import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    {isAuthenticated ? (
      <NavLink
        style={styles.link}
        activeStyle={styles.activeLink}
        to="/contacts"
        exact
      >
        Contacts
      </NavLink>
    ) : (
      <>
        <NavLink
          style={styles.link}
          activeStyle={styles.activeLink}
          to="/signup"
          exact
        >
          SignUp
        </NavLink>
        <NavLink
          style={styles.link}
          activeStyle={styles.activeLink}
          to="/login"
          exact
        >
          LogIn
        </NavLink>
      </>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
