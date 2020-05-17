import React, { Component } from "react";
import "./Styles/main.scss";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { fetchUsersAction } from "./Redux/User/UserActions";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddQuestionPage from "./Pages/AddQuestionPage/AddQuestionPage";
import { fetchQuestionsAction } from "./Redux/Questions/QuestionsActions";
import HomePage from "./Pages/HomePage/HomePage";
import LeaderboardPage from "./Pages/LeadeboardPage/LeaderboardPage";
import Question from "./Pages/Questions/Question";
import ResultCard from "./Pages/ResultCard/ResultCard";
import Navbar from "./Components/Navbar/Navbar";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Loader from "./Components/Loader/Loader";
import Page404 from "./Pages/Page404/Page404";

class App extends Component {
  componentDidMount() {
    this.props.fetchUsersAction();
    this.props.fetchQuestionsAction();
  }

  render() {
    return (
      <div className="app-container">
        <Loader />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/login/:id" component={LoginPage} />
          <PrivateRoute path="/add" component={AddQuestionPage} />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/leaderboard" component={LeaderboardPage} />
          <Route path="/questions/:question_id" component={Question} />
          <PrivateRoute path="/result/:question_id" component={ResultCard} />
          <PrivateRoute path="/404" component={Page404} />
        </Switch>
      </div>
    );
  }
}
const mapState = (state) => ({
  currentUser: state.users.currentUser,
});
const actions = {
  fetchUsersAction,
  fetchQuestionsAction,
};
export default connect(mapState, actions)(App);
