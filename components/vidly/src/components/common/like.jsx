import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
// Descrbing the interface of the component
// Input: isLiked: boolean
// Output: onClick

const Like = props => {
  let classes = faHeartRegular;
  if (props.liked) classes = faHeart;
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      icon={classes}
      onClick={props.onClick}
    />
  );
};

export default Like;
