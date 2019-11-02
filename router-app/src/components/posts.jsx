import React from "react";
import queryString from "query-string";

// destructuring props object
const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search); // // returns object with properties based on the parameters in the query string
  console.log(result);

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year} , Month: {match.params.month}
    </div>
  );
};

export default Posts;
