import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import {store} from './src/reducers/store';
import {StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import { ToastConfig } from './src/assets/utils/toastCustom';
import BottomNavigator from './src/navigations/bottomtab/BottomNavigator';

export default App = () => {
    const [loading, setLoading] = useState(true); 
    useEffect(() => { 
        setTimeout(() => {
        SplashScreen.hide();   
        setLoading(false);   
        }, 2000); 
    }, []);

    return (
        <Provider store={store}> 
            <NavigationContainer>
                <StatusBar backgroundColor="#6dcabb" />
                <BottomNavigator />
                <Toast
                    position='top'
                    topOffset={0}
                    config={ToastConfig}
                />
            </NavigationContainer>
        </Provider>
    );

}