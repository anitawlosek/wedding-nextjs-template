import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Hero } from "../components/hero";
import { CalendarEventOptions } from "../components/addToCalendar";
import { Countdown } from "../components/countdown";
import { Footer } from "../components/footer";
import { OurStory, OurStoryData } from "../components/ourStory";
import { BrideAndGroom } from "../components/brideAndGroom";
import { PersonData } from "../components/brideAndGroom/person.type";
import { EventDetails, EventDetailsData } from "../components/eventDetails";
import { RSVP, RSVPData } from "../components/rsvp";

type HomeProps = {
    calendarOptions: CalendarEventOptions
    brideAndGroom: PersonData[],
    ourStory: OurStoryData,
    eventDetails: EventDetailsData
    rsvp: RSVPData
}

export default function Home({ calendarOptions, brideAndGroom, ourStory, eventDetails, rsvp }: HomeProps) {
    return (
        <>
            <Head>
                <title>Ślub Karoliny i Jana</title>
                <meta name="description" content="Ślub Karoliny i Jana"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <main className={styles.main}>
                <Hero
                    brideAndGroom={brideAndGroom}
                    eventDetail={eventDetails}
                    calendarEventOptions={calendarOptions}
                />

                <Countdown
                    weddingDate={calendarOptions.startDate}
                    weddingTime={calendarOptions.startTime}
                />

                <BrideAndGroom data={brideAndGroom} />
                <OurStory data={ourStory} />

                <EventDetails
                    details={eventDetails}
                    calendarEventOptions={calendarOptions}
                />

                <RSVP brideAndGroom={brideAndGroom} data={rsvp} />
                <Footer />
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const calendarOptionsJSON = await import('../data/calendar-options.json')
    const brideAndGroomJSON = await import('../data/bride-and-groom.json')
    const ourStoryJSON = await import('../data/our-story.json')
    const eventDetailsJSON = await import('../data/event-details.json')
    const rsvpJSON = await import('../data/rsvp.json')

    const calendarOptions = calendarOptionsJSON.default
    const ourStory = ourStoryJSON.default
    const eventDetails = eventDetailsJSON.default
    const rsvp = rsvpJSON.default

    const brideAndGroom = brideAndGroomJSON.default.map(person => ({
        ...person,
        firstName: person.name.split(' ')[0]
    }))

    return {
        props: {
            calendarOptions,
            brideAndGroom,
            ourStory,
            eventDetails,
            rsvp
        }
    }
}