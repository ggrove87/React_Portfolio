import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

/* Form with email validation and message validation. */
export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setName(inputValue);
    } else setMessage(inputValue);
  };
   
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    if(!validateEmail(email)){
      setErrorMessage('Email or username is invalid')
      return;
    }
    setName('');
    setEmail('');
    setMessage('');

  };
  return (
    <div>
      <h1>Contact Page</h1>

      <form className="form justify-content-center">
        <div col-sm-10 col-md-4>
          <input
            value={name}
            name="userName"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            placeholder="username"
          />
        </div>
        <div col-sm-10 col-md-4>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            placeholder="email"
          />
        </div>
        <div col-sm-10 col-md-4>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            className="form-control"
            placeholder="Your Message Here"
          />
        </div>
      </form>
    </div>
  );
};