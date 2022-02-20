import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostsCard from "../../components/PostCard";
import routes from "../../routes/routes";

const PostsPage = (props) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [apiPage, setApiPage] = useState(2);
  let location = useLocation().pathname;
  let userId = currentUser?.id;

  const fetchPostsUrl =
    location === routes.MY_POSTS_PAGE
      ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      : `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1`;

  useEffect(() => {
    setLoading(true);
    fetch(fetchPostsUrl)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  useEffect(() => {
    if (!isFetching ) return;
    fetchMoreListItems();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
      location !== routes.MY_POSTS_PAGE && setIsFetching(true);
  }

  function fetchMoreListItems() {
    apiPage <= 10 &&
      fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${apiPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPosts((prevState) => [...prevState, ...data]);
          setIsFetching(false);
          setApiPage((prevState) => prevState + 1);
        })
        .catch((err) => alert(err));
  }

  return (
    <div className="container d-flex flex-wrap" style={{ minHeight: "101vh" }}>
      {loading ? (
        <div>Loading</div>
      ) : posts.length === 0 ? (
        <div>No post for now</div>
      ) : (
        posts?.map((post) => (
          <PostsCard
            key={post.id}
            postId={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))
      )}
      {apiPage < 10 && isFetching && "Fetching more list items..."}
    </div>
  );
};

export default PostsPage;
