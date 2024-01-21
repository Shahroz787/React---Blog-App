import React from "react";
import { ContactContainer } from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer>
      <span>Let's Start a Conversation</span>

      <form>
        <label>User Name:</label>
        <input type="text" placeholder="Enter your username..." />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email..." />

        <label>Subject:</label>
        <input type="text" placeholder="Enter your subject..." />

        <label>Message:</label>
        <textarea
          placeholder="Write your message..."
          type="text"
          className="write__Input write__Text"
        ></textarea>

        <button className="Contact__Btn">SUBMIT</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
