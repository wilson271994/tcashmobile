import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const paystyle = StyleSheet.create({

    container2: {

        backgroundColor: '#fff',

    },
    backgroundCircle4: {
        width: 45, 
        height: 45, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 102,
        top: 20,
        elevation: 20
       
    },
   
});