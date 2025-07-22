import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const supportstyle = StyleSheet.create({

    container:{
        backgroundColor:'#fff',
    },
    container2: {
        backgroundColor: '#F5F5F5',
    },
    container3:{
        backgroundColor:'#fff',
        borderRadius:30,
        height: 150,
        marginTop:15
    },
    scrollContainer: {
        padding: 20,
    },
    Text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 15,
    },

    Text1:{
        fontSize: 18,
        color: '#000',
        marginVertical: 15,
        marginHorizontal:25
    },
    icons:{
        position: 'absolute',
        left:15,
        top:8,
        zIndex:999
      },
    btnsubmit:{
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
    textbtnsubmit:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        width:'100%',
    },

    //Style Modal Create Ticket
    modalContainer:{
        backgroundColor:'#eee',
        flex:1
    },
    loginbox:{
        height:'auto',
        marginTop:30,
        width:'85%',
        padding:20,
        left:30,
        backgroundColor:'#1B497D',
        borderRadius:20,
        flex:1
    },
    entetelogin:{
        fontSize:16,
        color:'#000',
        marginBottom:2,
        marginTop:20,
        lineHeight:30
    },
    entetelogin1:{
        fontSize:20,
        color:'#000',
        marginTop:10,
        textAlign:'center',
        paddingTop:10,
        marginBottom:2

    },
    inputtextlogin:{
        textAlign:'center',
        backgroundColor: 'rgba(255, 250, 255, .99)',
        fontSize:14,
        borderWidth:1,
        borderColor:'#1B497D',
        color:'#000',
        borderRadius:30,
        paddingBottom:8,
    },
    select:{
        
    },
   image:{
    borderRadius:20,
    marginTop:20,
   },
   textbtnsubmit:{
    fontSize:20,
    color:'#fff',
    left:30,
    paddingTop:5,
    
   },
     btn:{
        borderRadius:30,
        backgroundColor:"#1B497D",
        borderColor:'#fff',
        borderWidth:1,
        paddRingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingight:20,
        width:200,
        left:90
    },
    footerlogin:{
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    icon:{
        position: 'absolute',
        left:130,
        top:8,
        zIndex:999,
       

      },
})