import { IS_HEADER, PAGE_TITLE, ROOT_NAVIGATION, SET_ACTIVATION_FORM, SET_HOME_PAGE, SET_LOGIN_FORM, SET_PROFIL_PAGE, SET_SERVICE_PAGE, SET_SIGNUP1_FORM, SET_SIGNUP2_FORM, SET_TRANSACTION_PAGE } from "./actions/types"


const initialState = {
    is_header           : true,
    root_navigation     : {},
    page_title          : '',
    is_home_page        : true,
    is_service_page     : false,
    is_transaction_page : false,
    is_profil_page      : false,

    //auth
    is_login_form       : true,
    is_signup1_form     : false,
    is_signup2_form     : false,
    is_activation_form  : false,
}

const navigationReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case IS_HEADER:
            return {
                ...state,
                is_header:action.value
            }

        case ROOT_NAVIGATION:
            return {
                ...state,
                root_navigation:action.value
            }

        case PAGE_TITLE:
            return {
                ...state,
                page_title:action.value
            }
        
        case SET_HOME_PAGE:
            return {
                ...state,
                is_home_page: action.value
            }

        case SET_SERVICE_PAGE:
            return {
                ...state,
                is_service_page: action.value
            }
        
        case SET_TRANSACTION_PAGE:
            return {
                ...state,
                is_transaction_page: action.value
            }
        
        case SET_PROFIL_PAGE:
            return {
                ...state,
                is_profil_page: action.value
            }

        //Auth
        case SET_LOGIN_FORM:
            return {
                ...state, 
                is_login_form: action.value
            }
        case SET_SIGNUP1_FORM:
            return {
                ...state,
                is_signup1_form: action.value
            }
        case SET_SIGNUP2_FORM:
            return {
                ...state,
                is_signup2_form: action.value
            }
        case SET_ACTIVATION_FORM:
            return {
                ...state,
                is_activation_form: action.value
            }

        default:
            return state

    }
}

export default navigationReducer;