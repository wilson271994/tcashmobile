import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const profilstyle = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,
        paddingBottom:60
    },
    bloccontainer:{
        marginTop:5,
        marginBottom:5,
        padding:10
    },
    paramitem:{
        marginBottom:10,
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        padding:10
    },
    flexrowitem:{
        flexDirection:'row'
    },
    containericonimg:{
        backgroundColor:'#eee',
        borderRadius:100,
        width:'13%',
        padding:8
    },
    iconimage:{
        height:25,
        width:25
    },
    labelmenucont:{
        marginLeft:20
    },
    itemlisttext:{
        fontSize:15,
        color:'#666'
    },
    itemlisthelptext:{
        marginTop:5
    },
    sectionTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#6d6d6d',
    },
    logoutContainer:{
        justifyContent: 'center',
        textAlign: 'center',
    },
    textlogout:{
        textAlign:'center',
        fontSize:15,
        color:'#666'
    },

    // Profil form
    containerform:{
        flex:1,
    },
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
    headerpageform:{
        marginTop:10,
        padding:15,
        backgroundColor:'#fff',
        borderRadius:10,
        marginRight:10,
        marginLeft:10,
        marginBottom:10
    },
    titlepageform:{
        fontSize:16,
        color:'#000',
        marginBottom:20
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
});