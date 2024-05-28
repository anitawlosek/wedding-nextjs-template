export type SocialMediaData = {
    instagram: string
    facebook: string
    phone: string
}

export type PersonData = {
    name: string
    image: string
    description: string
    firstName?: string
    socialMedia?: SocialMediaData
}

export type AboutUsData = {
    bride: PersonData,
    groom: PersonData,
    bridesmaid: PersonData,
    groomsman: PersonData
}