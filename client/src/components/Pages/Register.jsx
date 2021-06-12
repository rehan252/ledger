import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { createUser } from "../../actions/user";
import { Redirect } from "react-router";
import Reg_img from "../assets/undraw_super_thank_you_obwk.png";
import { BiArrowBack } from "react-icons/bi";
import AlertM from "../routering/Alert";
import { CustomField, CustomButton, Form, CustomImage } from "../commonComponents";

const BackBtn = styled.button`
  &:hover {
    color: #cc4c43;
  }
  display: flex;
  background-color: transparent;
  align-self: center;
  margin: 0 auto 0 0;
  border: none;
  color: #322f3d;
  font-size: 3vh;
`;
const Title = styled.h2`
  position: absolute;
  margin-top: 1vh;
  font-size: 3vh;
  line-height: 0.8;
  color: #322f3d;
`;

const RegDiv = styled.div`
  display: flex;
  justify-content: center;
`;
//**************************
//Styles
//**************************

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    const { username, email, password } = this.state;
    e.preventDefault();
    this.props.createUser(username, email, password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to={`/dashboard`} />;
    } else
      return (
        <Form onSubmit={(e) => this.onSubmit(e)}>
          <RegDiv>
            {" "}
            <BackBtn
              onClick={(e) => {
                this.routeChange(`/`);
              }}
            >
              <BiArrowBack />
            </BackBtn>{" "}
            <Title>Register</Title>{" "}
          </RegDiv>

          <CustomImage alt="regimg.png" src={Reg_img} />
          <CustomField
            id="outlined-basic" 
            label="Full name"
            variant="outlined" 
            type="name"
            placeholder="Full name"
            name="username"
            value={this.state.username}
            onChange={(e) => this.onChange(e)}
            required
          />
          <CustomField
            id="outlined-basic" 
            label="Email"
            variant="outlined" 
            type="email"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={(e) => this.onChange(e)}
            required
          />
          <CustomField
            id="outlined-basic" 
            label="Password"
            variant="outlined" 
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={this.state.password}
            onChange={(e) => this.onChange(e)}
            required
          />
          <CustomButton type="submit">Register</CustomButton>
          <AlertM />
        </Form>
      );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { createUser })(Register);
