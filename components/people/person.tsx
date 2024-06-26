import styles from "./people.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import Image from "next/image";
import { SocialMedia } from "./socialMedia";
import sectionStyles from "../../styles/section.module.scss";
import { PersonData } from "./people.type";

type SocialMediaProps = {
  person: PersonData;
};

export const Person = ({ person }: SocialMediaProps) => (
  <div className={styles.person}>
    <div className={styles.personImageWrapper}>
      <Image
        src={person.image}
        alt={person.name}
        width={300}
        height={400}
        className={utilStyles.image}
      />
    </div>
    <h2 className={styles.name}>{person.name}</h2>
    {person.socialMedia && (
      <SocialMedia name={person.name} data={person.socialMedia} />
    )}
    <p className={sectionStyles.content}>{person.description}</p>
  </div>
);
