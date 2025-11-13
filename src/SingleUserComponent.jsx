import React from "react";


function SingleUserComponent({ user, handleDelete }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button
          style={styles.deleteBtn}
          onClick={() => handleDelete(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const styles = {
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SingleUserComponent;
