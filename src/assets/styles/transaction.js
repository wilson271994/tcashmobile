import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const transactionstyle = StyleSheet.create({
    containertrans:{
        flex:1,
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
    historytransitem:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
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
        marginBottom:5
    },
    histcovercontainer:{
        width:'25%',
    },
    historycover:{
        width:50,
        height:50
    },
    historycontent:{
        width:'50%'
    },
    historystatus:{
        width:'25%'
    },
    histtranstype:{
        fontSize:14,
        marginBottom:5
    },
    histransamount:{
        color:'#9d1d06',
        marginBottom:5
    },
    histtransstatusfail:{
        color:'#9d1d06',
    },
    histtransstatussuccess:{
        color:'#069d1a',
    },
    histtransauthor:{
        fontSize:13
    },
    separatoritemhist:{
        borderWidth:0.5,
        borderColor:'#eee',
        marginTop:5,
        marginBottom:5,
        marginRight:15,
        marginLeft:15
    },
    footerlist:{
        paddingVertical: 20,
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
        padding:50,
        marginLeft:10,
        marginRight:10
    },
    emptylisttext:{
        textAlign:'center'
    },
    
    // Detail Transaction page
    containerdetail:{
        padding:20
    },
    headertransdetail:{
        flexDirection:'row',
        marginTop:10
    },
    backbtn:{
        width:'10%'
    },
    backicon:{
        width:30,
        height:30
    },
    containertitledetail:{
        width:'70%',
        alignItems:'center',
        padding:10
    },
    titledetailpage:{
        textAlign:'center',
        fontSize:16
    },
    detailrubrique:{
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderBottomColor:'#eee'
    },
    containerlogotransdetail:{
        width:'20%',
        alignItems:'center'
    },
    logotransdetail:{
        width:50,
        height:50,
        marginTop:20,
        borderRadius:10
    },
    pricedatetransdetail:{
        width:'70%',
        alignItems:'flex-end',
        marginTop:20
    },
    pricedetailpage:{
        marginBottom:5
    },
    phonedetailpage:{
        marginBottom:5
    },
    datedetailpage:{
        marginBottom:5
    },
    detailrubrique2:{
        marginTop:20
    },
    rwoitemtitle:{
        fontSize:15,
        marginBottom:5
    },
    rowitem:{
        flexDirection:'row',
        marginBottom:10
    },
    rowitemlabel:{
        width:'50%'
    },
    rowitemvalue:{

    },

    // Operation style
    scroolviecontainer:{
        width:'100%',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:100,
    },
    headerform:{
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:5,
        padding:15,
        alignItems:'center'
    },
    closeButton:{
        marginRight:10
    },
    closeicon:{
        width:25,
        height:25
    },
    titleheader:{
        fontSize:16
    },
    formcontainer:{
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:5,
        marginTop:10,
        padding:15
    },
    formitem:{
        marginBottom:10
    },
    label:{
        fontSize:15,
        color:'#666',
        marginBottom:10,
        marginTop:10
    },
    inputContainer:{
        width:'100%',
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:5,
        padding:10,
        height:45
    },
    placeholderStyle:{
        color:'#999'
    },
    inputsearchstyle:{
        color:'#999',
        fontSize:14
    },
    currency: {
        fontSize: 18,
        color: '#888',
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',

    },
    gratuitText: {
        fontSize: 16,
        color: '#888',
    },
    visibilityToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    visibilityText: {
        color: '#888',
        fontSize: 14,
    },
    eyeIcon: {
        marginLeft: 5,
        fontSize: 16,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
    },
    paymentLogo: {
        width: 40,
        height: 40,
        marginRight: 15,
    },
    paymentInfo: {
        flex: 1,
    },
    paymentNumber: {
        fontSize: 16,
        color: '#333',
    },
    paymentProvider: {
        fontSize: 14,
        color: '#888',
    },
    changeButton: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    changeText: {
        color: '#6dcabb',
        fontWeight: 'bold',
    },
    radioGroup: {
        marginTop: 10,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        padding: 5,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    radioOptionSelected: {
        borderColor: '#5eb3a5',
    },
    radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#5eb3a5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginTop: 5,
    },
    radioDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#6dcabb',
    },
    radioContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    radioLogo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    radioTitle: {
        fontWeight: 'bold',
        color: '#333',
        marginTop:5
    },
    submitButton:{
        backgroundColor:'#6DCABB',
        padding:10,
        borderRadius:5,
        marginTop:20
    },
    submitBtnText:{
        color:'#fff',
        textAlign:'center',
        fontSize:15
    },

    recapcontainer:{
        borderWidth:1,
        borderColor:'#eee',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:5
    },
    recaptitle:{
        fontSize:15,
        marginBottom:10
    },
    containeritemrecap:{
        flexDirection:'row',
        marginBottom:10
    },
    itemrecap:{
        width:'50%'
    },
    labelrecap:{
        fontSize:14
    },
    valuerecap:{
        textAlign:'right',
        fontSize:14
    }
});
