export const makeCall = (phoneNumber: string) => {
    window.location.href = `tel://${phoneNumber}`
}