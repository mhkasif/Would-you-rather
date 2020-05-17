import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (currentUser) return <Component {...props} />;
        else return <Redirect push to="/" />;
      }}
    />
  );
};

var mapStateToProps = (state) => ({
  currentUser: state.users.currentUser,
});

export default connect(mapStateToProps)(PrivateRoute);
