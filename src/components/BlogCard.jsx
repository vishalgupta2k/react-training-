import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./BlogCard.module.css";
import { useLocation } from "react-router-dom";
const BlogCard = () => {
  const [userData, setUserData] = useState([]);

  const location = useLocation();
  // console.log("====================================");
  // console.log(location.state.data.name);
  // console.log("====================================");

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json(); // parses JSON response into native JavaScript objects
      setUserData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("TusharSaini-2003");
  }, []);

  console.log(userData);

  const cardmap = (i) => {
    return <Card userData={userData} key={i} />;
  };

  return (
    <div className={styles.blogCard}>
      <h1>{location?.state?.data?.name}</h1>
      {data.map(cardmap)}
    </div>
  );
};

export default BlogCard;

//higher order function -> function that takes another function as an argument
//callback function
