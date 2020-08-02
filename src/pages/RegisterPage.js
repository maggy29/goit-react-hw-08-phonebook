import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1>Register page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">SignUp</button>
        </form>
      </>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterPage
);
