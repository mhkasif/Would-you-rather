import { FETCH_ALL_QUESTIONS } from "./QuestionsConstants";

const initialState = {
  questions: null,
};

const QuestionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_QUESTIONS:
      return { ...state, questions: payload.questions };

    default:
      return state;
  }
};
export default QuestionReducer;
