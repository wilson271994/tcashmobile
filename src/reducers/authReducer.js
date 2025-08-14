import { 
    AUTH_ERROR_MESSAGE, 
    IS_AUTHENTICATED, 
    IS_AUTH_ERROR, 
    IS_PIN_APPROUVED, 
    SITE_INFOS, 
    USER_INFOS, 
    USER_TOKEN 
} from "./actions/types"


const initialState = {
    is_authenticated : false,
    user_infos : {},
    user_token : '',
    auth_error_message:'',
    is_auth_error:false,
    site_infos:{},
    is_pin_approuved:false,
}

const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                is_authenticated:action.value
            }

        case USER_INFOS:
            return {
                ...state,
                user_infos:action.value
            }

        case USER_TOKEN:
            return {
                ...state,
                user_token:action.value
            }

        case AUTH_ERROR_MESSAGE:
            return {
                ...state,
                auth_error_message:action.value
            }

        case IS_AUTH_ERROR:
            return {
                ...state,
                is_auth_error:action.value
            }

        case SITE_INFOS:
            return {
                ...state,
                site_infos:action.value
            }

        case IS_PIN_APPROUVED:
            return {
                ...state,
                is_pin_approuved:action.value
            }

        default:
            return state

    }
}

export default authReducer;