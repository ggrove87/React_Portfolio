import React, {useState} from 'react';
/* Form with email validation and message validation. */
export default function Contact() {
  const [input, setInput] = useState('');
  return (
    <div>
      <h1>Contact Page</h1>
      
      <form>
      <input
          type="text"
          placeholder="Enter Email"
          value={input}
          name="text"
          className="email-input"
        ></input>
      </form>
    </div>
  );
}
