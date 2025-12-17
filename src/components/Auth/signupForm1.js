import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TextInput, Modal, TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking } from 'react-native';
import { styles } from '../../assets/styles';
import { IS_LOADING, ROOT_NAVIGATION} from '../../reducers/actions/types.js';
import 'moment/locale/fr';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { loginstyle } from '../../assets/styles/login';
import { Dropdown } from 'react-native-element-dropdown';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

class signUpForm1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            confidFocus: false,
            is_alert: false,
            alert_title: '',
            alert_subtitle: '',
            isFocusDateOfBirth: false,
            username: '',
            first_name: '',
            last_name: '',
            dateofbirth: new Date(),
            phone:'',
            email: '',
        }
    };

    componentDidMount(){
        this._RequestPersistDataForm1();
        store.dispatch({type:IS_LOADING, value:false});
    }

    _RequestPersistDataForm1 = async () => {
        const form1Data = await AsyncStorage.getItem('form1Data');
        if(form1Data !== undefined){
            const dataObject = JSON.parse(form1Data);
            this.setState({
                first_name   : dataObject.first_name,
                last_name    : dataObject.last_name,
                username    : dataObject.username,
                email       : dataObject.email,
                phone : dataObject.phone,
                dateofbirth : dataObject.dateofbirth,
            })
        }
    }

    _onChangeUserName = (val) => {
        if (val !== '') {
            this.setState({ username : val})
        }
    }
    _onChangeLastName = (val) => {
        if (val !== '') {
            this.setState({ last_name : val})
        }
    }

    _onChangeFirtsName = (val) => {
        if (val !== '') {
            this.setState({ first_name : val})
        }
    }

   _onChangeEmail = (val) => {
        if (val !== '') {
           this.setState({ email : val})
        }
    }

    _onChangePhoneNumber = (val) => {
        if(val !== ''){
            this.setState({ phone : val})
        }
    }

    _onChangeDateOfBirth = (val) => {
        if(val !== ''){
            this.setState({ dateofbirth : val})
        }
        
    }
    _renderDropdownLabel = () => {
        if (this.state.confidValue || this.state.confidFocus) {
            return (
                <Text style={[styles.label, this.state.confidFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    _emailValidation = () => {
        const { email } = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            return false;
        }
        return true;
    }
    _navigateToLogin = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate(" ");
    }

    _usernameValidation = () => {
        const { username } = this.state;
        let reg = /^[a-zA-Z0-9.\_$@*!]{3,30}$/;
        if (reg.test(username) === false) {
            return false;
        }
        return true;
    }


    _navigateToForm2 = async () => {
        const { navigation } = this.props;
        const { username, first_name, last_name, email, phone, dateofbirth} = this.state;
        if (
            username !== '' &&
            first_name !== '' &&
            last_name !== '' &&
            email !== '' &&
            phone !== '' &&
            dateofbirth !== ''
        )  { 
            const form1Data = JSON.stringify({ 
                first_name   : first_name,
                last_name    : last_name,
                username    : username,
                email       : email,
                phone : phone,
                dateofbirth : dateofbirth
            })
            await AsyncStorage.setItem('form1Data', form1Data),
            store.dispatch({ type: ROOT_NAVIGATION, value: navigation })
            navigation.navigate('SignUpForm2');
        }
    }

    _closeAlert = () => {
        this.setState({ is_alert: false });
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render() {
        const { is_loading, date_of_birth } = this.props;
        const { 
            confidFocus, 
            is_alert, 
            alert_title, 
            alert_subtitle, 
            isFocusDateOfBirth, 
            phone,
            first_name,
            last_name,
            username,
            email,
            dateofbirth
        } = this.state;
        return (
            <ScrollView
                ref={(ref) => { this.scrollListReftop = ref }}>
                <ImageBackground source={require('../../assets/images/background.jpg')} style={[loginstyle.itemslidersignup]}>
                    <View style={loginstyle.containersignup}>
                        <TouchableOpacity
                            onPress={this._navigateToLogin}>
                            <Image style={loginstyle.backstyle1} source={require('../../assets/images/back.png')} />
                        </TouchableOpacity>

                        <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.image1} />
                        <Text style={[styles.textBold, loginstyle.titlesignup]}>Créer un Compte</Text>
                        <Text style={[styles.textBold, loginstyle.title]}>Créez votre compte T-cash et profitez</Text>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Nom utilisateur'
                                onChangeText={(val) => { this._onChangeUserName(val) }}
                                editable={is_loading ? false : true}
                                value={username !== undefined && username !== '' ? username : ''}  
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Votre nom'
                                onChangeText={(val) => { this._onChangeFirtsName(val) }}
                                editable={is_loading ? false : true}
                                value={first_name !== undefined && first_name !== '' ? first_name : ''} 
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Votre prénom'
                                onChangeText={(val) => { this._onChangeLastName(val) }}
                                editable={is_loading ? false : true}
                                value={last_name !== undefined && last_name !== '' ? last_name : ''} 
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup, styles.text]}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Adresse Email'
                                onChangeText={(val) => { this._onChangeEmail(val) }}
                                editable={is_loading ? false : true}
                                value={email !== undefined && email !== '' ? email : ''} 
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TextInput
                                style={[loginstyle.inputtextsignup, styles.text]}
                                placeholderTextColor='#B1B1B1'
                                placeholder='Votre numéro de téléphone'
                                onChangeText={(val) => { this._onChangePhoneNumber(val) }}
                                editable={is_loading ? false : true}
                                value={phone !== undefined && phone !== '' ? phone : ''} 
                            />
                        </View>

                        <View style={loginstyle.blocinupt2}>
                            <TouchableOpacity
                                onPress={() => this.setState({ isFocusDateOfBirth: true })}
                                style={loginstyle.inputdatesignup}>
                                <Text style={[styles.text, loginstyle.inputdatetextbtn, { 
                                    color: dateofbirth !== undefined && new Date(dateofbirth).toString() !== new Date() ? '#000' : '#b1b1b1' }]}>
                                        {dateofbirth !== undefined && new Date(dateofbirth).toString() !== new Date() ? new Date(dateofbirth).toLocaleDateString() : 'Votre date de naissance'}</Text>
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                mode='date'
                                placeholder='DD-MM-YYYY'
                                format='DD-MM-YYYY'
                                title={'Date de naissance'}
                                locale='fr'
                                open={isFocusDateOfBirth}
                                date={new Date(dateofbirth)}
                                onConfirm={(val) => {
                                    this.setState({ isFocusDateOfBirth: false })
                                    this._onChangeDateOfBirth(val)
                                }}
                                onCancel={() => {
                                    this.setState({ isFocusDateOfBirth: false })
                                }}
                            />
                        </View>

                        <TouchableOpacity
                            disabled={is_loading ? true : false}
                            style={loginstyle.btnsignup}
                            onPress={this._navigateToForm2}>
                            {
                                is_loading ?
                                    <View style={loginstyle.loaderbtn}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </View>
                                    :
                                    <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Suivant 1/3</Text>
                            }
                        </TouchableOpacity>

                    </View>
                </ImageBackground>

                {/* Manage Error Alert */}
                <AwesomeAlert
                    show={false}
                    title={alert_title}
                    titleStyle={[styles.textBold, styles.titlealert]}
                    message={alert_subtitle}
                    messageStyle={[styles.text, styles.descriptionalert]}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    confirmText="Corriger"
                    confirmButtonStyle={[styles.text, styles.btnalert]}
                    confirmButtonColor="#060064"
                    onConfirmPressed={this._closeAlert}
                />
            </ScrollView>
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
        state,
        is_loading: state.loader.is_loading,
        root_navigation: state.navigation.root_navigation,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(signUpForm1);