import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const paystyle = StyleSheet.create({

    container2: {

        backgroundColor: '#eee',

    },
    scrollContainer:
    {
        flex: 0,
    },
    backgroundCircle4: {
        width: 45, 
        height: 45, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 20,
        top: 75,
        elevation: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        
    },
    iconmenup:{
        width:120,
        height:120,
        left: 130,
        top: -20,
    },   
    price:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 35,
        left: 120,
        top: -50

    },
    phone:{
        color: '#6dcabb',
        fontWeight: 'bold',
        fontSize : 15,
        left: 260,
        top: -50
    },
    date:{
        color:'#b1b1b1',
        fontSize: 15,
        left: 190,
        top: -45
    },
    detail:{
        fontWeight: 'bold',
        color: '#000',
        fontSize: 19,
        left: 30
    },
    view:{
        backgroundColor: '#fff',
        width: 350,
        height: 'auto',
        left: 20,
        top: 10,
        borderRadius: 20,
        marginBottom: 30,
        padding: 10,
        alignItems: 'flex-start'
    },
    state:{
        top: 5,
        left: 10,
        fontSize: 19
    },
    statut:{
      alignSelf: 'flex-end',
        top: -18,
        fontWeight: 'bold',
        fontSize: 13,
        color:'#000',
        textAlignVertical: 'top'
    },
});