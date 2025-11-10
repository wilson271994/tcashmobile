import { cloneElement } from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const transactionstyle = StyleSheet.create({
    containertrans:{
        marginTop:50,
        height:800
    },
    headertrans:{
        flexDirection:'row',
        padding:10,
    },
    containerlogo:{
        width:'30%'
    },
    pagelogo:{
        width:120,
        height:50,
    },
    transcontainertitle:{
        width:'70%',
        justifyContent:'center'
    },
    transpagetitle:{
        textAlign:'center',
        fontSize:25
    },

    //Search area
    searchtrans:{
        padding:5,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:20,
        margin:10,
        paddingLeft:10,
    },
    searchtext:{
        fontSize:16,
        width:'80%'
    },
    logosearch:{
        width:'20%',
        alignSelf:'center',
        textAlign:'center',
        fontSize:25
    },

    //List History area
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
        marginBottom:15,
        marginTop:15
    },
    classicseparator:{
        borderWidth:0.5,
        borderColor:'#eee',
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,
    },
    containeritem:{
        padding:20
    },

    //detail transaction area
    transcontainerdetail:{

    },
    scrollContainer:{

    },
    headertransdetail:{
        flexDirection:'row',
        marginTop:40,
    },
    backbtn:{
        width:'20%',
        marginLeft:10
    },
    backicon:{
        width:40,
        height:40,
    },
    containertitledetail:{
        width:'80',
        justifyContent:'center',
    },
    titledetailpage:{
        textAlign:'center',
        fontSize:20,
        marginRight:10
    },
    detailrubrique:{
        flexDirection:'row',
        marginTop:20
    },
    containerlogotransdetail:{
        width:'30%',
    },
    logotransdetail:{
        width:100,
        height:50,
        alignSelf:'center',
        backgroundColor:'#fff',
        borderRadius:10,
    },
    pricedatetransdetail:{
        width:'70%',
        justifyContent:'center',
        alignItems:'flex-end',
        marginLeft:-20
    },
    pricedetailpage:{
        marginBottom:5,
        fontSize:18
    },
    phonedetailpage:{
        marginBottom:5,
        fontSize:16
    },
    datedetailpage:{
        marginBottom:5,
        fontSize:14
    },


    detailrubrique2:{
        marginTop:20,
        marginBottom:-5,
        padding:15
    },
    rwoitemtitle:{
        fontSize:16,
        marginBottom:10
    },
    rowitem:{
        flexDirection:'row',
        marginBottom:10
    },
    rowitemlabel:{
        fontSize:14,
        width:'50%'
    },
    rowitemvalue:{
        fontSize:14,
        width:'50%',
        textAlign:'right'
    }

});






