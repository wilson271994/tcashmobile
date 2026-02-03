import { LAST_TRANSACTION, SERVICE_LIST, TRANSACTION_LIST, USER_LIST } from "./actions/types"


const initialState = {
    last_transaction    : [],
    user_list           : [],
    transaction_list   : [],
    service_list        : [],
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAST_TRANSACTION:
            return {
                ...state,
                last_transaction: action.value
            }

        case USER_LIST:
            return {
                ...state,
                user_list: action.value
            }

        case TRANSACTION_LIST:
            return {
                ...state,
                transaction_list: action.value
            }
        
        case SERVICE_LIST:
            return {
                ...state,
                service_list: action.value
            }

        default:
            return state

    }
}

export default listReducer;