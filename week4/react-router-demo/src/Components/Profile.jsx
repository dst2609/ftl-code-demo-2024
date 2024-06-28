import React from "react";
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>Here is the Profile for {userId} </h2>
    </div>
  );
};

export default ProfilePage;
