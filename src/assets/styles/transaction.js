import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const transactionstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom:80
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    closeButton: {
        padding: 10,
    },
    closeicon:{
        width:30,
        height:30
    },
    closeText: {
        fontSize: 28,
        color: '#333',
    },
    title: {
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
    section: {
        padding: 20,
        marginBottom: -20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 45,
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
    continueButton: {
        backgroundColor: '#6dcabb',
        margin: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    recaptitle:{
        marginBottom:10,
        fontSize:16
    },
    containeritemrecap:{
        flexDirection:'row',
        marginBottom:15
    },
    itemrecap:{
        width:'50%'
    },
    labelrecap:{
        textAlign:'left'
    },
    valuerecap:{
        textAlign:'right',
        color:'#000'
    },
    recapcontainer:{
        borderWidth:1,
        borderColor:'#eee',
        margin:15,
        borderRadius:10
    }
});
