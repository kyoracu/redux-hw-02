import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../src/styles.css";

function PostDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  });
  return (
    <div className="newPage">
      <Link to={"/"}>
        <div className="back">
          <button>Back</button>
        </div>
      </Link>
      <h1>{user && JSON.stringify(user, 2, 2)}</h1>
    </div>
  );
}

export default PostDetails;