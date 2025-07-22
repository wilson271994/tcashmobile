import axios from 'axios';
import { store } from '../store';
import {BASE_URL, SERVER_KEY, headerRequest} from '../../api/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { 
    AUTH_ERROR_MESSAGE,
    IS_AUTHENTICATED, 
    IS_AUTH_ERROR, 
    IS_HEADER, IS_LOADING, 
    IS_NETWORK, 
    USER_INFOS, 
} from './types'; 

//Global Constantes
const TIMEOUT = 8000;
const LIMIT_LIST = 10;
let IS_REQUEST_ACTIVE = false;
let isConnected = store.getState().alert.is_network;

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
    store.dispatch({type:IS_HEADER, value:data});
}

/**
 * Check If Auth Persist
 */
export const checkAuthDataAction = async () => {
    const infoUser = await AsyncStorage.getItem('infoUser');  
    if(infoUser){
        store.dispatch({type:IS_AUTHENTICATED, value:true});
        store.dispatch({type:USER_INFOS, value:JSON.parse(infoUser).user_data});
    }
}

/**
 * Manage Authentication action
 */
export const LoginAction = (postdata) => {
    if(isConnected){
        store.dispatch({type:IS_LOADING, value:true});
        let bodyFormData = new FormData();
        bodyFormData.append('server_key', SERVER_KEY);
        bodyFormData.append('username', postdata.username);
        bodyFormData.append('password', postdata.password);
        axiosClient.post(`${BASE_URL}api/auth`, bodyFormData)
        .then( async (res) => {
            if(res.data.api_status === 200){
                await store.dispatch({type:IS_NETWORK, value:true});
            }else{
                if(res.data.errors.error_id === 4){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Nom d\'utilisateur introuvable!'});
                }
                if(res.data.errors.error_id === 5){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Mot de passe incorrect!'});
                }
                if(res.data.errors.error_id === 5){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Votre compte est inactif, Consultez votre boite email et cliquer sur le lien qui vous a été envoyé!'});
                }
            }
        })
        .catch((error) => {
            Toast.show({
                'type':'info',
                props:{
                    title:'Connxion internet!',
                    description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
                }
            });
            store.dispatch({type:IS_LOADING, value:false});
            console.log('error', error)
        }) 
    }else{
        Toast.show({
            'type':'info',
            props:{
                title:'Connxion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        });
        store.dispatch({type:IS_LOADING, value:false});
    }
   
}


/**
 * 
 * @param {*} postdata 
 * Create Account
 */
export const SignupAction = (postdata) => {
    if(isConnected){
        store.dispatch({type:IS_LOADING, value:true});
        let bodyFormData = new FormData();
        bodyFormData.append('server_key', SERVER_KEY);
        bodyFormData.append('username', postdata.username);
        bodyFormData.append('password', postdata.password);
        bodyFormData.append('email', postdata.email);
        bodyFormData.append('confirm_password', postdata.confirm_password);
    
        axiosClient.post(`api/create-account`, bodyFormData)
        .then( async (res) => {
            if(res.data.api_status === 200){
                await AsyncStorage.setItem('signupInfo', JSON.stringify(postdata));
                store.dispatch({type:IS_LOADING, value:false});
                store.dispatch({type:PAGE_TITLE, value:'Active votre Compte'})
                postdata.navigation.navigate('Activation');
            }else{
                if(res.data.errors.error_id === 7){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Un compte à déjà été créer avec cette adresse Email, essayez une autre adresse!'});
                    store.dispatch({type:IS_LOADING, value:false});
                }
                if(res.data.errors.error_id === 11){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Une erreur est survenue lors de l\'envoie du code de vérification veuillez essayer à nouveau!'});
                    store.dispatch({type:IS_LOADING, value:false});
                }
                if(res.data.errors.error_id === 4){
                    store.dispatch({type:IS_AUTH_ERROR, value:true});
                    store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Ce nom d\'utilisateur est déjà pris veuillez choisir une autre!'});
                    store.dispatch({type:IS_LOADING, value:false});
                }
            }
        })
        .catch((error) => {
            Toast.show({
                'type':'info',
                props:{
                    title:'Connxion internet!',
                    description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
                }
            });
            store.dispatch({type:IS_LOADING, value:false});
            console.log('error', error)
        })
    }else{
        Toast.show({
            'type':'info',
            props:{
                title:'Connxion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        });
        store.dispatch({type:IS_LOADING, value:false});
    }
}

/**
 * 
 * @param {*} postdata 
 * Activate Account
 */
export const AccountActivationAction = (postdata) => {
    if(isConnected){
        store.dispatch({type:IS_LOADING, value:true});
        let bodyFormData = new FormData();
        bodyFormData.append('server_key', SERVER_KEY);
        bodyFormData.append('email', postdata.email);
        bodyFormData.append('code', postdata.code);
    
        axiosClient.post(`api/validation_user`, bodyFormData)
        .then( async (res) => {
            if(res.data.api_status === 200){
                postdata.navigation.navigate(' ');
            }
        })
        .catch((error) => {
            Toast.show({
                'type':'info',
                props:{
                    title:'Connxion internet!',
                    description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
                }
            });
            store.dispatch({type:IS_LOADING, value:false});
            console.log('error', error)
        })
    }else{
        Toast.show({
            'type':'info',
            props:{
                title:'Connxion internet!',
                description:'Votre débit internet est instable. Vérifiez votre connectivité et reéssayer',
            }
        });
        store.dispatch({type:IS_LOADING, value:false});
    }
}