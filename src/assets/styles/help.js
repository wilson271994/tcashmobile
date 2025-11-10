import {StyleSheet, Dimensions} from 'react-native';
import { Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
const {width, height} = Dimensions.get('window');

export const helpstyle = StyleSheet.create({
    container:{
        backgroundColor:'#efefef'
    },
    scrollContainer:{
        textAlign: 'center',
        backgroundColor: '#fff',
        width: 350,
        height: 'auto',
        left: 20,
        borderRadius: 20,
        marginBottom: 30,
        padding: 10,
        flex: 0,
    },
    articleCard:{
        backgroundColor: '#fff',
    },
    articleTitle: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#000',
        textAlignVertical: 'top',
    },
    articleIntro:{
        fontSize: 20,
    },
    authorContainer:{
        marginBottom: 10,
        padding: 20,
        marginTop: 20
    },
    authorImage:{
        height: 50,
        width: 50
    },
    headerIcon:{
        width:40,
        height:40,
        left: 310,
        top: 10,
        marginBottom: 20
    },
    authorName:{
        left: 60,
        top: -50
    },
    updateDate:{
        left: 60,
        top: -50
    },
    relatedArticleTitle: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 25,
        color:'#000',
        textAlignVertical: 'top',
    },
    relatedArticle:{
        marginBottom: 20
    },
    relatedArticleIntro:{
        fontSize: 20,
    },
});