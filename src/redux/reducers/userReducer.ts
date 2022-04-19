import {UserActionTypes} from "../actions/userActions";


interface UserData {
    email?: string,
    password?: string,
    nickname?: string,
    authorized: boolean,
}

interface UserAction {
    type: string,
    userData: UserData,
}

const defaultState: UserData = {
    authorized: false,
};

export const userReducer = (state = defaultState, action:UserAction): UserData => {
    switch (action.type){
        case UserActionTypes.LOGIN_USER:
            return {...action.userData, authorized: true};
        case  UserActionTypes.LOGOUT_USER:
            return { authorized: false }
        default:
            return state;
    }
}
