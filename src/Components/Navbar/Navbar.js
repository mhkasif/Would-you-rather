import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signOutAction } from "../../Redux/User/UserActions";
import { Image } from "semantic-ui-react";

const Navbar = ({ signOutAction, currentUser, location: { pathname } }) => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/home">
          <h3 className={`${pathname.includes("home") ? "active" : ""}`}>
            Home
          </h3>
        </Link>
        <Link to="/add">
          <h3 className={`${pathname.includes("add") ? "active" : ""}`}>
            Add Question
          </h3>
        </Link>
        <Link to="/leaderboard">
          <h3 className={`${pathname.includes("leader") ? "active" : ""}`}>
            {" "}
            Leaderboard
          </h3>
        </Link>
        {currentUser && (
          <div className="user">
            <div>Hello, {currentUser.name}</div>
            <div className="im">
              <Image avatar src={currentUser.avatarURL} />
            </div>
          </div>
        )}
        <Link to="/" onClick={signOutAction}>
          {currentUser && <h3>signout</h3>}
        </Link>
      </div>
    </div>
  );
};
const mapState = (state) => ({
  currentUser: state.users.currentUser,
});
const actions = {
  signOutAction,
};
export default connect(mapState, actions)(withRouter(Navbar));
