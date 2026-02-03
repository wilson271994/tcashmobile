import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const servicestyle = StyleSheet.create({
    servicecontainer:{
        flex:1
    },
    headerpage:{
        marginTop:10,
        padding:15,
        backgroundColor:'#fff',
        borderRadius:10,
        marginRight:10,
        marginLeft:10,
        marginBottom:10
    },
    titlepage:{
        fontSize:16,
        color:'#000',
        marginBottom:20
    },
    searchtrans:{
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:20,
        height:38,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        flexDirection:'row',
        backgroundColor:'#fff'
    },
    searchtext:{ 
        width:'70%'
    },
    logosearch:{
        width:'30%',
        fontSize:20,
        textAlign:'right'
    },
    emptycard:{
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:5,
        padding:95
    },
    footerlist:{
        paddingVertical: 20,
    },


    //Manage service banner 
    containerbanner:{
        height:200,
    },
    backgroundimagebanner:{
        height:200,
    },

    serviceitem:{
        height:160,  
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:5,
        padding:10,
        width:'45%',
        marginBottom:20,
        marginRight:10,
        marginLeft:9
    },
    servicecovercontainer:{
        width:100,
        height:100,
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center'
    },
    coverserviceitem:{
        width:'100%',
        height:80
    },
    footerserviceitem:{
        marginTop:10
    }
});






