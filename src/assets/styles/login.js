import { StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
const { width, height } = Dimensions.get('window');

export const loginstyle = StyleSheet.create({
    blockheaderlogin: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
        position: 'absolute',
        zIndex: 9,
        width: '100%',
        height: 100
    },
    titleloginpage: {
        marginTop: 200,
        zIndex: 999,
        position: 'absolute',
        color: '#fff',
        fontSize: 20,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
        fontFamily: 'FuturaBoldfont',
    },
    logoauth: {
        height: 80,
        width: 100,
        borderRadius: 10,
    },
    headertitlestyle: {
        height: 100,
        backgroundColor: '#1B497D'
    },
    headerstyleloginpage: {
        backgroundColor: '#1F497D',
        height: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
    boxbtnlogin: {
        position: 'absolute',
        bottom: 100,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    btnlogin: {
        borderRadius: 10,
        backgroundColor: '#060064',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    separatorbtn: {
        borderColor: '#fff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    textbtnlogin: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    textbtnsignup: {
        fontSize: 20,
        color: '#060064',
        textAlign: 'center'
    },
    borderwhite: {
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 100,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 40,
        width: 90
    },
    loginformtitle: {
        color: '#000',
        fontSize: 22
    },

    preloadBackgound: {
        flex: 1,
        width: '100%'
    },
    containerPreload: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },

    /**form CSS */
    selectinput: {
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#eee',
        borderWidth: 1,
        paddingBottom: 10,
        borderRadius: 10,
        color: '#000',
    },
    selectinput2: {
        width: '100%',
        backgroundColor: '#fff',
        paddingBottom: 10,
        borderRadius: 10,
        color: '#000',
    },
    selectbtntext: {
        textAlign: 'left',
        color: '#000',
        fontSize: 18,
    },
    angledropdown: {
        fontSize: 18
    },
    loginViewStep1: {
        paddingBottom: 100,
        marginTop: 20
    },
    additionvalidation: {
        paddingTop: 50
    },
    loginalertmodal: {
        margin: 50,
        height: 'auto',
        marginTop: 200,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10
    },
    buttonclosealert: {
        padding: 10,
        backgroundColor: '#060064',
        borderRadius: 10,
        marginBottom: 2
    },
    textbtnalert: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    },
    hearderalert: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    iconalertmodal: {
        fontSize: 30,
        marginRight: 15,
        color: 'red'
    },
    titlealertlogin: {
        fontSize: 23,
    },
    bodyalertmodal: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#eee',
        paddingTop: 25,
        paddingBottom: 25
    },
    bodytextalertmodal: {
        fontSize: 18
    },
    form2block: {
        paddingBottom: 100,
        marginTop: 20
    },
    icondetailpage: {
        fontSize: 25,
    },
    btnbackloginhome: {
        marginLeft: 10,
        width: '100%'
    },
    titlelogin: {
        fontSize: 20,
        color: '#fff',
        paddingTop: 30,
        textAlign: 'center'
    },
    titlesignup: {
        fontSize: 30,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 2,
        fontWeight: '900'
    },
    title: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 2,
        top: -15
    },
    Text: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 20,
        lineHeight: 30,
        transform: [{ translateY: 30 }],
        fontWeight: 'bold',
        left: 5
    },
    Text1: {
        fontSize: 15,
        color: '#FFF',
        marginTop: 20,
        lineHeight: 30,
        transform: [{ translateY: 8 }],
        left: 35
    },
    Text2: {
        color: '#6DCABB',
        fontWeight: 'bold',
        top: 60,
        textAlign: 'center',
        fontSize: 17
    },
    View:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    inputdatesignup: {
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#3e8f81ff',
        paddingTop: 5,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10,
        height: 45
    },
    inputdatetextbtn: {
        fontSize: 16,
        paddingTop: 3
    },
    bloccriterierspass: {
        marginTop: 10,
        marginBottom: 10,
        width: '95%'
    },
    inputtextsignup1: {
        backgroundColor: '#fff',
        fontSize: 16,
        borderWidth: 3,
        borderColor: '#3e8f81ff',
        color: '#000',
        paddingTop: 8,
        width: '100%',
        borderRadius: 10,
        paddingLeft: 10
    },
    footerlogin: {
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: '115%',
        right: 15
    },
    btnsubmit: {
        borderRadius: 10,
        backgroundColor: '#3e8f81ff',
        borderColor: '#fff',
        borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
    },
    textbtnsubmit: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: -5
    },
    textbtnsubmit2: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    lostpassbox: {
        flexDirection: 'row',
        marginTop: 20
    },
    forgetpassfooter: {
        color: '#6cdabb',
        fontSize: 15
    },
    signupfootertext: {
        color: '#000',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
    blockhidepass: {
        position: 'absolute',
        top: 50,
        right: 20
    },
    iconlow: {
        width: 30,
        height: 30,
        top: 25,
        left: 105
    },
    iconlow2: {
        width: 30,
        height: 30,
        left: 155,
        top: -6
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        top: 25
    },
    text1:
    {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        top: 5,
        left: 5
    },
    text2:{
        color: 'white',
        fontSize: 18,
    },
    text3:
    {
        color: "#6dcabb",
        fontSize: 12,
        top: 10,
        textAlign: 'center',
    },
    text4:
    {
        color: 'white',
        fontSize: 15,
        top: 5,
        left: 5
    },
    iconfooterbar: {
        marginTop: 10
    },
    recentaccount: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    pprecentaccount: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    blocqrcode: {
        flexDirection: 'row',
        marginTop: 10,
        alignSelf: 'center',
        width: 200,
        justifyContent: 'center'
    },
    qrcodelogin: {
        height: 70,
        width: 70,
        backgroundColor: '#fff',
        marginLeft: 5
    },
    textscancode: {
        color: '#fff',
        marginTop: 10,
        lineHeight: 25
    },
    footerblocklog: {
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    },
    footertext: {
        color: '#fff'
    },
    footertextitem: {
        color: '#fff',
    },

    //################################### Login style ////////////////////////
    containerlogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 150,
        width: '100%',
        height: height,

    },
    loginheader:{
        marginTop:50,
        alignItems:'center'
    },
    iconlogologin: {
        width: 80,
        height: 80,
    },
    logintitle:{
        fontSize:25,
        marginTop:10,
        color:'#fff'
    },
    loginsubtitle:{
        fontSize:20,
        marginTop:10,
        color:'#fff'
    },
    loginbox: {
        width: '90%',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:10,
        marginTop:-50
    },
    blocinupt: {
        marginBottom:20
    },
    inputlogin: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#eee',
        color: '#000000ff',
        backgroundColor: '#fff',
        paddingBottom: 8,
        borderRadius: 10,
        paddingLeft: 10
    },
    inputloginlabel:{
        marginBottom:10,
        fontSize:17
    },
    signupbtn: {
        position: 'absolute',
        right: 5
    },
    signupbtntext:{
        color:'#6DCABB',
        fontSize:15
    },

    //####################################signup /////////////////////////////
    containersignup: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom: 150,
        width: '100%',
        height: height,
    },
    containerlogo:{
        flexDirection:'row',
        width:'100%'
    },
    closeButton:{
        width:'10%',
        marginTop:20
    },
    closeicon:{
        width:30,
        height:30
    },
    logoiconcont:{
        width:'80%',
        alignItems:'center',
    },
    logocomp: {
        width: 70,
        height: 70,
        marginRight:25
    },
    signupheader:{
        marginTop:20,
        alignItems:'center'
    },
    containerform:{
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:8,
        padding:15,
        marginTop:50,
        width:'90%',
    },
    inputform:{
        borderWidth:1,
        borderColor:'#eee',
        height:50,
        paddingRight:10,
        paddingLeft:10
    },
    label:{
        fontSize:15,
        color:'#666',
        marginBottom:10,
        marginTop:10
    },
    containercondition: {
        flexDirection: 'row',
        padding: 10,
    },
    checkbtn: {
        borderColor: '#3e8f81ff',
        borderWidth: 2,
        width: 20,
        height: 20,
        marginTop: 10,
        padding: 2
    },
    conditiontext: {
        color: '#000',
        fontSize: 16,
        marginLeft: 10,
        width:'90%'
    },
    conditioncontainer: {
        flexDirection: "row",
    },
    conditionlink: {
        color: 'orange',
        fontSize: 16,
        marginBottom: -3,
    },
    checkicon: {
        color: 'orange',
        fontSize: 12,
    },
    submitButton:{
        backgroundColor:'#6DCABB',
        padding:10,
        borderRadius:5,
        marginTop:10
    },
    submitBtnText:{
        color:'#fff',
        textAlign:'center',
        fontSize:15
    },
    passwordinput:{
        flexDirection:'row',
        alignItems:'center'
    },
    inputformpass:{
        width:'83%' 
    },
    passwordhidebtn:{
        width:'15%',
        backgroundColor:'#eee',
        padding:13,
        marginLeft:5,
        borderRadius:10
    },
    iconhidepasssiginup: {
        color: '#b1b1b1',
        fontSize: 20,
    },

    //#############################Activation Form #######################
    containeractivationform:{
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowOpacity: 0.6,
        backgroundColor:"#fff",
        elevation: 2,
        borderRadius:8,
        padding:15,
        width:'90%',
    },
    logoiconcontactivation:{
        width:'100%',
        alignItems:'center',
        marginLeft:30
    },
    activationheader:{
        marginTop:50,
        alignItems:'center',
    },
    activationsubtitle:{
        fontSize:16,
        marginTop:10,
        color:'#666',
        marginBottom:20,
        lineHeight:22
    },
    resentcodecont:{
        marginTop:20,
        alignItems:'center'
    },
    resendLink:{
        marginTop:10
    },
    resendText:{
        color:'#6DCABB',
    },


    //##########################Copyrigth
    copyrihtcontainer:{
        position:'absolute',
        padding:10,
        bottom:50,
        width:'100%',
        alignItems:'center'
    },
    copyrtext:{
        fontSize:15
    },
    partdevbtn:{
        marginTop:5
    },
        iconStyle: {
        width: 20,
        height: 20,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    itemTextStyle: {
        fontSize: 16,
        marginTop: -10,
        marginBottom: -10,
        color: '#000'
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#b1b1b1',
        textAlign: 'center',
    },
    dropdownicon: {
        marginLeft: 8,
        fontSize: 25,
        color: '#b1b1b1',
    },
    containeritemdrop: {
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderRadius: 10,
    },
});