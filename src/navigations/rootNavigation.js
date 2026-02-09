import { SET_ACTIVATION_FORM, SET_HOME_PAGE, SET_LOGIN_FORM, SET_PROFIL_FAQ, SET_PROFIL_HOME, SET_PROFIL_PAGE, SET_PROFIL_REFERAL, SET_PROFIL_UPDATE_INFO, SET_PROFIL_UPDATE_KYC, SET_PROFIL_UPDATE_NOTIF, SET_PROFIL_WALLETS, SET_SERVICE_PAGE, SET_SIGNUP1_FORM, SET_SIGNUP2_FORM, SET_TRANSACTION_PAGE } from "../reducers/actions/types";
import { store } from "../reducers/store";


/**
 * NAVIGATION 
 */
export const switchHomePageAction = (data) => { 
    if (data){
        store.dispatch({type:SET_HOME_PAGE, value:data});
        store.dispatch({type:SET_SERVICE_PAGE, value:false});
        store.dispatch({type:SET_TRANSACTION_PAGE, value:false});
        store.dispatch({type:SET_PROFIL_PAGE, value:false});
    }
}

export const switchServicePageAction = (data) => { 
    if (data){
        store.dispatch({type:SET_SERVICE_PAGE, value:data});
        store.dispatch({type:SET_HOME_PAGE, value:false});
        store.dispatch({type:SET_TRANSACTION_PAGE, value:false});
        store.dispatch({type:SET_PROFIL_PAGE, value:false});
    }
}

export const switchTransactionPageAction = (data) => { 
    if (data){
        store.dispatch({type:SET_TRANSACTION_PAGE, value:data});
        store.dispatch({type:SET_HOME_PAGE, value:false});
        store.dispatch({type:SET_SERVICE_PAGE, value:false});
        store.dispatch({type:SET_PROFIL_PAGE, value:false});
    }
}

export const switchProfilPageAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_PAGE, value:data});
        store.dispatch({type:SET_HOME_PAGE, value:false});
        store.dispatch({type:SET_SERVICE_PAGE, value:false});
        store.dispatch({type:SET_TRANSACTION_PAGE, value:false});
    }
}

/**
 * Auth
 */
export const switchLoginFormAction = (data) => { 
    if (data){
        store.dispatch({type:SET_LOGIN_FORM, value:data});
        store.dispatch({type:SET_SIGNUP1_FORM, value:false});
        store.dispatch({type:SET_SIGNUP2_FORM, value:false});
        store.dispatch({type:SET_ACTIVATION_FORM, value:false});
    }
}

export const switchSignupForm1Action = (data) => { 
    if (data){
        store.dispatch({type:SET_SIGNUP1_FORM, value:data});
        store.dispatch({type:SET_LOGIN_FORM, value:false});
        store.dispatch({type:SET_SIGNUP2_FORM, value:false});
        store.dispatch({type:SET_ACTIVATION_FORM, value:false});
    }
}

export const switchSignupForm2Action = (data) => { 
    if (data){
        store.dispatch({type:SET_SIGNUP2_FORM, value:data});
        store.dispatch({type:SET_SIGNUP1_FORM, value:false});
        store.dispatch({type:SET_LOGIN_FORM, value:false});
        store.dispatch({type:SET_ACTIVATION_FORM, value:false});
    }
}

export const switchActivationFormAction = (data) => { 
    if (data){
        store.dispatch({type:SET_ACTIVATION_FORM, value:data});
        store.dispatch({type:SET_SIGNUP2_FORM, value:false});
        store.dispatch({type:SET_SIGNUP1_FORM, value:false});
        store.dispatch({type:SET_LOGIN_FORM, value:false});
    }
}

/**
 * Profil 
 */
export const switchProfilHomeAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_HOME, value:data});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_WALLETS, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
    }
}

export const switchProfilUpdateInfoAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:data});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_WALLETS, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
    }
}

export const switchProfilUpdateKycAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:data});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_WALLETS, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
    }
}

export const switchProfilUpdateNotifAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:data});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
        store.dispatch({type:SET_PROFIL_WALLETS, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
    }
}

export const switchProfilWalletsAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_WALLETS, value:data});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
    }
}

export const switchProfilFaqAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_FAQ, value:data});
        store.dispatch({type:SET_PROFIL_WALLETS, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
        store.dispatch({type:SET_PROFIL_REFERAL, value:false});
    }
}

export const switchProfilReferalAction = (data) => { 
    if (data){
        store.dispatch({type:SET_PROFIL_REFERAL, value:data});
        store.dispatch({type:SET_PROFIL_FAQ, value:false});
        store.dispatch({type:SET_PROFIL_WALLETS, value:data});
        store.dispatch({type:SET_PROFIL_UPDATE_NOTIF, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_KYC, value:false});
        store.dispatch({type:SET_PROFIL_UPDATE_INFO, value:false});
        store.dispatch({type:SET_PROFIL_HOME, value:false});
    }
}