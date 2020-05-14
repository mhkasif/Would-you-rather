import React from "react";
import { Dropdown } from "semantic-ui-react";
import  * as DATA from '../../Data/_DATA'
const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/joe.jpg",
    },
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
    },
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
    },
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
    },
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/veronika.jpg",
    },
  },
];

const LoginCard = () => {
  return (
    <div className="login-card">
      <div className="login-card--heading">Welcome to Would You Rather App</div>
      <div className="login-card--logo">
        <div className="react-image"></div>
        <h2>Sign In</h2>
      </div>
      <div className='dropdown'>
        <Dropdown
          placeholder="Select Friend"
          fluid
          selection
          options={DATA._getUsers()}
        />
      </div>
    </div>
  );
};

export default LoginCard;
