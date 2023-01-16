import {
    trackAppleOptionClick,
    trackCloseMenu,
    trackGoogleOptionClick,
    trackICalOptionClick
} from "../../lib/tracking";


export const setOptionsEventListeners = () => {
    const googleOptionButton = document?.getElementById('atcb-btn-custom-google')
    googleOptionButton && googleOptionButton.addEventListener('click', trackGoogleOptionClick);

    const iCalOptionButton = document?.getElementById('atcb-btn-custom-ical')
    iCalOptionButton && iCalOptionButton.addEventListener('click', trackICalOptionClick);

    const appleOptionButton = document?.getElementById('atcb-btn-custom-apple')
    appleOptionButton && appleOptionButton.addEventListener('click', trackAppleOptionClick);

    const closeMenuButton = document?.getElementById('atcb-btn-custom-close')
    closeMenuButton && closeMenuButton.addEventListener('click', trackCloseMenu);
}