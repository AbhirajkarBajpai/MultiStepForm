import React from "react";

const PersonalInfoForm = ({
  styles,
  formData,
  updatePersonalInfo,
  dispatch,
  handlePersonalInfoSubmit,
}) => {
  return (
    <form onSubmit={handlePersonalInfoSubmit} className={styles.form}>
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
          required
        />
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
          required
        />
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Phone Number</label>
        <input
          type="tel"
          className={styles.input}
          value={formData.personalInfo.phone}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ phone: e.target.value }))
          }
          placeholder="e.g. +1 234 567 890"
          required
        />
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
