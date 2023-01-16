import styles from './rsvp.module.scss'
import sectionStyles from '../../styles/section.module.scss'
import utilStyles from "../../styles/utils.module.scss";
import { PersonData } from "../brideAndGroom/person.type";
import { Contact } from "./contact";

export type RSVPData = {
    title: string
    description: string
}

type RSVPProps = {
    data: RSVPData
    brideAndGroom: PersonData[],
}

export const RSVP = ({ data, brideAndGroom }: RSVPProps) => (
    <div className={sectionStyles.wrapper}>
        <div className={sectionStyles.container}>
            <h2 className={utilStyles.heading}>{data.title}</h2>
            <p className={`${sectionStyles.content} ${utilStyles.center}`}>
                {data.description}
            </p>
            <div className={styles.contacts}>
                {brideAndGroom.map(person => (
                    <Contact key={person.name} person={person} />
                ))}
            </div>
        </div>
    </div>
)