import { useState } from "react";
import Github from "../images/icon-github.svg";
import Linkedin from "../images/icon-linkedin.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Missing Name field");
    } else if (email.trim() === "") {
      setError("Missing email field");
    } else if (message.trim() == "") {
      setError("Missing message field");
    } else {
      setError("");
      setValid(true);
      setEmail("");
      setName("");
      setMessage("");
    }
  };

  setTimeout(() => {
    setValid(false);
  }, 9000);

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contacting">
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I will get back to you as soon as possible.
          </p>
        </div>
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            {valid && (
              <p className="valid-message">
                Message successfully sent! I will get back to you soon!
              </p>
            )}
            <label htmlFor="name"></label>
            <br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="name"></label>
            <br />
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="40"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
            <br />
            <button onClick={handleSubmit}>Send Message</button>
          </form>
        </div>
      </div>
      <div className="footer-container">
        <p>Marcio Lopes</p>
        <div className="social-media">
          <a
            href="https://github.com/MarcioLopes451"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcioalbertol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
