import sectionStyles from "../../styles/section.module.scss";
import utilStyles from "../../styles/utils.module.scss";

export type SimpleSectionData = {
  title: string;
  description: string;
};

type SimpleSectionProps = {
  data: SimpleSectionData;
  id: string;
};

export const SimpleSection = ({ data, id }: SimpleSectionProps) => (
  <div className={sectionStyles.wrapper} id={id}>
    <div className={sectionStyles.container}>
      <h2 className={utilStyles.heading}>{data.title}</h2>
      <p className={sectionStyles.content}>{data.description}</p>
    </div>
  </div>
);
