import React, { useState } from "react";
import axios from "axios";

const EditModal = ({ user, close, refresh }) => {

  const [updatedUser, setUpdatedUser] = useState(user);

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:4000/users/${user.id}`, updatedUser);
    refresh();
    close();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit User</h3>
        <input name="username" value={updatedUser.username} onChange={handleChange} />
        <input name="email" value={updatedUser.email} onChange={handleChange} />
        <button onClick={handleUpdate}>Update</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;