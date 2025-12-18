import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const profilstyle = StyleSheet.create({
    container2: {
        backgroundColor: '#F5F5F5',

    },
    scrollContainer: {
        padding: 20,
    },
    containerSettings:{
        backgroundColor:'#fff',
        borderRadius:15,
        top: 20,
    },

    containerName:{
        backgroundColor:'#fff',
        borderRadius:30,
        height:50,
        top: 25

    },
    logoutContainer:{
        marginBottom : 50,
        justifyContent: 'center',
        textAlign: 'center',
        transform: [{ translateY: 45}]
    },
    image:{
        width: 100, 
        height: 100,
        left:125,
    },
    sectionTitle1:{
        left:115,
        top:7,
        fontWeight:'bold'  
    },
    switch:{
       right:5,
    
    },
    icon:{
        position: 'relative',
        left:19,
        top:14,
        height:22,
        width:22
      },
    icons:{
        position: 'relative',
        left:4,
        top:10,
        height:22,
        width:22
      },
    icons1:{
      position: 'relative',
      left:5,
      top:19,
      height:22,
      width:22
    },   
    icons4:{
        position: 'relative',
        left:5,
        top:2,
        height:22,
        width:22
      },   
    icon2:{
        position: 'relative',
        left:22,
        top:21,
        height:22,
        width:22
      },
    sectionTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        top:23,
        left:15,
        marginVertical: 15,
    },
    searchcontainer:{
        flexDirection:'row',
        padding:10,
        width:'100%',
        flex: 1,
    },
    language:{
        width: '100%',
        flex: 1,
    },
    notif:{      
        color: '#000',
       width: '100%',
       left:45,
       top:2,
    },
    notif4:{      
       color: '#000',
       width: '100%',
       left:25,
       top:2,
    },
    notif1:{      
       color: '#000',
       width: '100%',
       left:55,
    },
    out:{      
        color: '#ff0000ff',
        alignSelf: 'center',
        fontSize: 16
    },
    notif2:{      
       color: '#000',
       left:55,
       position:'absolute',
       top:15
    },
    notif3:{      
        color: '#000',
       width: '100%',
       left:17,
       top:10,
    },
    pay:{      
        color: '#000',
       width: '100%',
       left:45,
       
    },
    picker:{
        color:'#666',

    },
    searchcontainer:{
        flexDirection:'row',
        width:'80%',
        padding:20
        
    },
});