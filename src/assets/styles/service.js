import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const servicestyle = StyleSheet.create({
    servicecontainer:{
        marginTop:50,
    },
    headerservice:{
        flexDirection:'row',
    },
    serviceheaderlogocontainer:{
        width:'40%'
    },
    containerheadertitle:{  
        width:'40%',
        justifyContent:'center'
    },
    serviceheadersearch:{
        width:'20%',
        justifyContent:'center',
    },
    servicelogo:{
        width:120,
        height:50,

    },
    servicelsearchlogo:{
        width:30,
        height:30,
        alignSelf:'center'
    },
    headerservicetitle:{
        fontSize:25,    
    },

    //Manage service banner 
    containerbanner:{
        height:200,
    },
    backgroundimagebanner:{
        height:200,
    },

    //Service List Item
    containerlistservice:{
        marginTop:50,
        padding:10,
    },
    serviceitemlist:{
        backgroundColor:'#000',
    },
    servicelistheader:{
        marginBottom:20
    },
    servlisttitle:{
        fontSize:18
    },
    serviceitem:{
        height:100,
        width:'50%',    
        backgroundColor:'#000',
        marginRight:5
    },
    coverserviceitem:{
        width:100,
        height:100
    }
});






