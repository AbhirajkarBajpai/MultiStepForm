import { useSelector, useDispatch } from "react-redux"
import { setStep } from "../store/formSlice"
import styles from "../styles/Summary.module.css"

const addons = {
  onlineService: { name: "Online service", monthlyPrice: 1, yearlyPrice: 10 },
  largerStorage: { name: "Larger storage", monthlyPrice: 2, yearlyPrice: 20 },
  customizableProfile: { name: "Customizable profile", monthlyPrice: 2, yearlyPrice: 20 },
}

const plans = {
  arcade: { monthlyPrice: 9, yearlyPrice: 90 },
  advanced: { monthlyPrice: 12, yearlyPrice: 120 },
  pro: { monthlyPrice: 15, yearlyPrice: 150 },
}

export default function Summary() {
  const dispatch = useDispatch()
  const { plan, addons: selectedAddons } = useSelector((state) => state.form.formData)
  const isYearly = plan.billing === "yearly"

  const planPrice = isYearly ? plans[plan.type].yearlyPrice : plans[plan.type].monthlyPrice
  const planPriceText = isYearly ? `$${planPrice}/yr` : `$${planPrice}/mo`

  const selectedAddonsList = Object.entries(selectedAddons)
    .filter(([, isSelected]) => isSelected)
    .map(([addonId]) => ({
      name: addons[addonId].name,
      price: isYearly ? addons[addonId].yearlyPrice : addons[addonId].monthlyPrice,
    }))

  const totalPrice = selectedAddonsList.reduce((sum, addon) => sum + addon.price, planPrice)

  return (
    <div>
      <div className={styles.summaryCard}>
        <div className={styles.planRow}>
          <div className={styles.planInfo}>
            <span className={styles.planName}>
              {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} ({plan.billing})
            </span>
            <span className={styles.changeLink} onClick={() => dispatch(setStep(2))}>
              Change
            </span>
          </div>
          <span className={styles.planPrice}>{planPriceText}</span>
        </div>

        {selectedAddonsList.map((addon, index) => (
          <div key={index} className={styles.addonRow}>
            <span className={styles.addonName}>{addon.name}</span>
            <span className={styles.addonPrice}>
              +${addon.price}/{isYearly ? "yr" : "mo"}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total (per {isYearly ? "year" : "month"})</span>
        <span className={styles.totalPrice}>
          ${totalPrice}/{isYearly ? "yr" : "mo"}
        </span>
      </div>
    </div>
  )
}

