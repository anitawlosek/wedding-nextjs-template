import styles from './hero.module.scss'
import 'add-to-calendar-button/assets/css/atcb.css';
import { AddToCalendar, CalendarEventOptions } from "../addToCalendar";
import { PersonData } from "../brideAndGroom/person.type";
import { EventDetailsData } from "../eventDetails";
import { Fragment } from "react";

type HeroProps = {
    calendarEventOptions: CalendarEventOptions
    brideAndGroom: PersonData[],
    eventDetail: EventDetailsData
}

export const Hero = ({ calendarEventOptions, brideAndGroom, eventDetail}: HeroProps) => {
    const title = brideAndGroom.map((person, index) => (
        <Fragment key={person.name}>
            <span>{person.firstName}</span>
            {index !== brideAndGroom.length - 1 && <span>i</span>}
        </Fragment>
    ))

    const date = calendarEventOptions.startDate.replaceAll('-', '.')

    return <div className={styles.hero}>
        <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.date}>{date}</p>
            <p className={styles.location}>{eventDetail.place}</p>
            <AddToCalendar calendarEventOptions={calendarEventOptions} />
        </div>
    </div>
}