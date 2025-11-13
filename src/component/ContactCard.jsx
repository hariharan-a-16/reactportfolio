import React from "react";


const ContactCard = ({ name, email, phone, address }) => {
  return (
    <div className="contact-card">
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default ContactCard;
