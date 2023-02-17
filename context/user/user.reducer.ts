import { UserActionTypes, ContextAction, UserAppState } from "../../@Types/context/context.type";

export const userReducer = (state: UserAppState, action: ContextAction<UserActionTypes, any>): UserAppState => {
    switch (action.type) {
        case UserActionTypes.Login_success:
            state.token = action.payload.token;
            state.username = action.payload.username;
            return state
        default:
            return state
    }

}