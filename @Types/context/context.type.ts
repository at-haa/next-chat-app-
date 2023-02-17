export type ContactState = {
    id: string,
    name: string,
    avatar: string,
    lastMessageSent: string,
    lastMessage: string,
    roomId: string
}

export enum ContactActionTypes {
    Get_All_Contacts = "Get_All_Contacts",
    Search_All_Contacts = "Search_All_Contacts"
}

export type ContextAction<T, K> = {
    type: T,
    payload?: K
}

export type MessageItem = {
    isSentByOwner: boolean,
    id: number,
    value: string
}
export type MessageState = {
    roomId: string,
    MessageList: MessageItem[]
}

export enum MessageActionTypes {
    Get_Current_Messages = "Get_Current_Messages",
    Send_new_Messages = "Send_new_Messages",
    Remove_Message = "Remove_Message",
    Exit_Room = "Exit_Room"
}


export type ContextAppState = {
    contacts: ConatactListState,
    messages: MessageState,
    user: UserAppState
}
export type UserAppState = {
    username: string,
    token: string
}

export type ConatactListState = {
    contactslist: ContactState[],
    searchlist: ContactState[],
}

export enum UserActionTypes {
    Login_success = "Login_success",
}