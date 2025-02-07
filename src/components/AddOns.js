import { useSelector, useDispatch } from "react-redux"
import { updateAddons } from "../store/formSlice"
import { Check } from "lucide-react"
import styles from "../styles/AddOns.module.css"

const addons = [
  {
    id: "onlineService",
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: "largerStorage",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: "customizableProfile",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
]

export default function AddOns() {
  const dispatch = useDispatch()
  const { addons: selectedAddons, plan } = useSelector((state) => state.form.formData)

  const handleToggleAddon = (addonId) => {
    dispatch(
      updateAddons({
        [addonId]: !selectedAddons[addonId],
      }),
    )
  }

  return (
    <div className={styles.addonList}>
      {addons.map((addon) => {
        const price = plan.billing === "monthly" ? `+$${addon.monthlyPrice}/mo` : `+$${addon.yearlyPrice}/yr`

        return (
          <div
            key={addon.id}
            className={`${styles.addonCard} ${selectedAddons[addon.id] ? styles.selected : ""}`}
            onClick={() => handleToggleAddon(addon.id)}
          >
            <div className={`${styles.checkbox} ${selectedAddons[addon.id] ? styles.checked : ""}`}>
              {selectedAddons[addon.id] && <Check size={14} color="white" />}
            </div>
            <div className={styles.addonInfo}>
              <div className={styles.addonName}>{addon.name}</div>
              <div className={styles.addonDescription}>{addon.description}</div>
            </div>
            <div className={styles.addonPrice}>{price}</div>
          </div>
        )
      })}
    </div>
  )
}

