import React from "react";
import { Link, useLocation } from "react-router-dom";

const PostsCard = (props) => {
  let location = useLocation().pathname;
  const url = location === "/" ? "" : location;
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
        <Link to={`${url}/${props.postId}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
};

export default PostsCard;
