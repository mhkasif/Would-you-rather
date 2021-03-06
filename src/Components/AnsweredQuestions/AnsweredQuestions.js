import React from "react";

import QuestionCard from "../QuestionCard/QuestionCard";

const AnsweredQuestions = ({ questions }) => {
  return (
    <React.Fragment>
      {questions.map((question) => (
        <QuestionCard answer question={question} key={question.id} />
      ))}
    </React.Fragment>
  );
};

export default AnsweredQuestions;
