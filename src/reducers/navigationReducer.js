import { IS_HEADER, PAGE_TITLE, ROOT_NAVIGATION } from "./actions/types"


const initialState = {
    is_header : true,
    root_navigation : {},
    page_title : '',
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

        default:
            return state

    }
}

export default navigationReducer;