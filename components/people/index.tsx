import utilStyles from "../../styles/utils.module.scss";
import sectionStyles from "../../styles/section.module.scss";
import styles from "./people.module.scss";
import { PersonData } from "./people.type";
import { Person } from "./person";

type PeopleProps = {
  title?: string;
  data: PersonData[];
  id: string;
};

export const People = ({ title, data, id }: PeopleProps) => (
  <div className={sectionStyles.wrapper} id={id}>
    <div className={sectionStyles.container}>
      {title && <h2 className={utilStyles.heading}>{title}</h2>}
      <div className={styles.people}>
        {data.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  </div>
);
