"use client";
import React, { useState } from "react";
import styles from "./form.module.scss";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1); // Default to 1 person
  const [date, setDate] = useState("");
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add your validation logic here
    if (name.trim() === "" || email.trim() === "" || date.trim() === "") {
      setError("Please fill in all required fields.");
      return;
    }

    // Now you can use 'name', 'email', 'people', and 'date' in your submission logic
    // For example, you can console.log them to see the values.

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number of People:", people);
    console.log("Date:", date);

    setName("");
    setEmail("");
    setPeople(1);
    setDate("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.heading}>
        <h2>Meld je aan om te komen eten</h2>
      </div>
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
      {error && <p>{error}</p>}
      <button type="submit" className={`primary button ${styles.submit}`}>
        Submit
      </button>
    </form>
  );
};

export default Form;
