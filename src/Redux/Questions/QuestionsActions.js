import { FETCH_ALL_QUESTIONS } from "./QuestionsConstants";
import * as DATA from "../../Data/_DATA";
import { fetchUsersAction, setCurrentUserAction } from "../User/UserActions";
import { loaderStart, loaderEnd } from "../Loader/loaderAction";

const fetchQuestions = (questions) => {
  return {
    type: FETCH_ALL_QUESTIONS,
    payload: { questions },
  };
};

export const fetchQuestionsAction = () => async (dispatch) => {
  dispatch(loaderStart());

  const questions = await DATA._getQuestions();
  await dispatch(fetchQuestions(questions));
  dispatch(loaderEnd());
};

export const addQuestionAction = (question) => async (dispatch) => {
  dispatch(loaderStart());

  await DATA._saveQuestion(question);
  const questions = await DATA._getQuestions();

  await dispatch(fetchQuestions(questions));
  await dispatch(fetchUsersAction());
  dispatch(loaderEnd());
};

export const saveAnswerAction = ({ author, id, answer }) => async (
  dispatch
) => {
  dispatch(loaderStart());
  const obj = { authedUser: author, qid: id, answer };
  await DATA._saveQuestionAnswer(obj);
  dispatch(fetchUsersAction());
  const questions = await DATA._getQuestions();

  dispatch(fetchQuestions(questions));
  dispatch(loaderEnd());
};
