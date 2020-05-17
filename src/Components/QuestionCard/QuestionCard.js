import React from "react";
import { Image, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = ({
  answer,
  users,
  question: { id, author, timestamp, optionOne },
}) => {
  return (
    <div className="question-card">
      <div className="name">{users[author].name} asks:</div>
      <div className="details">
        <div className="image">
          <Image circular size="tiny" src={users[author].avatarURL} />
        </div>
        <div className="data">
          <h2>Would You Rather</h2>
          <div>...{optionOne.text.slice(0, 15)}...</div>
          <Button
            as={Link}
            to={answer ? `/result/${id}` : `/questions/${id}`}
            fluid
            basic
            color="blue"
            content="View poll"
          />
        </div>
      </div>
    </div>
  );
};
const mapState = (state) => ({
  users: state.users.users,
});
export default connect(mapState)(QuestionCard);
