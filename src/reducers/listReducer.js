import { LAST_TRANSACTION, TRANSACTION_FEES, USER_LIST } from "./actions/types"


const initialState = {
    last_transaction    : [],
    user_list           : []
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

        default:
            return state

    }
}

export default listReducer;