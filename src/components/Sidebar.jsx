import { useSelector } from "react-redux"
import styles from "../styles/Sidebar.module.css"

const steps = [
  { number: 1, label: "Step 1", title: "Your info" },
  { number: 2, label: "Step 2", title: "Select plan" },
  { number: 3, label: "Step 3", title: "Add-ons" },
  { number: 4, label: "Step 4", title: "Summary" },
]

function Sidebar() {
  const currentStep = useSelector((state) => state.form.currentStep)

  return (
    <div className={styles.sidebar}>
      {steps.map((step) => (
        <div key={step.number} className={styles.step}>
          <div className={`${styles.stepNumber} ${currentStep === step.number ? styles.active : ""}`}>
            {step.number}
          </div>
          <div className={styles.stepInfo}>
            <span className={styles.stepLabel}>{step.label}</span>
            <span className={styles.stepTitle}>{step.title}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar

