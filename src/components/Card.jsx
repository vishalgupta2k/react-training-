import { useEffect, useState } from "react";
import "./Card.css";
function Card({ userData }) {
  const [user, setUser] = useState([]);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json(); // parses JSON response into native JavaScript objects
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(userData?.url);
  }, []);

  return (
    <div className="card">
      <img
        src={userData?.avatar_url}
        alt=""
        height={200}
        style={{ borderRadius: "10px" }}
      />
      <h1>{user?.name}</h1>
      <p>{user?.bio}</p>

      <div>
        <span>followers : {user?.followers} </span>
        <span>following : {user?.following} </span>
      </div>
    </div>
  );
}

export default Card;
