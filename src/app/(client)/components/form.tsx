"use client";
import React, { useState } from "react";
import styles from "./form.module.scss";
import { formFieldFormat } from "../utils/dataFormat";

interface FormProps {
  formFieldsAr: string[]; 
}

const Form: React.FC<FormProps> = ({ formFieldsAr }) => {

  const formFields = formFieldFormat(formFieldsAr);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1); // Default to 1 person
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState(""); // State for the "phone" field
  const [message, setMessage] = useState(""); // State for the "message" field
  const [error, setError] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPeople(Number(e.target.value));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add your validation logic here
    if (name.trim() === "" || email.trim() === "" || date.trim() === "") {
      setError("Please fill in all required fields.");
      return;
    }

    // Now you can use 'name', 'email', 'people', 'date', 'phone', and 'message' in your submission logic
    // For example, you can console.log them to see the values.

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number of People:", people);
    console.log("Date:", date);
    console.log("Phone:", phone);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setPeople(1);
    setDate("");
    setPhone("");
    setMessage("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.heading}>
        <h2>Meld je aan om te komen eten</h2>
      </div>
      {formFields.name && (
        <div className={`${styles.name} ${styles.inputGroup}`}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className={styles.input}
          />
        </div>
      )}
      {formFields.email && (
        <div className={`${styles.email} ${styles.inputGroup}`}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.input}
          />
        </div>
      )}
      {formFields.people && (
        <div className={`${styles.amount} ${styles.inputGroup}`}>
          <label htmlFor="people" className={styles.label}>
            Number of People:
          </label>
          <select
            id="people"
            value={people}
            onChange={handlePeopleChange}
            className={styles.select}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      )}
      {formFields.date && (
        <div className={`${styles.name} ${styles.inputGroup}`}>
          <label htmlFor="date" className={styles.label}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={handleDateChange}
            className={styles.input}
          />
        </div>
      )}
      {formFields.phone && (
        <div className={`${styles.phone} ${styles.inputGroup}`}>
          <label htmlFor="phone" className={styles.label}>
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className={styles.input}
          />
        </div>
      )}
      {formFields.message && (
        <div className={`${styles.message} ${styles.inputGroup}`}>
          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className={styles.textArea}
          />
        </div>
      )}
      {error && <p>{error}</p>}
      <button type="submit" className={`primary button ${styles.submit}`}>
        Submit
      </button>
    </form>
  );
};

export default Form;
