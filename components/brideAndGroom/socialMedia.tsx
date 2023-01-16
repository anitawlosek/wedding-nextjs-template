import styles from "./brideAndGroom.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF as faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { SocialMediaData } from "./person.type";
import { trackSocialMediaClick } from "../../lib/tracking";
import { makeCall } from "../../lib/makeCall";

type SocialMediaProps = {
    name: string
    data: SocialMediaData
}

const eventCategory = 'social_media'

export const SocialMedia = ({ name, data }: SocialMediaProps) => (
    <div className={styles.socialMedia}>
        <a onClick={() => {
            makeCall(data.phone)
            trackSocialMediaClick(eventCategory, name, 'phone')
        }} >
            <span className={utilStyles.iconWrapper}>
                <FontAwesomeIcon icon={faPhone} />
            </span>
        </a>
        <a
            href={`https://instagram.com/${data.instagram}`}
            onClick={() => trackSocialMediaClick(eventCategory, name, 'instagram')}
        >
            <span className={utilStyles.iconWrapper}>
                <FontAwesomeIcon icon={faInstagram} />
            </span>
        </a>
        <a
            href={`https://facebook.com/${data.facebook}`}
            onClick={() => trackSocialMediaClick(eventCategory, name, 'facebook')}
        >
            <span className={utilStyles.iconWrapper}>
                <FontAwesomeIcon icon={faFacebook} />
            </span>
        </a>
    </div>
)