import { IS_HEADER, PAGE_TITLE, ROOT_NAVIGATION, SET_HOME_PAGE, SET_PROFIL_PAGE, SET_SERVICE_PAGE, SET_TRANSACTION_PAGE } from "./actions/types"


const initialState = {
    is_header           : true,
    root_navigation     : {},
    page_title          : '',
    is_home_page        : true,
    is_service_page     : false,
    is_transaction_page : false,
    is_profil_page      : false,
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

        default:
            return state

    }
}

export default navigationReducer;