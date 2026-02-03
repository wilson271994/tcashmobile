import { LAST_TRANSACTION, SERVICE_LIST, TRANSACTION_DETAIL, TRANSACTION_LIST, USER_LIST } from "./actions/types"


const initialState = {
    transaction_detail : {},
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTION_DETAIL:
            return {
                ...state,
                transaction_detail: action.value
            }

        default:
            return state

    }
}

export default detailReducer;