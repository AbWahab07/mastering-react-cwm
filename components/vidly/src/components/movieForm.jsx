import React from "react";

const MovieForm = ({ match, history }) => {
  /* Can't add a helper function as we've a functional component
  handleSave = ({ history }) => {
    history.push("/movies");
  };
  */
  return (
    <div>
      <h1>Movie Form - {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
