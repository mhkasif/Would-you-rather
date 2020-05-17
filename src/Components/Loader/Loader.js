import React from "react";
import { connect } from "react-redux";

const Loader = ({ isLoading }) => {
  return isLoading ? (
    <div className="overlay">
      <div className="spinner"></div>
    </div>
  ) : (
    <></>
  );
};
const mapStateToProps = (state) => ({
  isLoading: state.isLoading.isLoading,
});
export default connect(mapStateToProps)(Loader);
