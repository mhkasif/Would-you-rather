import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { setCurrentUserAction } from "../../Redux/User/UserActions";
import { Link, withRouter } from "react-router-dom";
const LoginCard = ({
  users,
  setCurrentUserAction,
  match: {
    params: { id },
  },
}) => {
  const [selectedUser, changeUser] = useState(null);

  const options = Object.keys(users).map(function (key) {
    const { id, name, avatarURL } = users[key];
    return {
      key: id,
      text: name,
      value: id,
      image: { avatar: true, src: avatarURL },
    };
  });
  const handleClick = () => {
    setCurrentUserAction(selectedUser);
  };
  const handleChange = (e, { value }) => {
    changeUser(users[value]);
  };
  return (
    <div className="login-card">
      <div className="login-card--heading">Welcome to Would You Rather App</div>
      <div className="login-card--logo">
        <div className="react-image"></div>
        <h2>Sign In</h2>
      </div>
      <div className="dropdown">
        <Dropdown
          onChange={handleChange}
          placeholder="Login As"
          fluid
          selection
          options={options}
        />
      </div>
      <div className="login-btn">
        <Button
          as={Link}
          to={id ? `/questions/${id}` : "home"}
          disabled={!selectedUser}
          onClick={handleClick}
          fluid
          color="teal"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
const actions = {
  setCurrentUserAction,
};
const mapStateToProps = (state) => ({
  users: state.users.users,
});
export default connect(mapStateToProps, actions)(withRouter(LoginCard));
