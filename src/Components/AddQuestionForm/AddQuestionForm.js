import React from "react";
import { Button, Divider, Input } from "semantic-ui-react";

const AddQuestionForm = ({ handleChange }) => {
  return (
    <div className="add-question-card">
      <div className="heading">
        <h1>Create New Question</h1>
      </div>
      <p>Complete the question</p>
      <h3>Would u rather...</h3>
      <div className="answer-box">
        <Input
          onChange={handleChange}
          name="optionOneText"
          fluid
          placeholder="Enter option one"
        />
        <Divider horizontal>Or</Divider>
        <Input
          onChange={handleChange}
          name="optionTwoText"
          fluid
          placeholder="Enter option two"
        />
      </div>
      <div className="submit-button">
        <Button fluid color="teal">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddQuestionForm;
