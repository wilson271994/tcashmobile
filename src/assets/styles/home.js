import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const homestyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff', 
        flex:1,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginTop:40
    },
    container_pp:{
        width:'20%'
    },
    pp_user: {
        width:65,
        height:65,
        left: 6,
        top: 4,
        backgroundColor:'#fff',
        borderRadius:50
    },
    containerusername:{
        width:'50%',
        marginTop:10
    },
    containernotif:{
        width:'15%'
    },
    comtainersupport:{
        width:'15%'
    },
    UserText:{
        color: '#fff',
        marginLeft:10
    },
    verifiedtext:{
        color: '#fff',
        fontSize: 15,
    },
    conatinerverifystatus:{
        flexDirection:'row',
        marginTop:5
    },
    verified:{
        height: 20,
        width: 20,
        marginTop:2,
        marginRight:5,
        marginLeft:10
    },
    notificationlogo:{
        width:30,
        height:30
    },
    supportlogo:{
        width:30,
        height:30
    },

    //home wallet balance
    walletContainer: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '90%',
        height: 100,
        backgroundColor: '#5eb3a5',
        elevation: 50,
        borderWidth: 1,
        borderTopColor: 'rgba(109, 202, 187, 1.0)', // Blanc semi-transparent
        borderLeftColor: 'rgba(109, 202, 187, 1.0)',
        borderBottomColor: 'rgba(0, 0, 0, 0.4)', // Noir semi-transparent
        borderRightColor: 'rgba(109, 202, 187, 1.0)',
        borderRadius:10,
        marginLeft:15,
        flexDirection:'row'
    },
    walletamountcontainer:{
        width:'60%',
        marginTop:15
    },
    walletTitleText: {
        position: 'absolute',
        color: '#fff',
        fontSize: 20,
    },
    walletAmount: {
        color: '#fff',
        fontSize: 30,
        marginTop:30
    },
    containerlogotcash:{
        width:'20%',
    },
    tcashlogo:{
        width:30,
        height:30,
        marginLeft:15,
        marginTop:10
    },
    containerwalleteye:{
        width:'20%',
    },
    walleteye:{
        width:20,
        height:20,
        shadowColor: '#000',
        marginLeft:30,
        marginTop:10
    },

    //Principal Service style
    containerprincipalservice:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        marginLeft:20,
        marginRight:30,
        height:150,
        padding:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    walletservicebtn:{
        width:'33%',
        height:100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor: '#5eb3a5',
        elevation: 50,
        borderWidth: 1,
        borderTopColor: 'rgba(109, 202, 187, 1.0)', // Blanc semi-transparent
        borderLeftColor: 'rgba(109, 202, 187, 1.0)',
        borderBottomColor: 'rgba(0, 0, 0, 0.4)', // Noir semi-transparent
        borderRightColor: 'rgba(109, 202, 187, 1.0)',
        marginRight:10,
        marginLeft:10
    },
    depositeText:{
        color:'#fff',
        fontSize: 13,
        marginTop:5
    },
    imageservicehome:{
        width:40,
        height:40
    },
    transfertText:{
        color:'white',
        fontSize: 15,

    },

    //Manage recent transaction style
    containerHistoryTransation: {
        flex:1
    },
    transactionItemContainer: {
        padding:20,
    },
    headertitletrans:{
        color:'#666',
        fontSize: 18,
        marginBottom:20
    },
    historytransitem:{
        flexDirection:'row'
    },
    histcovercontainer:{
        width:'20%'
    },
    historycontent:{
        width:'60%'
    },
    historystatus:{
        width:'20%'
    },
    historycover:{
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:10,
    },
    histransamount:{
        color:'#5eb3a5',
        marginTop:5
    },
    histtransauthor:{
        fontSize:13,
        marginTop:5
    },
    histtransstatussuccess:{
        color:'#52954dff',
    },
    histtransstatusfail:{
        color:'#964242ff',
    },
    histtranstime:{
        marginTop:5
    },
    separatoritemhist:{
        borderWidth:0.5,
        borderColor:'#eee',
        marginBottom:10,
        marginTop:10
    },
    emptytransaction:{
        padding:20
    },
    emptytext:{
        fontSize:15
    }

});
