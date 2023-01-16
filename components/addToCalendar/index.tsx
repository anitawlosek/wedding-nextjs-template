import 'add-to-calendar-button/assets/css/atcb.css';
import { atcb_action } from "add-to-calendar-button";
import styles from './addToCalendar.module.scss'
import { MouseEvent, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
import { trackOpenMenu } from "../../lib/tracking";
import { setOptionsEventListeners } from "../hero/setOptionsEventListeners";

type CalendarOptions = 'Apple' | 'Google' | 'iCal' | 'Microsoft365' | 'MicrosoftTeams' | 'Outlook.com' | 'Yahoo'

export type CalendarEventOptions = {
    name: string;
    label: string;
    startDate: string;
    timeZone: string;
    startTime: string;
    endDate: string;
    endTime: string;
    location: string;
    description: string;
    options: CalendarOptions[];
}

type AddToCalendarProps = {
    calendarEventOptions: CalendarEventOptions
}

export const AddToCalendar = ({ calendarEventOptions }: AddToCalendarProps) => {
    const button = useRef<HTMLButtonElement>(null)

    const options = {
        ...calendarEventOptions,
        checkmark: false,
        trigger: 'click' as 'click',
        listStyle: 'modal' as 'modal',
    }

    const buttonClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        trackOpenMenu();
        atcb_action(options, button.current || undefined);
        setOptionsEventListeners();
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                ref={button}
                onClick={buttonClickHandler}
            >
                <FontAwesomeIcon
                    className={styles.icon}
                    icon={faCalendarPlus} />

                <span>Dodaj do kalendarza</span>
            </button>
        </div>
    )
}