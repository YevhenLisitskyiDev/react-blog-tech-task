import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SinglePostPage = (props) => {
  const [postIsLoading, setPostIsLoading] = useState(false);
  const [postCommentsIsLoading, setPostCommentsIsLoading] = useState(false);

  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setPostIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => {
        setPostIsLoading(false);
        setPost(post);
      })
      .catch((err) => {
        setPostIsLoading(false);

        alert(err);
      });

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((postComments) => {
        console.log(postComments);
        setPostComments(postComments);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="container ">
      <h1>Title: {post.title}</h1>
      <p>{post.body}</p>
      <h3>AuthorId: {post.userId}</h3>
      <hr/>
      <hr/>

      <h2>Comments</h2>
      <div></div>
      {postComments?.map((comment) => {
        return (
          <div className="mt-4">
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <div> author: {comment.email}</div>
	    <hr/>

          </div>
        );
      })}
    </div>
  );
};

export default SinglePostPage;
