import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.contact_us_button}>
        <a href="#footer" style={{ textDecoration: "none", color: "white" }}>
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Contact;
