import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const homestyle = StyleSheet.create({

    container: {
        flex: 0,
        backgroundColor: '#6DCABB', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        padding: 20,
    },
     container2:{
        flexDirection: 'column',
        backgroundColor: '#6dcabb'
    },
    Container:{
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
     scrollContainer: {
        backgroundColor: '6dcabb',
        flex: 0,
    },
     backgroundCircle: {
        width: 35, 
        height: 35, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 257,
        top: 28
    },
    backgroundCircle6: {
        width: 65, 
        height: 65, 
        borderRadius: 60,
        backgroundColor: '#FFF',
        position: 'absolute', 
        left: 6,
        top: -26,
        elevation: 20
    },
     image1:{
        width: 45,
        height: 45,
        left: 20,
        top: 10
     },
     text:{
        fontWeight: 'bold',
        color: 'black',
        left: 70,
        top: -40   
    },
    text2:{
        fontWeight: 'bold',
        color: 'grey',
        left: 78,
        top: -40   
    },
     text3:{
        fontWeight: 'bold',
        color: 'grey',
        left: 270,
        top: -80   
    },
     text4:{
        fontWeight: 'bold',
        color: 'grey',
        left: 270,
        top: -80,
        fontSize: 12  
    },
     backgroundCircle2: {
        width: 35, 
        height: 35, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 192,
        top: -11
    },
     backgroundCircle3: {
        width: 45, 
        height: 45, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 211,
        top: -11,
        elevation: 20
    },
     backgroundCircle4: {
        width: 45, 
        height: 45, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 102,
        top: 20,
        elevation: 20
       
    },
    backgroundCircle5: {
        width: 50, 
        height: 50, 
        borderRadius: 60,
        backgroundColor: '#66998f',
        position: 'absolute', 
        left: 18,
        top: 10,
        elevation: 10
       
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    bookContainer:{
        position:'relative',
        top: 10
    },
    
    header: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        
        width: 150,
        height: 50,
        resizeMode: 'contain',

    },
    quote: {
        marginTop: 10,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    astronaut: {
        width: 120,
        height: 120,
        marginTop: 20,
    },
    swipeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4A90E2',
        borderRadius: 25,
        padding: 15,
        marginVertical: 20,
    },
    swipeText: {
        color: '#fff',
        fontSize: 16,
        marginRight: 10,
    },
    promoContainer: {
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: '100%',
        height: 170,
        backgroundColor: '#5eb3a5',
        elevation: 50,
        borderWidth: 2,
        borderTopColor: 'rgba(109, 202, 187, 1.0)', // Blanc semi-transparent
        borderLeftColor: 'rgba(109, 202, 187, 1.0)',
        borderBottomColor: 'rgba(0, 0, 0, 0.4)', // Noir semi-transparent
        borderRightColor: 'rgba(109, 202, 187, 1.0)',
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20
      },
      TransactionsContainer: {
        flex: 1, // <--- C'est la propriété magique ici !
        backgroundColor: 'white', // La couleur de fond blanche
        borderTopLeftRadius: 30, // Arrondi pour le haut si nécessaire
        borderTopRightRadius: 30,
        paddingTop: 20, // Espace interne
        marginTop: 10, 
       

      },
        depositeText:{
            color:'white',
            fontWeight:'bold',
            top: 28,
            left: 95,
            fontSize: 15,

      },
        transfertText:{
            color:'white',
            fontWeight:'bold',
            top: 7,
            left: 210,
            fontSize: 15,

      },
        viewText:{
        color:'#6dcabb',
        fontWeight: 'bold',
        fontSize: 20,
        left: 275,
        top:-10

      },
      headText:{
        color:'#6dcabb',
        fontWeight: 'bold',
        fontSize: 20,
        left: 20,
        top:18
      },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
        padding: 10,
      },
     
      image:{
        width: 165,
        height: 100, 
        resizeMode:'cover',
        borderRadius:20,
    },
    eye:{
        left:310,
        width:30,
        top: 10,
        height: 30,
        shadowColor: '#000'
    },
     tcash:{
        left:15,
        width:30,
        top: -10,
        height: 30,
        shadowColor: '#000'
    },
     plus:{
       
        width:30,
        top: 28,
        height: 30,
        left: 110

    },
     transfert:{
        width:25,
        top: -1,
        height: 25,
        left: 220,
    },
    containerbook:{
        flex: 1,
         justifyContent: 'center', 
         alignItems: 'center',
         marginTop: 10,
         borderRadius: 10,
         overflow: 'hidden',
    },
    logo2: {
        width:65,
        height:65,
        left: 6,
        top: 4
    },
   UserText:{
    color: '#fff',
    fontWeight: 'bold',
    top: -15,
    left: 15
   },
    verifiedtext:{
    color: '#fff',
    fontFamily: 'Montserrat',
    top: -27,
    left: 46,
    fontSize: 15,
   },
    notification:{
        width:30,
        height:30,
        position: 'absolute',
        left: 260,
        top: 10,

    },
    verified:{
        height: 15,
        width: 15,
        top: -8,
        left: 25   
    },
    counter:{
        left:289,
        top: -22,
        left: 258
    },
    counter1:{
        left:240,
        top:20
    },
    support:{
        width:30,
        height:30,
        position: 'absolute',
        left: 195,
        top: -7
    },
    panier1:{
        width:25,
        height:25,
        position: 'absolute',
        right:45,
        marginTop:20
    },
    index:{
        color:"red",
        fontWeight: 'bold',
        top: 25,
        left: 25
    },
    headeritemright:{
        width:'83.9%',
    },
    filter:{
        width:30,
        height:30,
        position: 'relative',
        right:70,
    },
    title : {
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
   
    promoText: {
        position: 'absolute',
        left: 20,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        left: 100,
        top: 40
    },
    SearchBar: {
        height: 35,
        width: 180,
        borderColor: '#ECB817', 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 35,
        backgroundColor: '#1B497D',
        borderWidth: 1
    },
    promoDiscount: {
        position: 'absolute',
        top: 70,
        left: 20,
        color: '#fff',
        fontSize: 34,
        left: 65,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },

    downicon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    iconsIndex1: {
        flexDirection: 'row',
        width:150,
        top:20,
        justifyContent: 'space-around',
        paddingVertical: 30,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        zIndex:999,
    },


    // fin


    containerhome:{
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

});
