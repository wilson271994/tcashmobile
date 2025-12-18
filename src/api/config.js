import { AXIO_PERCENT_REQUEST } from "../reducers/actions/types";
import { store } from "../reducers/store";

// export const BASE_URL="https://t-cash.ca/"

export const BASE_URL="http://192.168.1.185:8000/" 

const onUploadProgress = (progressEvent) => {
    const { loaded, total } = progressEvent;
    let percent = Math.floor((loaded * 100) / total);

    if (percent < 100) {
        console.log(`${loaded} bytes of ${total} bytes. ${percent}%`);
        store.dispatch({type:AXIO_PERCENT_REQUEST, value:percent});
    }
};

export const headerRequest = {
    headers: { 
        'content-type': 'application/json',
    },
    onUploadProgress
}

