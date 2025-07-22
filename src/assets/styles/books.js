import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const bookstyle = StyleSheet.create({
    container:{
        backgroundColor:'#f5f5f5',
        marginTop:5
    },
    container2: {
        backgroundColor: '#F5F5F5',
    }, 
    containerbanner: {
        backgroundColor: '#F5F5F5',
        flex:1
    },
    header:{
        flexDirection:'row',
        padding:10,
        width:'100%'
    },
    logo2: {
        width:60,
        height:60,
        
    },
    notification:{
        width:40,
        height:40,
        position: 'absolute',
        right:10,
        top:10
    },
    headeritemright:{
        width:'83.9%'
    },
    scrollContainer: {
        padding: 20,
    },
    bookContainer:{
        marginTop: 10,
        marginRight: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    bookList: {
        marginTop: 10,
    },
    bookItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    bookDetails: {
        flex: 1,
        marginLeft: 10,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    bookDescription: {
        fontSize: 14,
        color: '#777',
    },
    readButton: {
        backgroundColor: '#4A90E2',
        padding: 5,
        borderRadius: 5,
    },
    readButtonText: {
        color: '#fff',
        fontSize: 14,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },

    // booklist 
    gridcontainer:{
        marginBottom:70
    },
    booklistpage:{
        height:'auto',
        borderWidth:1,
        borderColor:'#eee',
        borderRadius:10
    },
    infobookcontainer:{
        padding:10,
    },
    coverbook:{
        maxHeight:150,
        minHeight:150,
        width:'100%',
        resizeMode:'cover',
        borderRadius: 10

    },
    bookname:{
        fontSize:16,
        color:'#000',
        paddingTop:5,
        paddingBottom:5
    },
    createtime:{
        fontSize:16,
        color:'#666',
    },
    otherinfo:{
        color:'#666',
        fontSize:16
    },
    btndetail:{
        padding:5,
        width:'90%',
        backgroundColor:'#2e27a5',
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    optionblog:{
        padding:5,
        width:'90%',
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    icondetail:{
        fontSize:16,
        color:'#fff',
        marginTop:5,
        marginRight:10,
    },
    iconoption:{
        fontSize:20,
        color:'#666',
        marginTop:5,
        marginLeft:10
    },
    textbtndetail:{
        color:'#fff',
        fontSize:14,
        textAlign:'center',
        paddingTop:5
    },
    textbtnoption:{
        color:'#666',
        fontSize:16,
        textAlign:'center',
    },
    iconstatblog:{
        fontSize:16,
        color:'#eee',
        marginBottom:10
    },
    statbook:{
        position:'absolute',
        top:10,
        right:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:10,
        borderRadius:10
    },
    textstatblog:{
        fontSize:16,
        color:'#eee',
        textAlign:'center',
        marginBottom:-5
    },

    //Product Item List
    footerbook:{
        padding:5,
        borderTopWidth:0.5,
        borderTopColor:'#eee'
    },
    blocitemfooter:{
        flexDirection:'row',
        marginBottom:-5 
    },
    iconfooter:{
        fontSize:16,
        color:'#000',
        marginRight:5,
        paddingTop:10 
    },
    textfooter:{
        fontSize:14,
        color:'#000',
        paddingTop:8
    },
    covercontainer:{
    },
    textprice:{
        fontSize:18,
        color:'#ECB817',
        textAlign:'left'
    },

    //core book banner
    containerbanner:{
        height:180,
    },
    bannerchild:{
        height:180,
    },
    backgroundimagebanner:{
        resizeMode:'cover',
        height:180,
    },
    navigationbanner:{
        height:180
    },
    //book details
   
    container3: {
        backgroundColor: '#FFF',
        marginTop:15,
        width: 'auto'
    },
    promoContainer: {
        marginTop: 30,
        borderRadius: 15,
        width: '90%',
        left:20,
        overflow: 'hidden',
    },
    promoImage: {
        width: '100%',
        height: 150,
    },
    Title: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        color: '#000',
        textAlign:'center',
        marginTop: 15
    },
    autor: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
        textAlign:'center',
        marginTop: 5,
        
    },
    Description: {
        fontSize: 14,
        color: '#777',
        marginTop: 5,
        left:10
    },
    btn:{
        padding:5,
        width:'70%',
        left:45,
        backgroundColor:'#2e27a5',
        margin:10,
        top:520,
       paddingBottom:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        position: 'absolute'
    },
});