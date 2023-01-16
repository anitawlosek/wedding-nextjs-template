import sectionStyles from '../../styles/section.module.scss'
import styles from "./brideAndGroom.module.scss";
import { PersonData } from "./person.type";
import { Person } from "./person";

type BrideAndGroomProps = {
    data: PersonData[]
}

export const BrideAndGroom = ({ data }: BrideAndGroomProps) => (
    <div className={sectionStyles.wrapper}>
        <div className={sectionStyles.container}>
            <div className={styles.people} >
                {data.map((person) =>
                    <Person
                        key={person.name}
                        person={person}
                    />
                )}
            </div>
        </div>
    </div>
)