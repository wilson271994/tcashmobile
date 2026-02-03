import axios from 'axios';
import { store } from '../store';
import { BASE_URL, SERVER_KEY, headerRequest } from '../../api/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
    AUTH_ERROR_MESSAGE,
    IS_AUTHENTICATED,
    IS_AUTH_ERROR,
    IS_HEADER, IS_LOADING,
    IS_NETWORK,
    LAST_TRANSACTION,
    SERVICE_LIST,
    SET_HOME_PAGE,
    SET_PROFIL_PAGE,
    SET_SERVICE_PAGE,
    SET_TRANSACTION_PAGE,
    SITE_INFOS,
    TRANSACTION_FEES,
    TRANSACTION_LIST,
    USER_INFOS,
    USER_LIST,
    USER_TOKEN,
} from './types';

//Global Constantes
const TIMEOUT = 8000;
const LIMIT_LIST = 10;
//SET AXIOS 
const axiosClient = axios.create();
axiosClient.defaults.baseURL = BASE_URL;
axiosClient.defaults.headers = headerRequest.headers;
axiosClient.defaults.onUploadProgress = headerRequest.onUploadProgress;
axiosClient.defaults.onDownloadProgress = headerRequest.onUploadProgress;
axiosClient.defaults.withCredentials = true;

/**
 * Manage switcher Action
 */
export const switchHeaderAction = (data) => {
    store.dispatch({ type: IS_HEADER, value: data });
}

/**
 * Check If Auth Persist
 */
export const checkAuthDataAction = async () => {
    const dataUser = await AsyncStorage.getItem('userInfos');  
    const dataToken = await AsyncStorage.getItem('userToken'); 
    if(dataUser && dataToken){
        store.dispatch({type:IS_AUTHENTICATED, value:true});
        const user_data     = JSON.parse(dataUser);
        const user_token    = JSON.parse(dataToken);
        store.dispatch({type:USER_INFOS, value:user_data});
        store.dispatch({type:USER_TOKEN, value:user_token});
        GetUserInfoAction(user_token);
    }
    await switchHomePageAction(true);
    await FetchPreloadDataAction();
}

/**
 * 
 * Preload Data 
 */
export const FetchPreloadDataAction = () => {
    store.dispatch({type:IS_LOADING, value:true}); 
    axiosClient.get(`${BASE_URL}/api/site-info`) 
    .then( async (res) => {
        if(res.data.status === 200){
            const result = res.data.result;  
            store.dispatch({type:SITE_INFOS, value:result});
            store.dispatch({type:IS_LOADING, value:false});
        }else{
            store.dispatch({type:IS_LOADING, value:false});
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

/**
 * Manage Authentication action
 */
export const LoginAction = (postdata) => {
    store.dispatch({ type: IS_LOADING, value: true });
    axiosClient.post(`${BASE_URL}/api/auth`, postdata)
    .then(async (res) => {
        const result = res.data.result;
        if (res.data.status === 200) {
            await store.dispatch({ type: USER_TOKEN, value: result.token });
            await store.dispatch({ type: USER_INFOS, value: result.user });
            await AsyncStorage.setItem('userInfos', JSON.stringify(result.user));
            await AsyncStorage.setItem('userToken', JSON.stringify(result.token));
            await store.dispatch({ type: IS_AUTHENTICATED, value: true })

            await store.dispatch({ type: LAST_TRANSACTION, value: result.lasttransactions });

        } else if (res.data.status === 500) {
            store.dispatch({ type: IS_LOADING, value: false });

            //view the error message
            store.dispatch({ type: IS_AUTH_ERROR, value: true })
            store.dispatch({ type: AUTH_ERROR_MESSAGE, value: result.message })
        } else {
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Erreur dans le formulaire',
                    description: 'Une erreur s\'est produite',
                }
            });
        }
    })
    .catch((error) => {
        Toast.show({
            'type': 'info',
            props: {
                title: 'Connexion internet!',
                description: 'Votre débit internet est instable. Vérifiez votre connectivité et reéssayez',
            }
        });
        store.dispatch({ type: IS_LOADING, value: false });
    })
}

/**
 * 
 * @param {*} postdata 
 * Create Account
 */
export const SignupAction = (postdata, navigation) => {
    store.dispatch({ type: IS_LOADING, value: true})
    axiosClient.post(`${BASE_URL}/api/signup`, postdata)
    .then(async (res) => {
        const result = res.data;
        if(result.status === 200) {
            store.dispatch({ type: IS_LOADING, value: false });
            Toast.show({
                'type': 'success',
                props: {
                    title: 'Compte crée avec succès',
                    description: 'Success',
                }
            });
            navigation.navigate("Activation");
        } else if (result.status === 500) {
            store.dispatch({ type : IS_LOADING, value: false });
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur s\'est produite',
                    description: result.message,
                }
            });
        }else {
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Erreur de connexion',
                    description: 'Une erreur s\'est produite',
                }
            });
        }
    })
    .catch((error) => {
        Toast.show({
            'type': 'info',
            props: {
                title: 'Connexion internet!',
                description: 'Votre débit internet est instable. Vérifiez votre connectivité et reéssayez',
            }
        });
        store.dispatch({ type: IS_LOADING, value: false });
    })

}

/**
 * 
 * @param {*} postdata  
 * Activate Account
 */
export const AccountActivationAction = (postdata) => {
    store.dispatch({ type: IS_LOADING, value: true});
    axiosClient.post(`${BASE_URL}/api/activate-account`, postdata)
        .then(async (res) => {
            const result = res.data;
            if(result.status === 200) {
                await store.dispatch({ type: USER_TOKEN, value: result.token });
                await store.dispatch({ type: USER_INFOS, value: result.user });
                await AsyncStorage.setItem('userInfos', JSON.stringify(result.user));
                await AsyncStorage.setItem('userToken', JSON.stringify(result.token));
                await store.dispatch({ type: IS_AUTHENTICATED, value: true })
            } else if ( result.status === 500 ) {
                store.dispatch({ type: IS_LOADING, value: false })
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Erreur de connexion',
                        description: result.message,
                    }
                });
            }
            else {
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Erreur de connexion',
                        description: 'Une erreur s\' est produite',
                    }
                });
            } 
        })
        .catch((error) => {
            Toast.show({
                'type': 'info',
                props: {
                    title: 'Connexion internet!',
                    description: 'Votre débit internet est instable. Vérifiez votre connectivité et réessayez',
                }
            });
            store.dispatch({ type: IS_LOADING, value: false });
        })
}

/**
 * 
 * @param {*} postdata 
 * Activate Account
 */
export const LogoutActiion = (postdata) => {
    store.dispatch({ type: IS_LOADING, value: true });
    axiosClient.post(`${BASE_URL}/api/logout`, postdata)
    .then(async (res) => {
        const result = res.data;
        if (result.status === 200) {
            await store.dispatch({ type: USER_TOKEN, value: '' });
            await store.dispatch({ type: USER_INFOS, value: {} });
            await AsyncStorage.removeItem('infoUser');
            await AsyncStorage.removeItem('userToken');
            await store.dispatch({ type: IS_AUTHENTICATED, value: false })
            await store.dispatch({ type: IS_LOADING, value: false })
        } else if (result.status === 500) {
            store.dispatch({ type: IS_LOADING, value: false })
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Erreur de déconnexion',
                    description: result.message,
                }
            });
        }
        else {
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur s\'est produite',
                    description: 'Contacter l\'administrateur',
                }
            });
        }
    })
    .catch((error) => {
        Toast.show({
            'type': 'info',
            props: {
                title: 'Connexion internet!',
                description: 'Votre débit internet est instable. Vérifiez votre connectivité et reéssayez',
            }
        });
        store.dispatch({ type: IS_LOADING, value: false });
    })
}

/**
 * Manage refrsh userinfo action
 */
export const GetUserInfoAction = (postdata) => {
    store.dispatch({ type: IS_LOADING, value: true });
    axiosClient.post(`${BASE_URL}/api/get-user-data?token=${postdata}`)
    .then(async (res) => {
        const result = res.data.result;
        if (res.data.status === 200) {
            store.dispatch({type:IS_LOADING, value:false});
            await store.dispatch({ type: USER_TOKEN, value: result.token });
            await store.dispatch({ type: USER_INFOS, value: result.user });
            await AsyncStorage.setItem('userInfos', JSON.stringify(result.user));
            await AsyncStorage.setItem('userToken', JSON.stringify(result.token));
            await store.dispatch({ type: IS_AUTHENTICATED, value: true })

            await store.dispatch({ type: LAST_TRANSACTION, value: result.lasttransactions });

        } else {
            store.dispatch({ type: IS_LOADING, value: false });
        }
    })
    .catch((error) => {
        Toast.show({
            'type': 'info',
            props: {
                title: 'Connexion internet!',
                description: 'Votre débit internet est instable. Vérifiez votre connectivité et reéssayez',
            }
        });
        store.dispatch({ type: IS_LOADING, value: false });
    })
}

/**
 * 
 * @param {*} postdata 
 * Create Account
 */
export const UpdateProfilAction = (postdata, navigation) => {
    const payload = JSON.stringify(postdata)
    store.dispatch({ type: IS_LOADING, value: true})
    axiosClient.post(`${BASE_URL}/api/signup`, payload)
    .then(async (res) => {
        const result = res.data;
        if(result.status === 200) {
            store.dispatch({ type: IS_LOADING, value: false });
            await store.dispatch({ type: USER_TOKEN, value: result.token });
            await store.dispatch({ type: USER_INFOS, value: result.user });
            await AsyncStorage.setItem('userInfos', JSON.stringify(result.user));
            await AsyncStorage.setItem('userToken', JSON.stringify(result.token));
            Toast.show({
                'type': 'success',
                props: {
                    title: 'Opération réssie!',
                    description:res.data.message,
                }
            });
            navigation.navigate(" ");
        } else if (result.status === 500) {
            store.dispatch({ type : IS_LOADING, value: false })
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur s\'est produite',
                    description: result.message,
                }
            });
        }
        else {
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Erreur de connexion',
                    description: 'Une erreur s\'est produite',
                }
            });
        }
    })
    .catch((error) => {
        Toast.show({
            'type': 'info',
            props: {
                title: 'Connexion internet!',
                description: 'Votre débit internet est instable. Vérifiez votre connectivité et reéssayez',
            }
        });
        store.dispatch({ type: IS_LOADING, value: false });
    })

}

/**
 * 
 * @param {*} postdata 
 */
export const SearchUserAction = (postdata) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.get(`${BASE_URL}/api/search-user?token=${postdata.token}&key=${postdata.searchkey}`)
    .then( async (res) => {
        if(res.data.status === 200){
            const result = res.data.result; 
            store.dispatch({type:USER_LIST, value:result});
            store.dispatch({type:IS_LOADING, value:false});
        }else{
            store.dispatch({type:IS_LOADING, value:false});
            store.dispatch({ type: IS_AUTH_ERROR, value: true })
            store.dispatch({ type: AUTH_ERROR_MESSAGE, value: result.message })
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

/**
 * 
 * @param {*} postdata 
 */
export const TransactionListAction = (postdata) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.get(`${BASE_URL}/api/transaction-list?token=${postdata}`)
    .then( async (res) => {
        if(res.data.status === 200){
            const result = res.data.result; 
            store.dispatch({type:TRANSACTION_LIST, value:result});
            store.dispatch({type:IS_LOADING, value:false});
        }else{
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:res.data.message,
                }
            }); 
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

/**
 * 
 * @param {*} postdata 
 */
export const GetTransactionComAction = (postdata) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.post(`${BASE_URL}/api/get-transaction-fee`, postdata)
    .then( async (res) => {
        if(res.data.status === 200){
            const result = res.data.result; 
            store.dispatch({type:TRANSACTION_FEES, value:result});
            store.dispatch({type:IS_LOADING, value:false});
        }else{
            store.dispatch({type:IS_LOADING, value:false});
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:res.data.message,
                }
            }); 
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}


/**
 * 
 * @param {*} postdata 
 */
var timercheckstatus                = 10000; //check every 10 seconds
var checkstatusruntime              = 20000; //check every 20 seconds
export const DepositMoneyAction = (postdata, navigation) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.post(`${BASE_URL}/api/deposit-withdrawal`, postdata)
    .then( async (res) => {
        if(res.data.status === 200){
            const data = res.data.result;
            const ref_data = JSON.stringify({
                token               : data.token,
                apiservicecode      : data.serviceid,
                transaction_ref     : data.transaction_ref,
            })
            var messagevalidation = '';
            if(data.serviceid === '30056'){
                messagevalidation = '#150*50#';
            } 
            if(data.serviceid === '20056'){
                messagevalidation = '*126#';
            }
            Toast.show({
                'type':'success',
                props:{
                    title:'Validation de la transaction.',
                    description:`Veuillez saisir le code suivant pour valider la transaction ${messagevalidation}`,
                    autoHide:false
                }
            }); 
            setTimeout(() => TransactionStatusAction(ref_data, navigation, timercheckstatus), checkstatusruntime);
        }else{
            store.dispatch({type:IS_LOADING, value:false});
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:res.data.message,
                }
            }); 
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

/**
 * 
 * @param {*} postdata 
 */
export const TransactionStatusAction = (postdata, navigation, timercheckstatus) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.post(`${BASE_URL}/api/request-payment-status`, postdata)
    .then( async (res) => {
        if(res.data.status === 200){
            Toast.show({
                'type':'success',
                props:{
                    title:'Opération réussie!',
                    description:res.data.message,
                }
            }); 
            await GetUserInfoAction();
            store.dispatch({type:IS_LOADING, value:false});
            navigation.navigate(' ');
        }else if(res.data.status === 408){
            setTimeout(() => paymentTerminate(postdata, timercheckstatus), checkstatusruntime);
        }else if(res.data.status === 500){
            store.dispatch({type:IS_LOADING, value:false});
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:res.data.message,
                }
            }); 
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

/**
 * 
 * @param {*} postdata 
 */
export const ServiceListAction = (postdata) => {
    store.dispatch({type:IS_LOADING, value:true});
    axiosClient.get(`${BASE_URL}/api/service-list?token=${postdata}`)
    .then( async (res) => {
        if(res.data.status === 200){
            const result = res.data.result; 
            store.dispatch({type:SERVICE_LIST, value:result});
            store.dispatch({type:IS_LOADING, value:false});
        }else{
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:res.data.message,
                }
            }); 
        }
    })
    .catch((error) => {
        Toast.show({
            'type':'info',
            props:{
                title:'Connexion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        }); 
        store.dispatch({type:IS_LOADING, value:false});
    })
}

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
