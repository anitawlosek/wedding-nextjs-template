import sectionStyles from '../../styles/section.module.scss'
import utilStyles from "../../styles/utils.module.scss";
import styles from "./eventDetails.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClockFour } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";
import { AddToCalendar, CalendarEventOptions } from "../addToCalendar";

export type EventDetailsData = {
    title: string
    date: string
    time: string
    location: string
    place: string
}

type EventDetailsProps = {
    details: EventDetailsData,
    calendarEventOptions: CalendarEventOptions
}

export const trackMapClick = () => {
    window.dataLayer && window.dataLayer.push({
        event: 'custom_event',
        eventProps: {
            category: 'location',
            action: 'click_map',
        }
    });
}

export const EventDetails = ({ details, calendarEventOptions } : EventDetailsProps) => {
    const mapLink = "https://www.google.com/maps/place/Wierzchowiska+Golf+%26+Country+Club/@51.2361214,22.6079323,10.93z/data=!4m5!3m4!1s0x472255336bae06b9:0x2bf1021d931f3346!8m2!3d51.1736157!4d22.7522949";

    return <div className={sectionStyles.wrapper}>
        <div className={sectionStyles.container}>
            <h2 className={utilStyles.heading}>{details.title}</h2>
            <div className={sectionStyles.content}>
                <div className={styles.detail}>
                    <span className={`${utilStyles.iconWrapper} ${styles.iconWrapper}`}>
                        <FontAwesomeIcon icon={faCalendarDays}/>
                    </span>
                    <span>{details.date}</span>
                </div>
                <div className={styles.detail}>
                    <span className={`${utilStyles.iconWrapper} ${styles.iconWrapper}`}>
                        <FontAwesomeIcon icon={faClockFour}/>
                    </span>
                    <span>{details.time}</span>
                </div>
                <div className={styles.detail}>
                    <span className={`${utilStyles.iconWrapper} ${styles.iconWrapper}`}>
                        <FontAwesomeIcon icon={faLocationDot}/>
                    </span>
                    <span>{details.place}<br/>{details.location}</span>
                </div>
                <div className={styles.addToCalendarButton}>
                    <AddToCalendar calendarEventOptions={calendarEventOptions} />
                </div>
                <a href={mapLink} onClick={trackMapClick} className={styles.map}>
                    <Image
                        src="/map.png"
                        alt={"Map"}
                        width={640}
                        height={580}
                        className={utilStyles.image}
                    />
                </a>
            </div>
        </div>
    </div>
}