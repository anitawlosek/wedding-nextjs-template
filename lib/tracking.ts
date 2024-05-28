// arrow buttons
export const trackScrollDownButton = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "scroll_down_button",
            action: "click_button",
        },
    });
};

// main menu
export const trackOpenMenu = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "main_menu",
            action: "open_menu",
        },
    });
};

export const trackCloseMenu = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "main_menu",
            action: "close_menu",
        },
    });
};

export const trackMenuItem = (label: string) => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "main_menu",
            action: "click_menu_item",
            label,
        },
    });
};

// add to calendar
export const trackOpenAddToCalendarMenu = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "add_to_calendar_event",
        eventProps: {
            category: "add_to_calendar",
            action: "open_menu",
        },
    });
};

export const trackCloseAddToCalendarMenu = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "add_to_calendar_event",
        eventProps: {
            category: "add_to_calendar",
            action: "close_menu",
        },
    });
};

export const trackGoogleOptionClick = () => {
    trackAddToCalendarMenuOptionClick("google");
};

export const trackAppleOptionClick = () => {
    trackAddToCalendarMenuOptionClick("apple");
};

export const trackICalOptionClick = () => {
    trackAddToCalendarMenuOptionClick("iCal");
};

const trackAddToCalendarMenuOptionClick = (label: string) => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "add_to_calendar_event",
        eventProps: {
            category: "add_to_calendar",
            action: "click_option",
            label,
        },
    });
};

// social media
export const processName = (name: string) =>
    name.replace(/\s/g, "_").toLowerCase();

export const trackSocialMediaClick = (
    category: string,
    name: string,
    socialMediaName: string
) => {
    const action = `${socialMediaName}_icon_click`;
    const label = processName(name);

    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category,
            action,
            label,
        },
    });
};

export const trackMakeCall = (name: string) => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "contact",
            action: "phone_call",
            label: processName(name),
        },
    });
};

// schedule more info
export const trackOpenMoreEventInfo = (title: string) => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "schedule",
            action: "more_info_click",
            label: processName(title),
        },
    });
};

export const trackCloseMoreEventInfo = () => {
    window.dataLayer &&
    window.dataLayer.push({
        event: "custom_event",
        eventProps: {
            category: "schedule",
            action: "more_info_close",
        },
    });
};
