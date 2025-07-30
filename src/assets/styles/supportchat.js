import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const supportchatstyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    container2: {
        backgroundColor: '#F5F5F5',
    },
    container3:{
        backgroundColor:'#fff',
        borderRadius:30,
        height: 60,
        width: '80%',
      
    },
    scrollContainer: {
        padding: 20,
    },
    inputSearch:{
        height: 40,
        width: '80%',
        borderColor: '#ECB817', 
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#1B497D',
        borderWidth: 1,
        marginTop:558,
        flexDirection:'row',
    },
    SearchBar:{
        color:'#fff',
        width:'70%',
    },
    icons:{
        position: 'absolute',
        left:20,
        top:11,
        zIndex:999,
       

      },
      image:{
        position: 'absolute',
        left:270,
        top:10,
        zIndex:999,
      },
    btnsubmit:{
        borderRadius:15,
        backgroundColor:'#ECB817' ,
        borderColor:'#fff',
        borderWidth:1,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        width:60,
        height:45,
        position: 'absolute',
        left:325,
        top:553,
    },
    btnsubmit1:{
       
        backgroundColor:'#ECB817' ,
     
    },
})