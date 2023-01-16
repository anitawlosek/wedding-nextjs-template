export const trackOpenMenu = () => {
    window.dataLayer && window.dataLayer.push({
        event: 'add_to_calendar_event',
        eventProps: {
            category: 'add_to_calendar',
            action: 'open_menu',
        }
    });
}

export const trackCloseMenu = () => {
    window.dataLayer && window.dataLayer.push({
        event: 'add_to_calendar_event',
        eventProps: {
            category: 'add_to_calendar',
            action: 'close_menu',
        }
    });
}

export const trackGoogleOptionClick = () => {
    trackMenuOptionClick('google');
}

export const trackAppleOptionClick = () => {
    trackMenuOptionClick('apple');
}

export const trackICalOptionClick = () => {
    trackMenuOptionClick('iCal');
}

const trackMenuOptionClick = (label: string) => {
    window.dataLayer && window.dataLayer.push({
        event: 'add_to_calendar_event',
        eventProps: {
            category: 'add_to_calendar',
            action: 'click_option',
            label,
        }
    });
}

export const processName = (name: string) =>
    name.replace(/\s/g, '_').toLowerCase()

export const trackSocialMediaClick = (category: string, name: string, socialMediaName: string) => {
    const action = `${socialMediaName}_icon_click`
    const label = processName(name)

    window.dataLayer && window.dataLayer.push({
        event: 'custom_event',
        eventProps: {
            category,
            action,
            label
        }
    });
}

export const trackMakeCall = (name: string) => {
    window.dataLayer && window.dataLayer.push({
        event: 'custom_event',
        eventProps: {
            category: 'contact',
            action: 'phone_call',
            label: processName(name)
        }
    });
}