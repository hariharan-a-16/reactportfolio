
import React, { useState } from "react";
import usersData from "./users";
import SingleUserComponent from "./SingleUserComponent";

function AllUsersComponent() {
  const [users, setUsers] = useState([]); 
  const [showUsers, setShowUsers] = useState(false);


  const handleToggleUsers = () => {
    if (showUsers) {
      setUsers([]); 
      setShowUsers(false);
    } else {
      setUsers(usersData); 
      setShowUsers(true);
    }
  };

  const handleDelete = (id) => {
    const remainingUsers = users.filter((user) => user.id !== id);
    setUsers(remainingUsers);

    if (remainingUsers.length === 0) {
      setShowUsers(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Management System</h2>


      <button style={styles.mainBtn} onClick={handleToggleUsers}>
        {showUsers ? "Delete All Users" : "Add All Users"}
      </button>

      {showUsers && users.length > 0 && (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <SingleUserComponent
                key={user.id}
                user={user}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}


const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "30px",
  },
  mainBtn: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  table: {
    width: "80%",
    margin: "auto",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
  },
};

export default AllUsersComponent;
