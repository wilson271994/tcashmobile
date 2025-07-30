import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const filterstyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderRadius:30,

    },
    scrollContainer: {
        padding: 20,
    },
    container2: {
        backgroundColor: '#F5F5F5',
    },
    Text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 15,
    },
    cadre:{
        
    },
   
    picker:{
        color:'#666',
       

    },

    footerlogin:{
        justifyContent:'center',
        marginTop:20,
        marginBottom:20,
        padding: 10,

    },
    btnsubmit:{
        borderRadius:30,
        backgroundColor:"#1B497D" ,
        borderColor:'#fff',
        borderWidth:1,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        width:'100%',
    },
    textbtnsubmit:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',        
    },
});