import React from "react";
import {  Image, Label, Icon, Divider } from "semantic-ui-react";

const ScoreCard = ({
  user: { name, score, answers, questions, avatarURL },
  idx,
}) => {
  return (
    <div className="score-card">
      <Label
        style={{ position: "absolute", top: 5 }}
        as="a"
        color={idx === 0 ? "yellow" : idx === 1 ? "grey" : "brown"}
        ribbon="right"
      >
        {idx === 0 ? "1st" : idx === 1 ? "2nd" : "3rd"}
      </Label>
      <Label corner="left">
        <Icon
          name="trophy"
          color={idx === 0 ? "yellow" : idx === 1 ? "grey" : "brown"}
        />
      </Label>

      <div className="image">
        <Image
          style={{ justifySelf: "center", alignSelf: "center" }}
          src={avatarURL}
          size="tiny"
          circular
        />
      </div>
      <div className="data">
        <div className="name">{name}</div>
        <div className="paragraph">
          <div>Answered Questions</div>
          <div className="right">
            <Label circular color="teal">
              {Object.entries(answers).length}
            </Label>
          </div>
        </div>
        <Divider></Divider>
        <div className="paragraph">
          <div>Created Questions</div>
          <div className="right">
            <Label circular color="grey">
              {questions.length}
            </Label>
          </div>
        </div>
      </div>
      <div className="score-container">
        <div className="score">
          <div className="score-title">
            <h3>Score</h3>
          </div>
          <div className="score-number">
            <Label circular color="blue" size="huge">
              {score}
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
