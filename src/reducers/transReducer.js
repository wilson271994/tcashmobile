import { TRANSACTION_FEES } from "./actions/types"


const initialState = {
    transaction_fee     : {},
}

const transReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTION_FEES:
            return {
                ...state,
                transaction_fee: action.value
            }

        default:
            return state

    }
}

export default transReducer;