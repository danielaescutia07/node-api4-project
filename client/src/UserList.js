import React from "react";

function UserList(props) {
  const { user } = props;

  return (
    <div>
      <h4>Id: {user.id}</h4>
      <p>User: {user.username}</p>
    </div>
    
  )
};

export default UserList