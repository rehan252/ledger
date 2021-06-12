import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";


export const CustomField = withStyles((theme) => ({
    root: {
      margin: "5px auto 5px auto",
      width: "80%",
    },
  }))(TextField);
  
  
 export const CustomButton = withStyles((theme) => ({
    root: {
      color: "#ffffff",
      backgroundColor: "#322f3d",
      margin: "1vh",
      width: "23vh",
      height: "4.5vh",
      alignSelf: "center",
      fontSize: "1.7vh",
      "&:hover": {
        backgroundColor: "#6f6b7c",
      },
    },
  }))(Button);


  //***********************************
  // Styled components
  //***********************************

 export const Form = styled.form`
  @media (max-width: 450px) {
    width: auto;
    margin: 9vh 1vh 0 1vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 56vh;
  height: 77vh;
  background: #ffffff;
  margin: 9vh auto;
  border-radius: 1vh;
  padding: 2.5vh;
`;

  export const Loading = styled.div`
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &::after {
    content: " ";
    display: block;
    width: 20vh;
    height: 20vh;
    margin: 35vh auto;
    border-radius: 50%;
    border: 6px solid whitesmoke;
    border-color: whitesmoke transparent whitesmoke transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  display: flex;
  margin: auto;
`;

export const CustomImage = styled.img`
  @media (max-width: 450px) {
    height: 30vh;
  }
  @media (max-width: 250px) {
    height: 15vh;
  }
  align-self: center;
  margin: 0.5vh;
  height: 40vh;
`;