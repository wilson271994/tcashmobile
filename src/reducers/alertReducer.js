import { 
    ALERT_CANCEL, ALERT_CONFIRM, 
    ALERT_SUBTITLE, ALERT_TITLE, 
    ALERT_TYPE, INFO_NETWORK, IS_ALERT, IS_NETWORK 
} from "./actions/types"

const initialState = {
    is_alert : false,
    alert_type : '',
    alert_title : '',
    alert_subtitle : '',
    alert_confirm : {},
    alert_cancel : {},
    is_network : true,
    info_network : {},
}

const alertReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case IS_ALERT:
            return {
                ...state,
                is_alert:action.value
            }

        case ALERT_TYPE:
            return {
                ...state,
                alert_type:action.value
            }
        
        case ALERT_TITLE:
            return {
                ...state,
                alert_title:action.value
            }

        case ALERT_SUBTITLE:
            return {
                ...state,
                alert_subtitle:action.value
            }

        case ALERT_CONFIRM:
            return {
                ...state,
                alert_confirm:action.value
            }

        case ALERT_CANCEL:
            return {
                ...state,
                alert_cancel:action.value
            }
        
        case IS_NETWORK:
            return {
                ...state,
                is_network:action.value
            }
        
        case INFO_NETWORK:
            return {
                ...state,
                info_network:action.value
            }

        default:
            return state

    }
}

export default alertReducer;