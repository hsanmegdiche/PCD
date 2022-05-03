import React from "react";
import validator from "validator";
import { TextField } from "@material-ui/core";
import Star from "./Star.js";
import axios from "axios";

class Yminlogin extends React.Component {
  constructor() {
    super();
    this.state = {
      emailerror: true,
      confirmerror: true,
      password: "",
      confirm: "",
      email: "",
      username: "",
    };
    this.handleMail = this.handleMail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.emailerror === false) {
      try {
        await axios.post("/user/login", {
          email: this.state.email,
          password: this.state.password,
        });
        localStorage.setItem("firstLogin", true);
        window.location.href = "/asba";
      } catch (err) {
        alert(err.response.data.msg);
      }
    }
  };

  handleMail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      this.setState({
        email: email,
        emailerror: false,
      });
    } else {
      this.setState({
        email: email,
        emailerror: true,
      });
    }
  };
  handleConfirm = (e) => {
    var confirm = e.target.value;
    this.setState({ confirm: confirm });
    if (confirm === this.state.password) {
      this.setState({
        confirmerror: false,
      });
    } else {
      this.setState({
        confirmerror: true,
      });
    }
  };
  handleName = (e) => {
    var username = e.target.value;
    this.setState({ username: username });
  };

  handlePassword = (e) => {
    var password = e.target.value;
    this.setState({ password: password });
  };

  render() {
    return (
      <div style={{ width: "400px", paddingLeft: "400px" }}>
        <pre>
          <Star texte="Accéder à votre compte" />
          <form>
            <TextField
              fullWidth
              label="Entrer votre email"
              type="email"
              id="email"
              name="email"
              onChange={(e) => this.handleMail(e)}
              color={this.state.emailerror ? "secondary" : "primary"}
            />
            <br />
            <TextField
              fullWidth
              label="Entrer votre mot de passe"
              type="password"
              id="userPassword"
              name="password"
              onChange={(e) => this.handlePassword(e)}
            />
            <br />
            <br />
            <TextField
              type="submit"
              value="Envoyer"
              onClick={this.handleSubmit}
              align="middle"
            />
          </form>
          <br />
        </pre>
      </div>
    );
  }
}

export default Yminlogin;
