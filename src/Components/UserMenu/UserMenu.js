import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar:
    "https://gravatar.com/avatar/f7c6a73e4553996326f50d62f25089d5?s=200&d=mp&r=x",
});

export default connect(mapStateToProps, { onLogout: authOperations.logout })(
  UserMenu
);
