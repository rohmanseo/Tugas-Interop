import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";
import AuthService from "./auth/auth-service";
import "./style2.css";

const cookies = new Cookies();
const axios = require("axios");

class RegisterComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };

    this.handlePasswordChange = (event) => {
      this.setState(
        { password: event.target.value }
      );
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let that = this;
    let url = 'http://127.0.0.1:8000/api/auth/register';

    axios
      .post(url, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        const token = response.data['access_token'];
        console.log(token)
        cookies.set('access_token', token, { path: '/' });
        that.props.history.push('/dashboard')
      })
      .catch(function (error) {
        console.log(error)
      });

  };
  render() {
    if(cookies.get('access_token') != null){
      return(
      <Redirect to="/dashboard" />
      );
    }
    return (
      <body class="register">
        <div class="container register">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 message">Create an Account!</h1>
                    </div>
                    <form class="user" onSubmit={this.handleSubmit}>
                      <div class="form-group row">
                        <div class="col-sm-12 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="First Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email Address"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                        />
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                          />
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Repeat Password"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Register Account
                      </button>
                    </form>
                    <hr />
                    <div class="text-center">
                    </div>
                    <div class="text-center">
                      <Link to="/">
                        <a class="small" href="login.html">
                          Already have an account? Login!
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

        <script src="js/sb-admin-2.min.js"></script>
      </body>
    );
  }
}

export default RegisterComponent;
