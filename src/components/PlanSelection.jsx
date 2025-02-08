import { useSelector, useDispatch } from "react-redux";
import { updatePlan } from "../store/formSlice";
import styles from "../styles/PlanSelection.module.css";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const plans = [
  {
    id: "arcade",
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: arcadeIcon,
    iconClass: styles.arcade,
  },
  {
    id: "advanced",
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: advIcon,
    iconClass: styles.advanced,
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: proIcon,
    iconClass: styles.pro,
  },
];

export default function PlanSelection() {
  const dispatch = useDispatch();
  const { plan } = useSelector((state) => state.form.formData);

  const handlePlanSelect = (planId) => {
    dispatch(updatePlan({ type: planId }));
  };

  const toggleBilling = () => {
    dispatch(
      updatePlan({
        billing: plan.billing === "monthly" ? "yearly" : "monthly",
      })
    );
  };

  return (
    <div>
      <div className={styles.planGrid}>
        {plans.map((planOption) => {
          const price =
            plan.billing === "monthly"
              ? `$${planOption.monthlyPrice}/mo`
              : `$${planOption.yearlyPrice}/yr`;

          return (
            <div
              key={planOption.id}
              className={`${styles.planCard} ${
                plan.type === planOption.id ? styles.selected : ""
              }`}
              onClick={() => handlePlanSelect(planOption.id)}
            >
              <div className={`${styles.icon} ${planOption.iconClass}`}>
                <img src={planOption.icon} color="white" />
              </div>
              <div className={styles.planInfo}>
                <div className={styles.planName}>{planOption.name}</div>
                <div className={styles.planPrice}>{price}</div>
              {plan.billing === "yearly" && (
                <div className={styles.freeMonths}>2 months free</div>
              )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.toggleContainer}>
        <span
          className={`${styles.toggleLabel} ${
            plan.billing === "monthly" ? styles.active : ""
          }`}
        >
          Monthly
        </span>
        <div
          className={`${styles.toggle} ${
            plan.billing === "yearly" ? styles.toggleChecked : ""
          }`}
          onClick={toggleBilling}
        >
          <div className={styles.toggleCircle} />
        </div>
        <span
          className={`${styles.toggleLabel} ${
            plan.billing === "yearly" ? styles.active : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}
