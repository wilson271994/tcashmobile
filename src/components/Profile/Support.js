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
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Moment from 'moment';
import { Picker } from '@react-native-picker/picker'; // Pour lesupportsupportstyle listes déroulantes
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { supportstyle } from '../../assets/styles/support';
import TicketCreation from './Modal/TicketCreation';

class SearchFilter extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isScroll : false,
            isVisibleTckCrModal : false
        }
    };


    _navigateToSupportChat = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('SupportChat');
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

    render(){
        const {is_loading} = this.props;
        const {isVisibleTckCrModal} = this.state;
        return( 
            

            <SafeAreaView style={supportstyle.container}>
                <View style={supportstyle.header}>
                    <Text style={supportstyle.headerTitle}>Conversations</Text>
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
                <TouchableOpacity 
                    style={supportstyle.fab}
                    //onPress={this._openModalTicketCreation}
                    onPress={this._navigateToSupportChat.bind(this)}>
                    <Image
                    source={require('../../assets/images/edit.png')}
                    style={supportstyle.fabIcon}
                    />
                </TouchableOpacity>
                    
                <TicketCreation 
                    _closeModalTicketCreation   = {this._closeModalTicketCreation}
                    isVisibleTckCrModal         = {isVisibleTckCrModal}
                />
            </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SearchFilter);