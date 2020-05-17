import React, { useState } from "react";
import { Tab, Grid, Divider } from "semantic-ui-react";
import UnansweredQuestions from "../../Components/UnansweredQuestions.js/UnansweredQuestions";
import AnsweredQuestions from "../../Components/AnsweredQuestions/AnsweredQuestions";
import { connect } from "react-redux";
const panes = [
  { menuItem: "Tab 1", render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
];
const HomePage = ({ currentUser, questions, users }) => {
  const [tabNumber, changeTab] = useState(0);

  const answeredQuestions = Object.entries(users[currentUser.id].answers)
    .map((answeredQues) => {
      const obj = Object.entries(questions).find(
        (q) => q[0] === answeredQues[0]
      );
      return { ...obj[1], myAnswer: answeredQues[1] };
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredQuestions = Object.entries(questions)
    .map((q) => {
      const val = answeredQuestions.some((ans) => ans.id === q[0]);

      if (!val) {
        return { ...q[1] };
      }
    })
    .filter((f) => f !== undefined)
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="homepage-container">
      <div className="questions-card-container">
        <div className="tab-container">
          <div
            className={`tab ${tabNumber === 0 ? "active" : ""}`}
            onClick={() => changeTab(0)}
          >
            Unanswered
          </div>
          <div className="divider"></div>
          <div
            className={`tab ${tabNumber === 1 ? "active" : ""}`}
            onClick={() => changeTab(1)}
          >
            Answered
          </div>
        </div>
        <div className="questions-list">
          {tabNumber === 0 ? (
            <UnansweredQuestions questions={unansweredQuestions} />
          ) : (
            <AnsweredQuestions questions={answeredQuestions} />
          )}
        </div>
      </div>
    </div>
  );
};
const mapState = (state) => ({
  currentUser: state.users.currentUser,
  users: state.users.users,
  questions: state.questions.questions,
});
export default connect(mapState)(HomePage);
