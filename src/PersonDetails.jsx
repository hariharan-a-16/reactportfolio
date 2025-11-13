import React, { useState } from "react";


export const personsData = [
  { name: "John Doe", dateOfBirth: "1990-01-15" },
  { name: "Jane Smith", dateOfBirth: "1985-05-20" },
  { name: "Alice Johnson", dateOfBirth: "1995-09-10" },
];

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

 
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

const PersonDetails = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Person Details with Age</h1>
      {personsData.map((person, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.name}>{person.name}</h2>
          <p><strong>Date of Birth:</strong> {person.dateOfBirth}</p>
          <p><strong>Age:</strong> {calculateAge(person.dateOfBirth)} years</p>
        </div>
      ))}
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#007bff",
  },
  card: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px auto",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  name: {
    margin: "0",
    color: "#333",
  },
};

export default PersonDetails;
