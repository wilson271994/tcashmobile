import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const loginstyle = StyleSheet.create({
    blockheaderlogin:{
        paddingLeft:50,
        paddingRight:50,
        paddingTop:20,
        position:'absolute',
        zIndex:9,
        width:'100%',
        height:100
    },
    titleloginpage:{
        marginTop:200,
        zIndex:999,
        position:'absolute',
        color:'#fff',
        fontSize:20,
        paddingLeft:50,
        paddingRight:50,
        textAlign:'center',
        fontFamily:'FuturaBoldfont',
    },
    logoauth:{
        height          : 80,
        width           : 100,
        borderRadius    : 10,
    },
    headertitlestyle:{
        height : 100,
        backgroundColor:'#1B497D'
    },
    headerstyleloginpage:{
        backgroundColor:'#1F497D', 
        height:100, 
        borderBottomLeftRadius:15, 
        borderBottomRightRadius:15,
    },
    itemslider:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#6dcabb',
        justifyContent: 'space-around',
        paddingBottom: 150,
        top: 100
    },
    itemslidersignup:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#fff',
        justifyContent: 'space-around',
        paddingBottom: 150,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxbtnlogin:{
        position:'absolute',
        bottom:100,
        justifyContent:'center',
        flexDirection:'row',
        width:'100%'
    },
    btnlogin:{
        borderRadius:10,
        backgroundColor:'#060064',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
    },
    separatorbtn:{
        borderColor:'#fff',
        borderWidth:1,
        marginLeft:5,
        marginRight:5
    },
    textbtnlogin:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    }, 
    textbtnsignup:{
        fontSize:20,
        color:'#060064',
        textAlign:'center'
    },
    borderwhite:{
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:100,
        marginTop:20,
        marginBottom:20,
        marginLeft:40,
        marginRight:40,
        width:90
    },
    loginformtitle:{
        color:'#000',
        fontSize:22
    },
    containerSignup:{
        flex:1,
        
    },
    containerPreload:{
        flex: 1,
    alignItems: 'center', 
    paddingTop: 20
    },

    /**form CSS */
    selectinput:{
        width:'100%',
        backgroundColor:'#fff',
        borderColor:'#eee',
        borderWidth:1,
        paddingBottom:10,
        borderRadius:10,
        color:'#000',
    }, 
    selectinput2:{
        width:'100%',
        backgroundColor:'#fff',
        paddingBottom:10,
        borderRadius:10,
        color:'#000',
    }, 
    selectbtntext:{
        textAlign:'left',
        color:'#000',
        fontSize:18,
    },
    angledropdown:{
        fontSize:18
    },
    loginViewStep1:{
        paddingBottom:100,
        marginTop:20
    },
    additionvalidation:{
        paddingTop:50
    },
    loginalertmodal:{
        margin:50,
        height:'auto',
        marginTop:200,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10
    },
    buttonclosealert:{
        padding:10,
        backgroundColor:'#060064',
        borderRadius:10,
        marginBottom:2
    },
    textbtnalert:{
        fontSize:18,
        color:'#fff',
        textAlign:'center'
    },
    hearderalert:{
        flexDirection:'row',
        paddingBottom:10
    },
    iconalertmodal:{
        fontSize:30,
        marginRight:15,
        color:'red'
    },
    titlealertlogin:{
        fontSize:23,
    },
    bodyalertmodal:{
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:'#eee',
        paddingTop:25,
        paddingBottom:25
    },
    bodytextalertmodal:{
        fontSize:18
    },
    form2block:{
        paddingBottom:100,
        marginTop:20
    },
    icondetailpage:{
        fontSize:25,
    },
    btnbackloginhome:{
        marginLeft:10,
        width:'100%'
    },
    titlelogin:{
        fontSize:20,
        color:'#fff',
        paddingTop:30,
        textAlign:'center'
    },
    titlesignup:{
        fontSize:20,
        color:'#fff',
        marginTop:10,
        textAlign:'center',
        paddingTop:10,
        marginBottom:2
    },
    entetelogin:{
        fontSize:16,
        color:'#000',
        marginBottom:2,
        marginTop:20,
        lineHeight:30
    },
   subtitlelogin:{
        fontSize:16,
        color:'#fff',
        marginBottom:2,
        marginTop:20,
        lineHeight:30
    },
    subtitlecolor:{
        fontSize:16,
        color:'orange',
        marginBottom:20,
        marginTop:20
    },
    loginbox:{
        height:'auto',
        marginTop:30,
        width:'85%',
        padding:20,
        backgroundColor:'rgba(255, 250, 255, .99)',
        borderRadius:20,
        flex:1
    },
    inputtextlogin:{
        textAlign:'center',
        backgroundColor: '#1B497D',
        fontSize:18,
        borderWidth:1,
        borderColor:'#1B497D',
        color:'#fff',
        borderRadius:30,
        paddingBottom:8,
    },
    inputtextsignup:{
        textAlign:'center',
        backgroundColor: '#1B497D',
        fontSize:18,
        borderWidth:1,
        borderColor:'#1B497D',
        color:'#fff',
        borderRadius:30,
        paddingTop:10,
        width:'95%'
    },
    iconloginuser:{
        color:'#fff',
        position:'absolute',
        top:10,
        left:15,
        fontSize:25,
        zIndex:999
    },
    iconsignupuser:{
        color:'#fff',
        position:'absolute',
        top:15,
        left:15,
        fontSize:25,
        zIndex:999
    },
    footerlogin:{
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    btnsubmit:{
        borderRadius:30,
        backgroundColor:'#ECB818',
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
        color:'#000',
        textAlign:'center',
        paddingTop:5,
        
    },
    lostpassbox:{
        flexDirection:'row',
        marginTop:20
    },
    forgetpassfooter:{
        color:'#ECB817',
        fontSize:15
    },
    signupfooter:{
        position:'absolute',
        right:5
    },
    signupfootertext:{
        color:'#ECB817',
        fontSize:15,
        textDecorationLine:'underline',
    },
    blockhidepass:{
        position:'absolute',
        top:50,
        right:20
    },
    iconhidepass:{
        color:'#fff',
        fontSize:25,
        marginTop:-37
    },
    iconhidepasssiginup:{
        color:'#fff',
        fontSize:25,
        marginTop:-35,
        right:20
    },
    iconfooterbar:{
        marginTop:10
    },
    recentaccount:{
        flexDirection:'row',
        alignSelf:'center'
    },
    pprecentaccount:{
        width:50,
        height:50,
        borderRadius:100
    },
    blocqrcode:{
        flexDirection:'row',
        marginTop:10,
        alignSelf:'center',
        width:200,
        justifyContent:'center'
    },
    qrcodelogin:{
        height:70,
        width:70,
        backgroundColor:'#fff',
        marginLeft:5
    },
    textscancode:{
        color:'#fff',
        marginTop:10,
        lineHeight:25
    },
    footerblocklog:{
        flexDirection:'row',
        marginTop:10,
        marginRight:10,
        marginLeft:10
    },
    footertext:{
        color:'#fff'
    },
    footertextitem:{
        color:'#fff',
    },

    //signup
    containersignup:{
        backgroundColor:'#eee',
        borderRadius:10,
        marginTop:10
    },
    bloccriterierspass:{
        marginTop:10
    },
    passwordcritariers:{
        fontSize:14,
        color:'#000',
    },
    containercondition:{
        flexDirection:'row',
        padding:10,
        marginTop:10
    },

    entetesigup:{
        fontSize:18,
        color:'#000',
        marginBottom:2,
        marginTop:20,
        lineHeight:30,
        position:'relative',
        left:10,
        top:10
    },
    checkbtn:{
        borderColor:'#fff',
        borderWidth:2,
        width:25,
        height:25,
        marginTop:10,
        padding:2
    },
    conditiontext:{
        color:'#000',
        fontSize:16,
        marginLeft:10,
        marginRight:10,
        lineHeight:25
    },
    conditionlink:{
        color:'orange',
        fontSize:16,
        marginBottom:-8
    },
    checkicon:{
        color:'orange',
        fontSize:16,
        marginRight: 5,
    },
    selectcontainer:{
        marginTop:30,
    },
    dropdown: {
        borderColor: '#fff',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        height:50,
        marginLeft:15, 
        marginRight:15
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    selectedTextStyle: {
        fontSize: 16,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#ECB818'
    },
    itemTextStyle:{
        fontSize:16,
        marginTop:-10,
        marginBottom:-10,
        color:'#000'
    },
    placeholderStyle: {
        fontSize: 16,
        color:'#000',
        textAlign:'center',
        
        
    },
    dropdownicon:{
        marginLeft: 8,
        fontSize:25,
        color:'#fff'
    },
    containeritemdrop:{
        backgroundColor:'#ECB818',
        borderColor:'#fff',
        borderRadius:10,
    },
    btnsignup:{
        borderRadius:30,
        backgroundColor:'#ECB818',
        borderColor:'#ECB818',
        borderWidth:1,
        paddingTop:10,
        paddingBottom:10,
        marginLeft:20,
        marginRight:20
    },
    //preload 
    btnspreload:{
        borderRadius:30,
        backgroundColor:'#ECB818',
        borderColor:'#ECB818',
        borderWidth:1,
        position:'relative',
        top:160,
        right:'0%',
       
        zIndex:9999,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
       
    },
    preloadlogo:{
        
        
       
        alignItems: 'center', 
        
       
       
    },

    preloadheaderlogo:{
        height          : 100,
        width           : 100,
        borderRadius    : 30,        
        paddingTop: 20,               
        resizeMode: 'center',

        position:'relative',
        top:20,
       
        zIndex:9999,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
    },

    preloadheaderimage:{
        height          : 300,
        width           : 300,
        borderRadius    : 30,   
                 
        resizeMode: 'contain',

        position:'relative',
        top:110,
            
        zIndex:9999,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
    },

    textpreloadtitle:{
        fontSize:20,
        top:12,
        color:'#000',
        textAlign:'center',
        paddingTop:5,
        fontFamily: 'arial',
        
    },

      textpreload:{
        fontSize:15,
        top:60,
        color:'#000',
        textAlign:'center',
        paddingTop:5,
        fontFamily: 'arial',
        
    },
    preloadimage:{

        alignItems: 'center', 
    },
    iconpreload:{
        fontSize:25,
        marginLeft:5
    },
    footersignup:{
        justifyContent:'center',
        marginTop:20,
        marginBottom:50
    },
    containerpreload:{
        flex:1,
        backgroundColor:'#fff',
    },
    footerpreload:{
    },

    titlepagesignup:{
        fontSize:20,
        color:'#000',
        marginLeft:50,
    },
    blocinupt:{
        marginTop:15,
    },
    blocinupt2:{
        marginTop:15,
        marginLeft:15
    },
    copyriht:{
        width:20,
        height:20
    },


    //secondeform

        containersecondform: {
          flex: 1,
          padding: 20,
          backgroundColor: '#fff',
        },
        label: {
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 5,
        },
        input: {
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        },
        picker: {
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
          marginBottom: 10,
        },
        datePicker: {
          width: '100%',
          marginBottom: 10,
        },
    

    //activation
    containerActivation:{
        flex:1
    },

    footertitle : {
        color : '#fff',
        marginTop:15
    },
    builderlink:{
        color:'#fff',
        marginBottom:-4,
        marginLeft:5,
        textDecorationLine:'underline'
    },
    backstyle:{
        width:40,
        height:40
    }


});