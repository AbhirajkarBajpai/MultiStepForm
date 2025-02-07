import { useSelector, useDispatch } from 'react-redux'
import { setStep } from '../store/formSlice'
import styles from '../styles/Summary.module.css'

function Summary() {
  const dispatch = useDispatch()
  const { formData } = useSelector((state) => state.form)
  const { selectedPlan, isYearly, addOns } = formData

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setStep(5))
  }

  const totalAmount = () => {
    const planPrice = selectedPlan.price
    const addOnsTotal = addOns.reduce((total, addon) => total + addon.price, 0)
    return planPrice + addOnsTotal
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Finishing up</h1>
      <p className={styles.description}>
        Double-check everything looks OK before confirming.
      </p>

      <div className={styles.summaryCard}>
        <div className={styles.planRow}>
          <div>
            <h2 className={styles.planName}>
              {selectedPlan.name} ({isYearly ? 'Yearly' : 'Monthly'})
            </h2>
            <button
              type="button"
              className={styles.changeButton}
              onClick={() => dispatch(setStep(2))}
            >
              Change
            </button>
          </div>
          <span className={styles.planPrice}>
            ${selectedPlan.price}/{isYearly ? 'yr' : 'mo'}
          </span>
        </div>

        {addOns.length > 0 && (
          <>
            <div className={styles.divider} />
            <div className={styles.addOns}>
              {addOns.map((addon) => (
                <div key={addon.name} className={styles.addOnRow}>
                  <span className={styles.addOnName}>{addon.name}</span>
                  <span className={styles.addOnPrice}>
                    +${addon.price}/{isYearly ? 'yr' : 'mo'}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>
            Total (per {isYearly ? 'year' : 'month'})
          </span>
          <span className={styles.totalAmount}>
            ${totalAmount()}/{isYearly ? 'yr' : 'mo'}
          </span>
        </div>
      </div>

      <div className={styles.buttonGroup}>
        <button
          type="button"
          className={`${styles.button} ${styles.backButton}`}
          onClick={() => dispatch(setStep(3))}
        >
          Go Back
        </button>
        <button type="submit" className={`${styles.button} ${styles.confirmButton}`}>
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Summary
