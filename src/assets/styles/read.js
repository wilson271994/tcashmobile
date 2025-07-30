import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';
const {width, height} = Dimensions.get('window');

export const readstyle = StyleSheet.create({
  
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.7, // Ajuster l'opacité
    },
    playerControls: {
        // ... styles pour les contrôles
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 510,        
        color: '#000',
        left:110,
      },
      bookCover: {
        width: 200,
        height: 200,
        marginBottom: 240,
        paddingBottom:200,
        borderRadius:10,
        right:60,

      },
      playerControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      currentTime: {
        fontSize: 16,
        right:190,
        color: '#000',
      },
      duration: {
        fontSize: 16,
        right:190,
        color: '#000',

      },
      playButton: {
        // Styles pour le bouton de lecture
      },
      iconhide:{
        color:'#000',
        fontSize:25,
        top:27,
        right:80
        
    },
    lecture:{
      fontSize: 16,
        right:190,
        color: '#000',
        marginTop:-200,
        left: 90
    }
});