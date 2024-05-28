import { useEffect, useState } from "react";
import { CountdownItem } from "./coundtownItem";
import styles from "./countdown.module.scss";
import sectionStyles from '../../styles/section.module.scss'
import utilStyles from "../../styles/utils.module.scss";

type CountdownProps = {
    weddingDate: string;
    weddingTime: string;
}

const emptyValue = "--";

const getSuffix = (difference: number | string) => {
    if (difference === 1) return "a";

    const differenceString = difference.toString();

    if (["2", "3", "4"].includes(differenceString.charAt(differenceString.length - 1))) return "y"

    return ""
}

export const Countdown = ({ weddingDate, weddingTime }: CountdownProps) => {
    const wedding = new Date(`${weddingDate}T${weddingTime}:00`).getTime()
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDiff(wedding - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [wedding]);
    
    const daysDiff = diff ? Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24)) : emptyValue
    const hoursDiff = diff ? Math.floor((Math.abs(diff) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : emptyValue
    const minutesDiff = diff ? Math.floor((Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60)) : emptyValue
    const secondsDiff = diff ? Math.floor((Math.abs(diff) % (1000 * 60)) / 1000) : emptyValue

    return <div className={sectionStyles.wrapper} id="countdown">
        <h2 className={utilStyles.heading}>{diff >= 0 ? "Zostało" : "Minęło"}</h2>
        <div className={styles.container}>
            <CountdownItem difference={daysDiff} label={daysDiff === 1 ? "dzień" : "dni"} />
            <CountdownItem difference={hoursDiff} label={`godzin${getSuffix(hoursDiff)}`} />
            <CountdownItem difference={minutesDiff} label={`minut${getSuffix(minutesDiff)}`} />
            <CountdownItem difference={secondsDiff} label={`sekund${getSuffix(secondsDiff)}`} />
        </div>
    </div>
}
