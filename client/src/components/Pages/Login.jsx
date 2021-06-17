import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import styled from "styled-components";
import { Redirect } from "react-router";
import login_img from "../assets/undraw_secure_login_pdn4.png";
import AlertM from "../routering/Alert";
import { CustomField, CustomButton, Loading, Form, CustomImage } from "../commonComponents";

const Title = styled.h2`
  font-size: 3vh;
  margin: 2vh 1vh;
  text-align: center;
  line-height: 0.8;
  color: #322f3d;
`;

const BtnContainer = styled.div`
  @media (max-width: 450px) {
    flex-direction: column;
    margin: 1vh;
  }
  display: flex;
  justify-content: center;
  margin-top: 1vh;
`;

//**************************
//Styles
//**************************

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange(path) {
    this.props.history.push(path);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.login(email, password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={`/dashboard`} />;
    } else
      return (
        <>
          {!this.props.loading ? (
            <Form onSubmit={(e) => this.onSubmit(e)}>
              <Title>Login</Title>
              <CustomImage alt="loginimg.png" src={login_img} />
              <CustomField 
                id="outlined-basic" 
                label="Username"
                variant="outlined"                 
                type="text"
                placeholder="Username"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChange(e)}
                required/>
              <CustomField 
                id="outlined-basic" 
                label="Password"
                variant="outlined"                 
                type="password"
                placeholder="Password"
                name="password"
                minLength="4"
                value={this.state.password}
                onChange={(e) => this.onChange(e)}
                required/>
              <BtnContainer>
                <CustomButton type="submit">Login</CustomButton>
              </BtnContainer>
              <AlertM />
            </Form>
          ) : (
            <Loading />
          )}
        </>
      );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { login })(Login);
