import { MessageActionTypes, ContextAction, MessageState } from "../../@Types/context/context.type";

export const messagesReducer = (state: MessageState, action: ContextAction<MessageActionTypes, any>): MessageState => {
    switch (action.type) {
        case MessageActionTypes.Get_Current_Messages:
            state.roomId = action.payload.roomId;
            state.MessageList = action.payload.MessageList;
            return state
        case MessageActionTypes.Send_new_Messages:
            state.MessageList.push(action.payload)
            return state
        case MessageActionTypes.Remove_Message:
            state.MessageList = state.MessageList.filter(msg => msg.id !== action.payload)
            return state
        case MessageActionTypes.Exit_Room:
            state.MessageList = []
            state.roomId = ""
            return state
        default:
            return state
    }

}