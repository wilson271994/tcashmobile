import { AXIO_PERCENT_REQUEST } from "../reducers/actions/types";
import { store } from "../reducers/store";

export const BASE_URL="https://afriwinwin.com/"

//export const BASE_URL="http://127.0.0.1:8000/" 

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
        'content-type': 'multipart/form-data',
    },
    onUploadProgress
}

// MANAGE TRANSAK PAYMENT (Momo and OM)
export const appId = 'apl10cxle5y8tm';
export const TokenSandbox = 'SAND_D5424578185D4DA4A7F8A87C025358EC';
export const TokenProduction = 'PROD_56FEF6F9E099403C94775D01D330AF70';
export const BASE_URL_TRANSAK = 'https://dsapi.tranzak.me/';
