import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./BlogCard.module.css";
import { useLocation } from "react-router-dom";
const BlogCard = () => {
  const [userData, setUserData] = useState([]);

  const location = useLocation();

  const name = location?.state?.name;

  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users`);

      const data = await response.json(); // parses JSON response into native JavaScript objects
      if (response.status === 200) {
        setUserData(data);
      } else {
        setUserData([
          {
            login: "mojombo",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojombo",
            html_url: "https://github.com/mojombo",
            followers_url: "https://api.github.com/users/mojombo/followers",
            following_url:
              "https://api.github.com/users/mojombo/following{/other_user}",
            gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/mojombo/subscriptions",
            organizations_url: "https://api.github.com/users/mojombo/orgs",
            repos_url: "https://api.github.com/users/mojombo/repos",
            events_url: "https://api.github.com/users/mojombo/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/mojombo/received_events",
            type: "User",
            site_admin: false,
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  const cardmap = (i) => {
    return <Card userData={i} key={i.id} />;
  };

  return <div className={styles.blogCard}>{userData?.map(cardmap)}</div>;
};

export default BlogCard;

//higher order function -> function that takes another function as an argument
//callback function
