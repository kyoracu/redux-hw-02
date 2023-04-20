import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="users">
      {posts.length ? (
        posts.map((el) => {
          return (
            <div className="user" key={el.id}>
              <p style={{ margin: "0 -10px" }}>{el.id}</p>
              <p>{el.title}</p>
              {el.body.length > 20 ? (
                <Link to={`/${el.id}`} className="more">
                  More...
                </Link>
              ) : (
                <p>{el.body}</p>
              )}

              <Link to={`/${el.id}`} className="details">
                Details
              </Link>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Posts;
