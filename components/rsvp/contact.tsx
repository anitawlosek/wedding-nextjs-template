import { PersonData } from "../brideAndGroom/person.type";
import styles from "./rsvp.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { trackMakeCall } from "../../lib/tracking";
import { makeCall } from "../../lib/makeCall";

type ContactProps = {
    person: PersonData
}

export const Contact = ({ person }: ContactProps) => (
    <div className={styles.contact}>
        <h2 className={styles.name}>{person.firstName}</h2>
        <button
            onClick={() => {
                makeCall(person.socialMedia.phone)
                trackMakeCall(person.name)
            }}
            className={styles.button}
        >
            <span className={utilStyles.iconWrapper}>
                <FontAwesomeIcon icon={faPhone} />
            </span>
            <p>Zadzwoń</p>
        </button>
    </div>
)