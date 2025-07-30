import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const searchstyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    container2: {
        backgroundColor: '#F5F5F5',
    },
    header:{
        flexDirection:'row',
        padding:10,
        width:'100%'
    },
    headeritemleft:{
        width:'25%'
    },
    headeritemmidle:{
        width:'50%'
    },
    headeritemright:{
        width:'25%'
    },
    searchcontainer:{
        flexDirection:'row',
        width:'100%',
    },
    inputSearch:{
        height: 40,
        width: '85%',
        borderColor: '#ECB817', 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#1B497D',
        borderWidth: 1,
        marginTop:10,
        flexDirection:'row',
    },
    btnfiltersearch:{
        width:'18%',
        marginTop:13,
        height:35,
        marginLeft:5
    },
    btnfiltericon:{
        width:35,
        height:35
    },
    SearchBar:{
        color:'#fff',
        width:'70%',
    },
    placeholdersearch:{
        color:'#fff'
    },
    searchIcons: {
        fontSize:20,
        color:'#fff'
    },
    textIcons:
    {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        right:170

    },
    textSearch: {
        textAlign:'center',
        height: 50,
        paddingBottom:8,
        
    },
    propositions:{
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    choice:{
        width: 50, 
        height:30,
        backgroundColor: '#eee',
       
        flex: 1,
          marginRight: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
      },
    choiceText:{
        color:'#000',
        width:'80%',
        fontWeight: 'bold',
        left: 6,

    },
   
    bookContainer:{
        marginTop: 10,
        marginRight: 'cover',
        borderRadius: 10,
        overflow: 'hidden',
    },
    scrollContainer: {
        padding: 20,
    },
    
    // End search
});