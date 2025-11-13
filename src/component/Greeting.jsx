import React from "react";

const Greeting = () => {
  const hour = new Date().getHours();

 
  let greeting = "";
  let message = "";


  if (hour < 12) {
    greeting = "Good Morning 🌞";
    message = "Have a wonderful day ahead!";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
    message = "Hope your day is going great!";
  } else {
    greeting = "Good Evening 🌙";
    message = "Relax and have a peaceful evening!";
  }


  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #89f7fe, #66a6ff)",
    fontFamily: "Poppins, sans-serif",
    color: "#333",
  };

  const greetingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const messageStyle = {
    fontSize: "1.3rem",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <h1 style={greetingStyle}>{greeting}</h1>
      <p style={messageStyle}>{message}</p>
    </div>
  );
};

export default Greeting;
