import styles from './hero.module.scss'
import buttonStyles from '../button/button.module.scss'
import 'add-to-calendar-button/assets/css/atcb.css';
import { AddToCalendar, CalendarEventOptions } from "../addToCalendar";
import { AboutUsData } from "../people/people.type";
import { EventDetailsData } from "../eventDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { trackScrollDownButton } from "../../lib/tracking";

type HeroProps = {
    calendarEventOptions: CalendarEventOptions
    brideAndGroom: AboutUsData,
    eventDetail: EventDetailsData
}

export const Hero = ({ calendarEventOptions, brideAndGroom, eventDetail}: HeroProps) => {
    const date = calendarEventOptions.startDate.replaceAll('-', '.')

    const scrollDown = () => {
        document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' })

        trackScrollDownButton()
    }

    return <div className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                <span>{brideAndGroom.bride.firstName}</span>
                <span>i</span>
                <span>{brideAndGroom.groom.firstName}</span>
            </h1>
            <p className={styles.date}>{date}</p>
            <p className={styles.location}>{eventDetail.place}</p>
            <AddToCalendar calendarEventOptions={calendarEventOptions} buttonClass={buttonStyles.transparent}/>
        </div>
        <div className={styles.scrollDownContainer}>
            <button className={styles.scrollDownButton} onClick={scrollDown}>
                <FontAwesomeIcon
                    className={styles.longArrowIcon}
                    icon={faLongArrowDown} />
                <FontAwesomeIcon
                    className={styles.chevronIcon}
                    icon={faChevronDown} />
            </button>
        </div>
    </div>
}