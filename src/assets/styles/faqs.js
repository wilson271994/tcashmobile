
import {StyleSheet, Dimensions} from 'react-native';
import { Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
const {width, height} = Dimensions.get('window');

export const faqstyle = StyleSheet.create({

        container: {
        flex: 1,
        backgroundColor: '#E0E0E0',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 50,
        
    },
    itemslidersignup:{
        flex: 1,
       
        backgroundColor:'#fff',
        justifyContent: 'space-around',
        paddingBottom: 150,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: 'white',
        marginLeft: -10, // Pour les superposer
    },
    cardsContainer: {
        marginTop: -30,
        marginHorizontal: 20,
        zIndex: 1,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userImage1: {
        width: 50,
        height: 50
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    badge: {
        backgroundColor: '#FF6347',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardIcon: {
        width: 20,
        height: 20,
        //tintColor: '#FFD700',
    },
    recentMessageContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 10,
    },
    messageCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageContent: {
        flex: 1,
    },
    messageText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    messageMeta: {
        fontSize: 14,
        color: '#999',
        marginTop: 2,
    },
    unreadDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FF6347',
        marginLeft: 10,
    },
    sendMessageContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    sendMessageCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sendMessageContent: {
        flex: 1,
    },
    sendMessageText: {
        fontSize: 14,
        color: '#999',
    },
    sendButton: {
        backgroundColor: '#00D1C6',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendIcon: {
        width: 20,
        height: 20,
        
    },
    });