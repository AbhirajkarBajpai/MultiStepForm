import { Check } from "lucide-react"
import styles from "../styles/ThankYou.module.css"

function ThankYou() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Check size={32} color="white" />
      </div>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.message}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default ThankYou;

