import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import Alert from "./routering/Alert";
import { setAlert } from "../actions/alert";
import { updateUser } from "../actions/user";
import { loadUser } from "../actions/auth";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[400],
    margin: "1vh 0 0.5vh 0",
    width: "70%",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 500px;
  height: 750px;
  background: ${(props) => (props.mode ? "#faf8f8" : "#322f3d")};
  margin: 50px auto;
  border-radius: 10px;
  padding: 25px;
`;
const BackBtn = styled.button`
  &:hover {
    color: #cc4c43;
  }
  align-self: flex-start;
  margin: 0;
  border: none;
  color: #ac8eca;
  background-color: ${(props) => (props.mode ? "#faf8f8" : "#322f3d")};
  font-size: 30px;
`;
const TextBox = styled.input`
  &:focus {
    color: #ac8eca;
  }
  &::placeholder {
    color: #ac8eca;
  }
  color: #ac8eca;
  background-color: ${(props) => (props.mode ? "#faf8f8" : "#322f3d")};
  align-self: center;
  border: solid 1px #ac8eca;
  padding: 12px 15px;
  margin: 8px 0;
  width: 80%;
`;
const UserImage = styled.img`
  display: block;
  height: 22vh;
  width: 22vh;
  margin: 0 auto 0 auto;
  border: solid 1px #ac8eca;
  border-radius: 30vh;
`;
const SpanText = styled.span`
  color: #ac8eca;
  font-weight: bold;
  font-size: 15px;
  margin-left: 35px;
`;
const UploadBtn = styled.input`
  align-self: center;
  margin: 10px 10px 10px 50px;
  border: none;
  color: #ac8eca;
  background-color: transparent;
  font-size: 15px;
  display: inline-block;
  width: 30vh;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
`;
const DoneBtn = styled.button`
  &:hover {
    background-color: #9b48bf;
    color: ${(props) => (props.mode ? "black" : "white")};
  }
  align-self: center;
  border: solid 1px #ac8eca;
  padding: 12px 15px;
  margin: 8px 0;
  font-weight: bold;
  width: 50%;
  background-color: #ac8eca;
  transition: 0.3s;
  color: ${(props) => (props.mode ? "#faf8f8" : "#322f3d")};
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
`;

//**************************
//Styles
//**************************

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      email: this.props.email,
      image: this.props.image,
      password: "",
      c_password: "",
    };
    this.routeChange = this.routeChange.bind(this);
    this.back = this.back.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
  }

  routeChange(path) {
    this.props.history.push(path);
  }

  back(e) {
    e.preventDefault();
    this.routeChange(`/todolist`);
  }

  onChangeFile(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.setState({
        image: reader.result,
      });
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    const { username, email, image, password, c_password } = this.state;
    e.preventDefault();
    if (password !== c_password)
      this.props.setAlert("Passwords Dont Match.", "danger");
    else {
      this.props.updateUser(
        this.props.id,
        this.props.token,
        username,
        email,
        password,
        image
      );
      this.props.loadUser();
    }
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <Redirect to={`/`} />;
    } else
      return (
        <BodyStyle mode={this.props.theme ? 1 : 0}>
          <BackBtn
            mode={this.props.theme ? 1 : 0}
            onClick={(e) => {
              this.back(e);
            }}
          >
            <BiArrowBack />
          </BackBtn>
          {this.state.image.length === 0 ? (
            <UserImage
              alt=" "
              src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
            />
          ) : (
            <UserImage alt=" " src={this.state.image} />
          )}
          <UploadBtn
            type="file"
            name="image"
            onChange={(e) => this.onChangeFile(e.target.files[0])}
          />

          <UserForm
            onSubmit={(e) => {
              this.onSubmit(e);
            }}
          >
            <SpanText>User Name</SpanText>
            <TextBox
              mode={this.props.theme ? 1 : 0}
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.onChange(e)}
            />
            <SpanText>Email</SpanText>
            <TextBox
              mode={this.props.theme ? 1 : 0}
              type="email"
              name="email"
              value={this.state.email}
              onChange={(e) => this.onChange(e)}
            />
            <SpanText>Password</SpanText>
            <TextBox
              mode={this.props.theme ? 1 : 0}
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.onChange(e)}
              required
            />
            <SpanText>Confirm Password</SpanText>
            <TextBox
              mode={this.props.theme ? 1 : 0}
              type="password"
              name="c_password"
              value={this.state.c_password}
              onChange={(e) => this.onChange(e)}
              required
            />
            <ColorButton type="submit">Done</ColorButton>
          </UserForm>
          <Alert />
        </BodyStyle>
      );
  }
}

function mapStateToProps(state) {
  return {
    theme: state.user.theme,
    username: state.auth.user.name,
    email: state.auth.user.email,
    image: state.auth.user.image,
    token: state.auth.token,
    id: state.auth.user._id,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps, { setAlert, updateUser, loadUser })(
  UserProfile
);
