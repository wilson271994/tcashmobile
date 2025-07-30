import {StyleSheet, Dimensions} from 'react-native';
import { Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
const {width, height} = Dimensions.get('window');

export const filestyle = StyleSheet.create({
    container:{
        backgroundColor:'#F5F5F5',
        marginTop:5
    },
    container2: {
        backgroundColor: '#F5F5F5',
    }, 
    container3: {
        backgroundColor: '#FFF',
        marginTop:15,
        width: 'auto'
    },
    container4:{
        backgroundColor:'#fff',
        borderRadius:30,
        height: 80,
        marginTop:15,
        margin:10
    },
    
    Text: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        color: '#000',
        textAlign:'center',
        marginTop: 15,   
    },
    Title: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        color: '#000',
        textAlign:'center',
        marginTop: 1,
        left:12   
    },
    icons:{
        position: 'absolute',
        left:15,
        top:8,
        zIndex:999
      },
    btn:{
        borderRadius:30,
        backgroundColor:'#ECB817' ,
        borderColor:'#fff',
        borderWidth:1,
        width:60,
        height:50,
        position:'absolute',
        bottom:10,
        right:10
    },
    searchcontainer:{
        flexDirection:'row',
        width:'80%',
        padding:20
        
    },
    notif4:{      
        color: '#000',
        width: '100%',
        left:25,
        top:2,
     },
     icons4:{
        position: 'relative',
        left:1,
        marginTop:-18,
        borderRadius:20,
        height:75,
        width:100     
      }, 
      readButton: {
        backgroundColor: '#4A90E2',
        padding: 5,
        left:100,
        width:60,
        height:40,
        marginTop:-1,
        borderRadius: 10,
    },
    readButtonText: {
        color: '#fff',
        fontSize: 14,
        textAlign:'center',
        top:5
    },
});