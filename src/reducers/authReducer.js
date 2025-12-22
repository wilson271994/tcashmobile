import {
    AUTH_ERROR_MESSAGE,
    IS_AUTHENTICATED,
    IS_AUTH_ERROR,
    IS_PIN_APPROUVED,
    SITE_INFOS,
    USER_INFOS,
    USER_TOKEN,
    LAST_NAME,
    //SIGN UP VARIABLES

    USER_NAME,
    EMAIL,
    PASSWORD_1,
    PASSWORD_2,
    FIRST_NAME,
    STREET,
    PHONE_NUMBER,
    ACCEPT_CONDITION,
    GENDER,
    COUNTRY,
    CITY,
    ACCOUNT,
    DATE_OF_BIRTH,

} from "./actions/types"


const initialState = {
    is_authenticated: false,
    user_infos: {},
    user_token: '',
    auth_error_message: '',
    is_auth_error: false,
    site_infos: {},
    is_pin_approuved: false,

    // Signup_Variable
    user_name: '',
    email: '',
    password_1: '',
    password_2: '',
    first_name: '',
    street: '',
    phone_number: '',
    accept_condition: false,
    gender: '',
    country: '',
    city: '',
    account: '',
    date_of_birth: new Date(),
    last_name: '',

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTHENTICATED:
            return {
                ...state,
                is_authenticated: action.value
            }

        case USER_INFOS:
            return {
                ...state,
                user_infos: action.value
            }

        case USER_TOKEN:
            return {
                ...state,
                user_token: action.value
            }

        case AUTH_ERROR_MESSAGE:
            return {
                ...state,
                auth_error_message: action.value
            }

        case IS_AUTH_ERROR:
            return {
                ...state,
                is_auth_error: action.value
            }

        case SITE_INFOS:
            return {
                ...state,
                site_infos: action.value
            }

        case IS_PIN_APPROUVED:
            return {
                ...state,
                is_pin_approuved: action.value
            }

        // SIGN UP VARIABLES
        case USER_NAME:
            return {
                ...state,
                user_name: action.value
            }

        case EMAIL:
            return {
                ...state,
                email: action.value
            }

        case PASSWORD_1:
            return {
                ...state,
                password_1: action.value
            }

        case PASSWORD_2:
            return {
                ...state,
                password_2: action.value
            }

        case FIRST_NAME:
            return {
                ...state,
                first_name: action.value
            }

        case STREET:
            return {
                ...state,
                street: action.value
            }

        case PHONE_NUMBER:
            return {
                ...state,
                phone_number: action.value
            }

        case ACCEPT_CONDITION:
            return {
                ...state,
                accept_condition: action.value
            }

        case GENDER:
            return {
                ...state,
                gender: action.value
            }

        case COUNTRY:
            return {
                ...state,
                country: action.value
            }

        case CITY:
            return {
                ...state,
                city: action.value
            }

        case ACCOUNT:
            return {
                ...state,
                account: action.value
            }

        case DATE_OF_BIRTH:
            return {
                ...state,
                date_of_birth: action.value
            }

        case LAST_NAME:
            return {
                ...state,
                last_name: action.value
            }
        default:
            return state

    }
}

export default authReducer;