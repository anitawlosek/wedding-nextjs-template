import styles from "./countdown.module.scss"

type CountDownItemProps = {
    difference: number | string;
    label: string;
}

export const CountdownItem = ({ difference, label }: CountDownItemProps) => (
    <div className={styles.item}>
        <div className={styles.itemDifference}>{difference}</div>
        <div className={styles.itemLabel}>{label}</div>
    </div>
)