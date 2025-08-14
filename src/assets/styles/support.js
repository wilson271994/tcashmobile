import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const supportstyle = StyleSheet.create({

    container:{
        backgroundColor:'#fff',
    },
    container2: {
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-end'
    },
    container3:{
        backgroundColor:'#fff',
        borderRadius:20,
        height: 'auto',
        marginTop:15,
       
    },
    scrollContainer: {
        padding: 20,
    },
    Text:{
        fontSize: 18,
        color: '#757171ff',
        marginVertical: 15,
        left: 90,
        top: -70
    },
    image1:{
        height: 60,
        width: 60,
        left: 20,
        top: 25,
        borderRadius: 30,

    },
    Text1:{
        fontSize: 18,
        color: '#000',
        marginVertical: 15,
        marginHorizontal:25,
        left: 80,
        top: -50,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flexShrink: 1
    },
    icons:{
        position: 'absolute',
        left:15,
        top:8,
        zIndex:999
      },
    btnsubmit:{
        
        borderRadius:30,
        backgroundColor:'#ECB817' ,
        borderColor:'#fff',
        borderWidth:1,
        width:60,
        
        position: 'absolute',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        right: 20,
    },
    textbtnsubmit:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        width:'100%',
    },

    //Style Modal Create Ticket
    modalContainer:{
        backgroundColor:'#eee',
        flex:1
    },
    loginbox:{
        height:'auto',
        marginTop:30,
        width:'85%',
        padding:20,
        left:30,
        backgroundColor:'#6dcabb',
        borderRadius:20,
        flex:1
    },
    entetelogin:{
        fontSize:16,
        color:'#000',
        marginBottom:2,
        marginTop:20,
        lineHeight:30
    },
    entetelogin1:{
        fontSize:20,
        color:'#000',
        marginTop:10,
        textAlign:'center',
        paddingTop:10,
        marginBottom:2

    },
    inputtextlogin:{
        textAlign:'center',
        backgroundColor: 'rgba(255, 250, 255, .99)',
        fontSize:14,
        borderWidth:1,
        borderColor:'#1B497D',
        color:'#000',
        borderRadius:30,
        paddingBottom:8,
    },
    select:{
        
    },
   image:{
    borderRadius:20,
    marginTop:20,
   },
   textbtnsubmit:{
    fontSize:20,
    color:'#fff',
    left:30,
    paddingTop:5,
    
   },
     btn:{
        borderRadius:30,
        backgroundColor:"#6dcabb",
        borderColor:'#fff',
        borderWidth:1,
        paddRingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingight:20,
        width:200,
        left:90
    },
    footerlogin:{
        justifyContent:'center',
        marginTop:20,
        marginBottom:20
    },
    icon:{
        position: 'absolute',
        left:130,
        top:8,
        zIndex:999,
      },


























      container: {
    flex: 1,
    backgroundColor: '#E0E0E0', // Fond gris clair
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    paddingRight: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  conversationsList: {
    flex: 1,
    padding: 10,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  conversationDetails: {
    flex: 1,
  },
  conversationSender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  conversationTime: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6347', // Couleur rouge pour l'indicateur
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6DCABB', // Couleur verte
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  fabIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
  },
})