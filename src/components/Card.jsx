import "./Card.css";
function Card({ userData }) {
  return (
    <div className="card">
      <img
        src={userData?.avatar_url}
        alt=""
        height={200}
        style={{ borderRadius: "10px" }}
      />
      <h1>{userData?.name}</h1>
      <p>{userData?.bio}</p>

      <div>
        <span>followers : {userData?.followers} </span>
        <span>following : {userData?.following} </span>
      </div>
    </div>
  );
}

export default Card;
