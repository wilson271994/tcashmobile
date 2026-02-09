import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import { supportchatstyle } from '../../assets/styles/supportchat';

class SupportChat extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            is_loading:false,
            searchText : '',
        };

    };

    _backToHome = () => {
        const {root_navigation} = this.props;
        root_navigation.goBack();
    }

    render(){
        const {is_loading} = this.props;
        return( 
            <View style={supportchatstyle.container}>
                <View style={supportchatstyle.header}>
                    <TouchableOpacity 
                        onPress={this._backToHome}
                        style={supportchatstyle.backbtn}>
                        <Image source={require('../../assets/images/back.png')} style={supportchatstyle.headerImage} />
                    </TouchableOpacity>
                    <View style={supportchatstyle.headerInfo}>
                        <Text style={supportchatstyle.headerTitle}>Conversation</Text>
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
            </View>
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
        root_navigation     : state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(SupportChat);