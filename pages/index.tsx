import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero } from "../components/hero";
import { CalendarEventOptions } from "../components/addToCalendar";
import { Countdown } from "../components/countdown";
import { SimpleSection, SimpleSectionData } from "../components/ourStory";
import { People } from "../components/people";
import { AboutUsData } from "../components/people/people.type";
import { EventDetails, EventDetailsData } from "../components/eventDetails";
import { Menu } from "../components/menu";

type HomeProps = {
    calendarOptions: CalendarEventOptions;
    aboutUs: AboutUsData;
    ourStory: SimpleSectionData;
    eventDetails: EventDetailsData;
};

export default function Home({
                                 calendarOptions,
                                 aboutUs,
                                 ourStory,
                                 eventDetails,
                             }: HomeProps) {
    return (
        <>
            <Head>
                <title>Ślub Anity i Tomka</title>
                <meta name="description" content="Ślub Anity i Tomka" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
                <Menu />
                <Hero
                    brideAndGroom={aboutUs}
                    eventDetail={eventDetails}
                    calendarEventOptions={calendarOptions}
                />

                <Countdown
                    weddingDate={calendarOptions.startDate}
                    weddingTime={calendarOptions.startTime}
                />

                <EventDetails
                    details={eventDetails}
                    calendarEventOptions={calendarOptions}
                />

                <People
                    data={[aboutUs.bride, aboutUs.groom]}
                    title={"O nas"}
                    id={"about-us"}
                />

                <SimpleSection data={ourStory} id={"our-story"} />

                <People
                    data={[aboutUs.bridesmaid, aboutUs.groomsman]}
                    title={"Świadkowie"}
                    id={"bridesmaid-groomsman"}
                />
            </main>
        </>
    );
}

export const getStaticProps = async () => {
    const calendarOptionsJSON = await import("../data/calendar-options.json");
    const brideAndGroomJSON = await import("../data/about-us.json");
    const ourStoryJSON = await import("../data/our-story.json");
    const eventDetailsJSON = await import("../data/event-details.json");

    const calendarOptions = calendarOptionsJSON.default;
    const ourStory = ourStoryJSON.default;
    const eventDetails = eventDetailsJSON.default;

    const aboutUs = {
        ...brideAndGroomJSON.default,
        bride: {
            ...brideAndGroomJSON.default.bride,
            firstName: brideAndGroomJSON.default.bride.name.split(" ")[0],
        },
        groom: {
            ...brideAndGroomJSON.default.groom,
            firstName: brideAndGroomJSON.default.groom.name.split(" ")[0],
        },
    };

    return {
        props: {
            calendarOptions,
            aboutUs,
            ourStory,
            eventDetails,
        },
    };
};
