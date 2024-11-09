import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userId}`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user.name) {
    return <h1>Loading...</h1>;
  }
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>{user.name}</h1>
      </main>
    </React.Fragment>
  );
}

export default UserProfile;
