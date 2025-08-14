import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import { Picker } from '@react-native-picker/picker'; // Pour lesupportchatsupportchatstyle listes déroulantes
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { supportchatstyle } from '../../assets/styles/supportchat';

class SupportChat extends PureComponent {

    constructor(props){
        super(props); 
        this.state = {
       is_loading:false,
            searchText : 
            '',
        };

    };

    render(){
        const {is_loading} = this.props;
        return( 
            <SafeAreaView style={supportchatstyle.safeArea}>
                <View style={supportchatstyle.header}>
                    <Image source={require('../../assets/images/group.png')} style={supportchatstyle.headerImage} />
                    <View style={supportchatstyle.headerInfo}>
                    <Text style={supportchatstyle.headerTitle}>Service Client t-cash</Text>
                    <Text style={supportchatstyle.headerSubtitle}>quelques minutes</Text>
                    </View>
                </View>

                <ScrollView contentContainerStyle={supportchatstyle.chatContainer}>
                    <View style={[supportchatstyle.bubble, supportchatstyle.bubbleLeft]}>
                    <Text style={supportchatstyle.bubbleText}>
                        Bonjour et bienvenue sur le chat en ligne de T-cash. Nous sommes ravis de vous accueillir parmi nos clients.👏
                    </Text>
                    </View>

                    <View style={[supportchatstyle.bubble, supportchatstyle.bubbleLeft]}>
                    <Text style={supportchatstyle.bubbleText}>
                        Notre équipe de service client est à votre disposition pour répondre à toutes vos questions et vous accompagner dans l'utilisation de nos services. Nous espérons que vous serez satisfait de notre banque et que vous recommanderez à vos proches.😊
                        {'\n'}
                        {'\n'}
                        Merci de nous faire confiance!😊
                    </Text>
                    </View>
                </ScrollView>

                <View style={supportchatstyle.inputContainer}>
                    <TextInput
                    style={supportchatstyle.textInput}
                    placeholder="Envoyer un message ...."
                    placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={supportchatstyle.iconButton}>
                    <Image source={require('../../assets/images/hand.png')} style={supportchatstyle.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={supportchatstyle.iconButton}>
                    <Image source={require('../../assets/images/image.png')} style={supportchatstyle.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={supportchatstyle.iconButton}>
                    <Image source={require('../../assets/images/plus.png')} style={supportchatstyle.icon} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SupportChat);