import React, { useState } from "react";
import { connect } from "react-redux";
import { addQuestionAction } from "../../Redux/Questions/QuestionsActions";
import AddQuestionForm from "../../Components/AddQuestionForm/AddQuestionForm";

const AddQuestionPage = ({ addQuestionAction, currentUser, history }) => {
  const [values, handleValues] = useState({
    optionOneText: "",
    optionTwoText: "",
  });
  /**
* @description changing question options
* @constructor
* @param {string} e - event created on change
* @param {object} data - data given by library on change
*/
  const handleChange = (e, data) => {
    const { name, value } = data;
    handleValues({ ...values, [name]: value });
  };
/**
* @description Submitting the values of
* @constructor
* @param {string} e - event created on change

*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = { ...values, author: currentUser.id };
    await addQuestionAction(question);
    history.push("/home");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-question-container">
        <AddQuestionForm handleChange={handleChange} />
      </div>
    </form>
  );
};

const mapState = (state) => ({
  currentUser: state.users.currentUser,
});
const actions = {
  addQuestionAction,
};
export default connect(mapState, actions)(AddQuestionPage);
