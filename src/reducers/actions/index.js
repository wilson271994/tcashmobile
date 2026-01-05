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
    SET_HOME_PAGE,
    SET_PROFIL_PAGE,
    SET_SERVICE_PAGE,
    SET_TRANSACTION_PAGE,
    TRANSACTION_FEES,
    USER_INFOS,
    USER_LIST,
    USER_TOKEN,
} from './types';

//Global Constantes
const TIMEOUT = 8000;
const LIMIT_LIST = 10;
let IS_REQUEST_ACTIVE = false;
//SET AXIOS 
const axiosClient = axios.create();
axiosClient.defaults.baseURL = BASE_URL;
axiosClient.defaults.headers = headerRequest.headers;
axiosClient.defaults.onUploadProgress = headerRequest.onUploadProgress;
axiosClient.defaults.onDownloadProgress = headerRequest.onUploadProgress;
axiosClient.defaults.timeout = 2000;
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
    }
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

export const LogoutActiion = (postdata) => {
    store.dispatch({ type: IS_LOADING, value: true });
    axiosClient.post(`${BASE_URL}/api/logout`, postdata)
        .then(async (res) => {
            const result = res.data;
            if (result.status === 200) {
                await store.dispatch({ type: USER_TOKEN, value: '' });
                await store.dispatch({ type: USER_INFOS, value: {} });
                await AsyncStorage.removeItem('infoUser');
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
 * 
 * @param {*} postdata 
 * Create Account
 */
export const SignupAction = (postdata) => {
    const payload = JSON.stringify(postdata)
    store.dispatch({ type: IS_LOADING, value: true})
    axiosClient.post(`${BASE_URL}/api/signup`, payload)
    .then(async (res) => {
        const result = res.data;
        console.log(result, 'result')
        if(result.status === 200) {
            store.dispatch({ type: IS_LOADING, value: false });
            console.log(result)
            console.log(postdata.navigation)
            Toast.show({
                'type': 'success',
                props: {
                    title: 'Compte crée avec succès',
                    description: 'Success',
                }
            });
            postdata.navigation.navigate("Activation")
        } else if (result.status === 500) {
            store.dispatch({ type : IS_LOADING, value: false })
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur s\'est produite',
                    description: result.message,
                }
            });
            console.log('Je suis laaaaaaaaaaaaaaaaaaaaa')
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
                await AsyncStorage.setItem('infoUser', USER_INFOS);
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
