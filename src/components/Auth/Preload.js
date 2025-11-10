import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput, Modal,TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking} from 'react-native';
import  {styles}  from '../../assets/styles';
import Moment from 'moment';
import 'moment/locale/fr';
import Foundation  from 'react-native-vector-icons/Foundation';
import Entypo  from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { loginstyle } from '../../assets/styles/login';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { IS_AUTHENTICATED } from '../../reducers/actions/types';

class Preload extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        
        } 
    };

    componentDidMount(){

    }

    _navigateToHome = () => {
        //upate state is_authenticated
        store.dispatch({type:IS_AUTHENTICATED, value:true});
    }

    _closeAlert = () => {
        this.setState({is_alert:false}); 
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render(){
        const {is_loading} = this.props;
        const {password1Visible, password2Visible, acceptCondition, confidFocus, gender, is_alert, alert_title, alert_subtitle} = this.state;
        return(
            <View style={[loginstyle.containerPreload]}>
                <ImageBackground 
                    style={loginstyle.preloadBackgound}
                    source={require('../../assets/images/background.jpg')}>
                    <View style={loginstyle.preloadlogo}>
                        <Image
                            source={require('../../assets/images/logo.png')}
                            style={loginstyle.preloadheaderlogo}
                        /> 
                    </View>

                    <View style={loginstyle.preloadlogo}>
                        <Text style={[styles.textBold, loginstyle.textpreload]}>Bienvenue sur TCASH</Text>
                    </View>

                    <TouchableOpacity 
                        disabled={is_loading ? true : false}
                        style={loginstyle.btnspreload} 
                        onPress={this._navigateToHome}>
                        {   
                            is_loading ?
                                <View style={loginstyle.loaderbtn}>
                                    <ActivityIndicator size="small" color="#fff" />
                                </View>
                            :
                                <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>
                                    Commencer <FontAwesome name='angle-right' style={loginstyle.iconpreload} />
                                </Text>
                        }
                    </TouchableOpacity> 
                </ImageBackground>
            </View>
        )
    }


} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading:state.loader.is_loading,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Preload);