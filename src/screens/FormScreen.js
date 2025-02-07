import { useSelector, useDispatch } from "react-redux"
import { setStep, updatePersonalInfo } from "../store/formSlice"
import Sidebar from '../components/Sidebar'
import styles from "../styles/FormScreen.module.css"

export default function FormScreen() {
  const dispatch = useDispatch()
  const { currentStep, formData } = useSelector((state) => state.form)

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault()
    dispatch(setStep(2))
  }

  const handlePlanSubmit = (e) => {
    e.preventDefault()
    // Would proceed to step 3 in a full implementation
  }

  const renderPersonalInfo = () => (
    <form onSubmit={handlePersonalInfoSubmit} className={styles.form}>
      <h1 className={styles.title}>Personal info</h1>
      <p className={styles.description}>Please provide your name, email address, and phone number.</p>

      <div className={styles.inputGroup}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          value={formData.personalInfo.name}
          onChange={(e) => dispatch(updatePersonalInfo({ name: e.target.value }))}
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
          onChange={(e) => dispatch(updatePersonalInfo({ email: e.target.value }))}
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
          onChange={(e) => dispatch(updatePersonalInfo({ phone: e.target.value }))}
          placeholder="e.g. +1 234 567 890"
          required
        />
      </div>

      <div className={styles.buttonGroup}>
        <div></div>
        <button type="submit" className={`${styles.button} ${styles.nextButton}`}>
          Next Step
        </button>
      </div>
    </form>
  )

  const renderPlanSelection = () => (
    <form onSubmit={handlePlanSubmit} className={styles.form}>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.description}>You have the option of monthly or yearly billing.</p>

      {/* Plan selection UI would go here */}

      <div className={styles.buttonGroup}>
        <button type="button" className={`${styles.button} ${styles.backButton}`} onClick={() => dispatch(setStep(1))}>
          Go Back
        </button>
        <button type="submit" className={`${styles.button} ${styles.nextButton}`}>
          Next Step
        </button>
      </div>
    </form>
  )

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.formContent}>
        {currentStep === 1 && renderPersonalInfo()}
        {currentStep === 2 && renderPlanSelection()}
      </div>
    </div>
  )
}

