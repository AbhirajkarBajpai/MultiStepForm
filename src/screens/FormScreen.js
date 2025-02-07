import { useSelector, useDispatch } from "react-redux"
import { setStep, updatePersonalInfo } from "../store/formSlice"
import Sidebar from "../components/Sidebar"
import PlanSelection from "../components/PlanSelection"
import AddOns from "../components/AddOns"
import styles from "../styles/FormScreen.module.css"
import PersonalInfoForm from "../components/PersonalInfoForm"
// import Summary from "../components/Summary"
// import ThankYou from "../components/ThankYou"

export default function FormScreen() {
  const dispatch = useDispatch()
  const { currentStep, formData } = useSelector((state) => state.form)

  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault()
    dispatch(setStep(2))
  }

  const handlePlanSubmit = (e) => {
    e.preventDefault()
    dispatch(setStep(3))
  }

  const handleAddOnsSubmit = (e) => {
    e.preventDefault()
    dispatch(setStep(4))
  }


  const renderPlanSelection = () => (
    <form onSubmit={handlePlanSubmit} className={styles.form}>
      <h1 className={styles.title}>Select your plan</h1>
      <p className={styles.description}>You have the option of monthly or yearly billing.</p>

      <PlanSelection />

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

  const renderAddOns = () => (
    <form onSubmit={handleAddOnsSubmit} className={styles.form}>
      <h1 className={styles.title}>Pick add-ons</h1>
      <p className={styles.description}>Add-ons help enhance your gaming experience.</p>

      <AddOns />

      <div className={styles.buttonGroup}>
        <button type="button" className={`${styles.button} ${styles.backButton}`} onClick={() => dispatch(setStep(2))}>
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
        {currentStep === 1 && <PersonalInfoForm styles={styles} formData={formData} updatePersonalInfo={updatePersonalInfo} dispatch={dispatch} handlePersonalInfoSubmit={handlePersonalInfoSubmit}/>}
        {currentStep === 2 && renderPlanSelection()}
        {currentStep === 3 && renderAddOns()}
        {/* {currentStep === 4 && <Summary />}
        {currentStep === 5 && <ThankYou />} */}
      </div>
    </div>
  )
}

