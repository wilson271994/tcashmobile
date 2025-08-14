import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { store } from '../../reducers/store';
import Moment from 'moment';
import 'moment/locale/fr';
import { faqstyle } from '../../assets/styles/faqs';


const { width } = Dimensions.get('window');

class FaqIndex extends PureComponent {


    _navigateToSupport = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Support');
    }
  _navigateToSupportChat = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('SupportChat');
    }
 _navigateToHelp = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('HelpIndex');
    }

  render() {
    return (
      <SafeAreaView style={faqstyle.container}>
        {/* En-tête */}
        <ImageBackground 
            source={require('../../assets/images/background.jpg')}
            style={[faqstyle.itemslidersignup]}
            >  
            <View style={faqstyle.header}>
            <View style={faqstyle.headerContent}>
                <Image
                source={require('../../assets/images/logo.png')}
                style={faqstyle.logo}
                />
                <View style={faqstyle.headerIcons}>
                    {/* Images des utilisateurs */}
                    <View style={faqstyle.userImagesContainer}>
                        <Image source={require('../../assets/images/account.png')} style={[faqstyle.userImage, faqstyle.userImage1]} />
                        <Image source={require('../../assets/images/account.png')} style={[faqstyle.userImage, faqstyle.userImage1]} />
                        <Image source={require('../../assets/images/account.png')} style={[faqstyle.userImage, faqstyle.userImage1]} />
                    </View>
                </View>
            </View>
            </View>

            <View style={faqstyle.cardsContainer}>
            <TouchableOpacity 
            style={faqstyle.card}
            onPress={this._navigateToSupport.bind(this)}>

                <Text style={faqstyle.cardTitle}>Conversations</Text>
                <View style={faqstyle.badge}>
                <Text style={faqstyle.badgeText}>2</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={faqstyle.card}
                onPress={this._navigateToHelp.bind(this)}>
                <Text style={faqstyle.cardTitle}>Aide</Text>
                <Image
                source={require('../../assets/images/info.png')} 
                style={faqstyle.cardIcon}
                />
            </TouchableOpacity>
            </View>

            <View style={faqstyle.recentMessageContainer}>
            <Text style={faqstyle.sectionTitle}>Message récent</Text>
            <View style={faqstyle.messageCard}>
                <Image
                source={require('../../assets/images/lion.jpg')}
                style={faqstyle.profilePic}
                />
                <View style={faqstyle.messageContent}>
                <Text style={faqstyle.messageText}>FR: Bonjour, nous n'avons p...</Text>
                <Text style={faqstyle.messageMeta}>Awa . il y a 3j</Text>
                </View>
                <View style={faqstyle.unreadDot} />
            </View>
            </View>

            <View style={faqstyle.sendMessageContainer}>
            <Text style={faqstyle.sectionTitle}>Envoyez-nous un message</Text>
            <View style={faqstyle.sendMessageCard}>
                <View style={faqstyle.sendMessageContent}>
                <Text style={faqstyle.sendMessageText}>nous répondons généralement</Text>
                <Text style={faqstyle.sendMessageText}>sous un délai de 7 minutes</Text>
                </View>
                <TouchableOpacity 
                style={faqstyle.sendButton}
                onPress={this._navigateToSupportChat.bind(this)}>
                <Image
                    source={require('../../assets/images/telegram.png')}
                    style={faqstyle.sendIcon}
                />
                </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps, null)(FaqIndex);