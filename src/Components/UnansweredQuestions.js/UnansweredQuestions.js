import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

const UnansweredQuestions = ({ questions }) => {
  return (
    <React.Fragment>
      {questions.map((question) => (
        <QuestionCard question={question} key={question.id} />
      ))}
    </React.Fragment>
  );
};

export default UnansweredQuestions;
