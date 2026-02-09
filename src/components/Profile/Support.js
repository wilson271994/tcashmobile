import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { styles } from '../../assets/styles';
import { supportstyle } from '../../assets/styles/support';
import CreateTicket from './Forms/CreateTicket';

class Support extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isScroll : false,
            isVisibleTckCrModal : false
        }
    };

    _navigateToSupportChat = () => {
        const {root_navigation} = this.props; 
        root_navigation.navigate('SupportChat');
    }

    _toggleScrollView = (data) => {
        if(data){

        }
        console.log(data)
    }

    _openModalTicketCreation = () => {
        this.setState({isVisibleTckCrModal:true});
    }

    _closeModalTicketCreation = () => {
        this.setState({isVisibleTckCrModal:false});
    }

    _backToHome = () => {
        const {root_navigation} = this.props;
        root_navigation.goBack();
    }

    render(){
        const {is_loading} = this.props;
        const {isVisibleTckCrModal} = this.state;
        return( 
            <View style={supportstyle.container}>
                <View style={supportstyle.header}>
                        <TouchableOpacity 
                            onPress={this._backToHome}
                            style={supportstyle.backbtn}>
                            <Image source={require('../../assets/images/back.png')} style={supportstyle.backicon} />
                        </TouchableOpacity>
                    <Text style={[styles.textBold, supportstyle.headerTitle]}>Support client</Text>
                </View>

                <ScrollView style={supportstyle.conversationsList}>
                <TouchableOpacity 
                onPress={this._navigateToSupportChat.bind(this)}
                style={supportstyle.conversationItem}>
                    <Image
                    source={require('../../assets/images/lion.jpg')}
                    style={supportstyle.profileImage}
                    />
                    <View style={supportstyle.conversationDetails}>
                    <Text style={supportstyle.conversationSender}>
                        FR: Bonjour, nous n'avons p...
                    </Text>
                    <Text style={supportstyle.conversationTime}>
                        Awa . il y a 3j
                    </Text>
                    </View>
                    <View style={supportstyle.unreadIndicator} />
                </TouchableOpacity>
                </ScrollView>                
                <TouchableOpacity onPress={this._navigateToSupportChat.bind(this)}
                    style={supportstyle.fab}>
                    <Image
                        source={require('../../assets/images/new-message.png')}
                        style={supportstyle.fabIcon}
                    />
                </TouchableOpacity>
                    
                <CreateTicket 
                    _closeModalTicketCreation   = {this._closeModalTicketCreation}
                    isVisibleTckCrModal         = {isVisibleTckCrModal}
                />
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
        root_navigation     : state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Support);