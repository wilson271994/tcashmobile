import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground,  ScrollView, Text, Image, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import Entypo  from 'react-native-vector-icons/Entypo';
import { Picker } from '@react-native-picker/picker'; // Pour lesupportchatreadstyle listes déroulantes
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { supportchatstyle } from '../../assets/readstyle/supportchat';
import { readstyle } from '../../assets/styles/read';


class ReadIndex extends PureComponent {

    constructor(props){
        super(props); 
        this.state = {
            is_loading:false,
            searchText : 
            '',
            lyricVisible:false,
            progress: 0,
            isPlaying: false,
            sound: null,
        };
    };

    _togglePassVisible = () => {  
      this.setState({passwordVisible:!this.state.passwordVisible});
  } 

    play = () => {
        if (this.state.sound) {
          this.state.sound.play((success) => {
            if (success) {
              console.log('Sound played successfully');
            } else {
              console.log('Playback failed');
            }
          });
          this.setState({ isPlaying: true });
        }
      };
    
      pause = () => {
        if (this.state.sound) {
          this.state.sound.pause();
          this.setState({ isPlaying: false });
        }
      };
    

   


    render(){
        const {is_loading} = this.state;
        return( 
            <View style={readstyle.container}>
                <Image source={require('../../assets/images/lion.jpg')} style={readstyle.backgroundImage} />
                <View style={readstyle.playerControls}>
                    {/* ... contrôles de lecture */}


                          <Text style={readstyle.title}>Titre du livre</Text>
                        <Image source={require('../../assets/images/biblio.jpg')}  style={readstyle.bookCover}  />
                        <View style={readstyle.playerControls}>
                        
                          <View style={readstyle.playButton}>
                              {/* Bouton de lecture/pause */}
                          </View>
                          
                          {/* Autres contrôles de lecture (précédent, suivant, etc.) */}
                        </View>
            
                    <TouchableOpacity 
                                    disabled={is_loading ? true : false}
                                    onPress={this._togglePassVisible}>
                                    <Entypo 
                                        name={this.state.passwordVisible ? 'eye-with-line' : 'eye'} 
                                        style={readstyle.iconhide}/>
                                </TouchableOpacity>

                </View>

                <View>
                        <TouchableOpacity onPress={this.playSound}>
                        <Text>{this.state.isPlaying ? 'Pause' : 'Play'}</Text>
                        </TouchableOpacity>
                        <Text style={readstyle.lecture}>Temps écoulé : {this.state.currentTime}s / {this.state.duration}s</Text>
                    </View>

            </View>

        )
    }


} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ReadIndex);