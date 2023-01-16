import sectionStyles from '../../styles/section.module.scss'
import utilStyles from "../../styles/utils.module.scss";

export type OurStoryData = {
    title: string
    description: string
}

type OurStoryProps = {
    data: OurStoryData
}

export const OurStory = ({ data }: OurStoryProps) => (
    <div className={sectionStyles.wrapper}>
        <div className={sectionStyles.container}>
            <h2 className={utilStyles.heading}>{data.title}</h2>
            <p className={sectionStyles.content}>
                {data.description}
            </p>
        </div>
    </div>
)