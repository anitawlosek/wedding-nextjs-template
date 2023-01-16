import styles from "./countdown.module.scss"
import utilStyles from "../../styles/utils.module.scss"

type CountDownItemProps = {
    difference: number | string;
    label: string;
}

export const CountdownItem = ({ difference, label }: CountDownItemProps) => (
    <div className={styles.item}>
        <div className={`${styles.itemDifference} ${utilStyles.highlight}`}>{difference}</div>
        <div className={styles.itemLabel}>{label}</div>
    </div>
)