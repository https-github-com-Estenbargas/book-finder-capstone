export interface User {
    userid : string|null,
    userActivationToken : string|null,
    userEmail : string,
    userHash : string,
    userImage : string,
    userName : string,
}

export interface PartialUser {
    userId: string|null
    userImage: string
    userName: string
}