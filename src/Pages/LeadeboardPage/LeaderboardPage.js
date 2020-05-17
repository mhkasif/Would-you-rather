import React from "react";
import ScoreCard from "../../Components/ScoreCard/ScoreCard";
import { connect } from "react-redux";

const LeaderboardPage = ({ users }) => {
  const Users = Object.entries(users)
    .map((m) => {
      return {
        ...m[1],
        score: Object.entries(m[1].answers).length + m[1].questions.length,
      };
    })
    .sort((a, b) => b.score - a.score);
  return (
    <div className="leaderboard-page-container">
      {Users &&
        Users.map((user, idx) => (
          <ScoreCard idx={idx} key={user.id} user={user} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(LeaderboardPage);
