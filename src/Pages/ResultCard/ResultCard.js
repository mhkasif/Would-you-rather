import React, { useState } from "react";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import { connect } from "react-redux";
import {
  Image,
  Button,
  Form,
  Radio,
  Message,
  Progress,
  Label,
} from "semantic-ui-react";
import { saveAnswerAction } from "../../Redux/Questions/QuestionsActions";

const ResultCard = ({
  users,
  currentUser,
  questions,

  match: {
    params: { question_id },
  },
}) => {
  const { id, author, optionOne, optionTwo } = questions[question_id];

  return (
    <div style={{ width: "45vw", justifySelf: "center" }}>
      <div className="result-card">
        <div className="name">Asked by {users[author].name}:</div>
        <div className="details">
          <div className="image">
            <Image circular size="small" src={users[author].avatarURL} />
          </div>
          <div className="data">
            <h2>Result</h2>

            <Message color="blue">
              {optionOne.votes.includes(currentUser.id) && (
                <div className="labelling">Your Vote</div>
              )}
              <h3>Would you rather {optionOne.text}?</h3>
              <Progress
                value={optionOne.votes.length}
                total={optionOne.votes.length + optionTwo.votes.length}
                precision={2}
                color="blue"
                progress="percent"
              />
              <div
                className="resu"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <h4>
                  {optionOne.votes.length} out of{" "}
                  {optionOne.votes.length + optionTwo.votes.length} votes
                </h4>
              </div>
            </Message>

            <Message color="blue">
              {optionTwo.votes.includes(currentUser.id) && (
                <div className="labelling">Your Vote</div>
              )}

              <h3>Would you rather {optionTwo.text}?</h3>
              <Progress
                value={optionTwo.votes.length}
                total={optionOne.votes.length + optionTwo.votes.length}
                color="blue"
                progress="percent"
                precision={2}

              />
              <div
                className="resu"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#000",
                }}
              >
                <h4>
                  {optionTwo.votes.length} out of{" "}
                  {optionOne.votes.length + optionTwo.votes.length} votes
                </h4>
              </div>
            </Message>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => ({
  questions: state.questions.questions,
  users: state.users.users,
  currentUser: state.users.currentUser,
});
const actions = {
  saveAnswerAction,
};
export default connect(mapState, actions)(ResultCard);
