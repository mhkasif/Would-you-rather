import React, { useState } from "react";
import QuestionCard from "../../Components/QuestionCard/QuestionCard";
import { connect } from "react-redux";
import { Image, Button, Form, Radio } from "semantic-ui-react";
import { saveAnswerAction } from "../../Redux/Questions/QuestionsActions";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Page404 from "../Page404/Page404";

const Question = ({
  users,
  currentUser,
  questions,
  saveAnswerAction,
  match: {
    params: { question_id },
  },
  history,
}) => {
  const [state, handleState] = useState({});
  useEffect(() => {
    if (!currentUser) history.push(`/login/${question_id}`);

  }, []);
  // const { id, author, timestamp, optionOne, optionTwo } = questions[
  //   question_id
  // ];
  const handleChange = (e, { value }) => handleState({ ...state, value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveAnswerAction({
      author: currentUser.id,
      id: questions[question_id].id,
      answer: state.value,
    });
    history.push(`/result/${questions[question_id].id}`);
  };
  return currentUser &&
    !Object.keys(users[currentUser.id].answers).includes(question_id) ? (
    <div style={{ width: "45vw", justifySelf: "center" }}>
      <div className="question-card">
        <div className="name">
          {users[questions[question_id].author].name} asks:
        </div>
        <div className="details">
          <div className="image">
            <Image
              circular
              size="small"
              src={users[questions[question_id].author].avatarURL}
            />
          </div>
          <div className="data">
            <h2>Would You Rather ...</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Radio
                  label={questions[question_id].optionOne.text}
                  name="radioGroup"
                  value="optionOne"
                  checked={state.value === "optionOne"}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label={questions[question_id].optionTwo.text}
                  name="radioGroup"
                  value="optionTwo"
                  checked={state.value === "optionTwo"}
                  onChange={handleChange}
                />
              </Form.Field>
              <Button
                disabled={!state.value}
                content="Submit"
                color="teal"
                fluid
              />
            </Form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Page404 />
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
export default connect(mapState, actions)(Question);
