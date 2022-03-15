import {AuthAction, AuthActionsEnum, IAuthState} from "./types";
import {IUser} from "../../../models/IUser";


const initialState: IAuthState = {
    isAuth: false,
    error: '',
    iSLoading: false,
    user: {} as IUser
}
    export default function authReducer(state = initialState, action: AuthAction): IAuthState {
        switch (action.type) {
            case AuthActionsEnum.SET_AUTH:
                return {...state, isAuth: action.payload, iSLoading:false}
            case AuthActionsEnum.SET_ERROR:
                return {...state,error:action.payload, iSLoading:false}
            case AuthActionsEnum.SET_IS_LOADING:
                return {...state, iSLoading:true}
            case AuthActionsEnum.SET_USER:
                return {...state, user:action.payload}

            default:
                return state
        }
    }