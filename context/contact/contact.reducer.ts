import { ConatactListState, ContactActionTypes, ContextAction } from "../../@Types/context/context.type"

export const ContactReducer = (state: ConatactListState, action: ContextAction<ContactActionTypes, any>) => {
    switch (action.type) {

        case ContactActionTypes.Get_All_Contacts:
            state.contactslist = action.payload
            return state

        case ContactActionTypes.Search_All_Contacts:
            const filterContacts = state.contactslist.filter(n => n.name.includes(action.payload))
            state.searchlist = filterContacts
            return state
        default:
            return state
    }

}