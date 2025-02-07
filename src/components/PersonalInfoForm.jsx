import React, { useState } from "react";

const PersonalInfoForm = ({
  styles,
  formData,
  updatePersonalInfo,
  dispatch,
  handlePersonalInfoSubmit,
}) => {
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const validateForm = () => {
    let newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!formData.personalInfo.name.trim()) {
      newErrors.name = "This field is required";
      isValid = false;
    }
    if (!formData.personalInfo.email.trim()) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.personalInfo.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!formData.personalInfo.phone.trim()) {
      newErrors.phone = "This field is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handlePersonalInfoSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.description}>
        Please provide your name, email address, and phone number.
      </p>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          value={formData.personalInfo.name}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ name: e.target.value }))
          }
          placeholder="e.g. Stephen King"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Email Address</label>
        <input
          type="email"
          className={styles.input}
          value={formData.personalInfo.email}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ email: e.target.value }))
          }
          placeholder="e.g. stephenking@lorem.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Phone Number</label>
        <input
          type="tel"
          className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
          value={formData.personalInfo.phone}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ phone: e.target.value }))
          }
          placeholder="e.g. +1 234 567 890"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.buttonGroup}>
        <div></div>
        <button
          type="submit"
          className={`${styles.button} ${styles.nextButton}`}
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
