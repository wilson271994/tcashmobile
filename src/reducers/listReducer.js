import { LAST_TRANSACTION } from "./actions/types"


const initialState = {
    last_transaction : []
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAST_TRANSACTION:
            return {
                ...state,
                last_transaction: action.value
            }

        default:
            return state

    }
}

export default listReducer;