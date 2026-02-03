import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TextInput, Modal, TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking } from 'react-native';
import { styles } from '../../assets/styles';
import Moment from 'moment';
import 'moment/locale/fr';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { loginstyle } from '../../assets/styles/login';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { SignupAction } from '../../reducers/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const datagender = [
    { label: 'Masculin', value: 'Masculin' },
    { label: 'Féminin', value: 'Féminin' },
];

const countryselection = [

    { label: 'Cameroun', value: '2' },
    { label: 'Canada', value: '2' },
    { label: 'Belgique', value: '2' },
    { label: 'Maroc', value: '2' },
    { label: 'Argentine', value: '2' },
    { label: 'Afrique du Sud', value: '2' },
    { label: 'Mexique', value: '2' },
    { label: 'Egypte', value: '2' },
    { label: 'France', value: '2' },
    { label: 'Sénégal', value: '2' },
    { label: 'Chine', value: '2' },
    { label: 'Inde', value: '2' },
    { label: 'Pays-Bas', value: '2' },
    { label: 'Russie', value: '2' },
    { label: 'États-Unis', value: '2' },

];

const cityselection = [

    { label: 'Paris', value: '2' },
    { label: 'Marseille', value: '2' },
    { label: 'Yaounde', value: '2' },
    { label: 'Garoua', value: '2' },
    { label: 'Saint Petersburg', value: '2' },
    { label: 'Novosibirsk', value: '2' },
    { label: 'Ottawa', value: '2' },
    { label: 'Quebec', value: '2' },
    { label: 'Marrakech', value: '2' },
    { label: 'Rabat', value: '2' },
    { label: 'Fès', value: '2' },
    { label: 'Mogadishu', value: '2' },
    { label: 'Córdoba', value: '2' },
    { label: 'Rosario', value: '2' },
    { label: 'Guadalajara', value: '2' },
    { label: 'Monterrey', value: '2' },
    { label: 'Alexandria', value: '2' },
    { label: 'Saint-Louis', value: '2' },
    { label: 'Shanghai', value: '2' },
    { label: 'Giza', value: '2' },
    { label: 'Louga', value: '2' },
    { label: 'Shenzhen', value: '2' },
    { label: 'Delhi', value: '2' },
    { label: 'Kolkata', value: '2' },
    { label: 'Utrecht', value: '2' },
    { label: 'New York', value: '2' },
    { label: 'Los Angeles', value: '2' },
    { label: 'Anvers', value: '2' },
    { label: 'Liège', value: '2' },
    { label: 'Douala', value: '3' },
    { label: 'Moscow', value: '4' },
    { label: 'Vancouver', value: '5' },
    { label: 'Casablanca', value: '5' },
    { label: 'Dakar', value: '7' },
    { label: 'Buenos Aires', value: '8' },
    { label: 'Mexico City', value: '9' },
    { label: 'Cairo', value: '10' },
    { label: 'Dakar', value: '11' },
    { label: 'Beijing', value: '12' },
    { label: 'Mumbai', value: '13' },
    { label: 'Amsterdam', value: '14' },
    { label: 'Washington D.C.', value: '15' },
    { label: 'Bruxelles', value: '16' },

];

class signupForm2 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            gender              : '',
            country             : '',
            city                : '',
            password1           : '',
            password2           : '',
            acceptCondition     : false,
            password1Visible    : false,
            password2Visible    : false,
            confidCountryFocus  : false,
            confidCityFocus     : false,
            confidGenderFocus   : false,
            currentyear         : new Date(),
            cities              : []
        }
    };

    componentDidMount() {

    }

    _togglePass1Visible = () => {
        this.setState({ password1Visible: !this.state.password1Visible });
    }

    _togglePass2Visible = () => {
        this.setState({ password2Visible: !this.state.password2Visible });
    }

    _onChangeAcceptCondition = () => {
        this.setState({ acceptCondition: !this.state.acceptCondition });
    }

    _passwordValidation = () => {
        const { password1, password2 } = this.state;
        if (password1 != password2) {
            return false;
        }
        return true;
    }

    _acceptConditionValidation = () => {
        const { acceptCondition } = this.state;
        if (acceptCondition) {
            return true;
        }
        return false;
    }

    _authSignup = async () => {
        const {navigation} = this.props;
        const { country, city, password1, password2, gender } = this.state;
        if (
            country         !== '' &&
            city            !== '' &&
            password1       !== '' &&
            password2       !== '' &&
            gender          !== '' &&
            this._passwordValidation() &&
            this._acceptConditionValidation()
        ){
            const form1data = await AsyncStorage.getItem('DataForm1');
            var username    = '';
            var first_name  = '';
            var last_name   = '';
            var email       = '';
            var phone       = '';
            if(form1data !== null){
                const unpackdata = JSON.parse(form1data);
                if(unpackdata.username !== ''){
                    username = unpackdata.username;
                }
                if(unpackdata.first_name !== ''){
                    first_name = unpackdata.first_name;
                }
                if(unpackdata.last_name !== ''){
                    last_name = unpackdata.last_name;
                }
                if(unpackdata.email !== ''){
                    email = unpackdata.email;
                }
                if(unpackdata.phone !== ''){
                    phone = unpackdata.phone;
                }
            }   
            const payload = JSON.stringify({
                username    : username,
                first_name  : first_name,
                last_name   : last_name,
                email       : email,
                phone       : phone,
                country     : country.id,
                city        : city.id,
                sexe        : gender.value,
                referral    : '',
                password1   : password1,
                password2   : password2,
            });
            SignupAction(payload, navigation);
        }
        if(country === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre pays.',
                }
            });
        }
        if(city === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre ville.',
                }
            });
        }
        if(gender === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre sexe.',
                }
            });
        }
        if(!this._passwordValidation()){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Les mots de passe saisis ne sont pas pareils.',
                }
            });
        }
        if(!this._acceptConditionValidation()){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez accepter les conditions d\'utilisations.',
                }
            });
        }
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    _navigateToForm1 = () => {
        const {navigation} = this.props;
        navigation.navigate('SignUpForm1');
    }

    _navigateToActivationForm = () => {
        const {navigation} = this.props;
        navigation.navigate('Activation');
    }

    _toggleCountry = (item) => {
        this.setState({country:item})
        this.setState({cities:item.cities});
    }

    render() {
        const { is_loading, site_infos } = this.props;
        const { 
            password1Visible, 
            password2Visible, 
            acceptCondition, 
            confidCountryFocus,
            confidCityFocus,
            confidGenderFocus, 
            country,
            gender,
            city,
            currentyear,
            cities
        } = this.state;
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')}>  
                <ScrollView ref={(ref) => {this.scrollListReftop = ref}}>
                    <View style={[loginstyle.containersignup]}>
                        <View style={loginstyle.signupheader}>
                            <View style={loginstyle.containerlogo}>
                                <TouchableOpacity onPress={this._navigateToForm1}
                                    style={loginstyle.closeButton}>
                                    <Image 
                                        source={require('../../assets/images/back-w.png')} 
                                        style={loginstyle.closeicon} 
                                    />
                                </TouchableOpacity>
                                <View style={loginstyle.logoiconcont}>
                                    <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.logocomp} />
                                </View>
                            </View>
                            <Text style={[styles.text, loginstyle.text1]}>Créer un compte</Text>
                        </View>
                        
                        <View style={loginstyle.containerform}>
                            <Text style={[styles.text, loginstyle.label]}>Choisir votre Pays</Text>
                            <Dropdown
                                style={[loginstyle.inputform, confidCountryFocus && { borderColor: 'blue' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={site_infos.countries}
                                labelField="name"
                                valueField="id"
                                placeholder={!confidCountryFocus ? 'Choisir votre Pays' : '...'}
                                value={country}
                                onFocus={() => this.setState({ confidCountryFocus: true })}
                                onBlur={() => this.setState({ confidCountryFocus: false })}
                                onChange={item => this._toggleCountry(item)}
                                renderLeftIcon={() => (<Foundation name='flag' style={loginstyle.dropdownicon} />)}
                            />

                            <Text style={[styles.text, loginstyle.label]}>Choisir votre Ville</Text>
                            <Dropdown
                                style={[loginstyle.inputform, confidCityFocus && { borderColor: 'blue' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={cities}
                                labelField="name"
                                valueField="id"
                                placeholder={!confidCityFocus ? 'Choisir votre Ville' : '...'}
                                value={city}
                                onFocus={() => this.setState({ confidCityFocus: true })}
                                onBlur={() => this.setState({ confidCityFocus: false })}
                                onChange={item => this.setState({ city : item })}
                                renderLeftIcon={() => (<Foundation name='map' style={loginstyle.dropdownicon} />)}
                            />
                            

                            <Text style={[styles.text, loginstyle.label]}>Selectionner votre sexe</Text>
                            <Dropdown
                                style={[loginstyle.inputform, confidGenderFocus && { borderColor: 'blue' }]}
                                placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                containerStyle={loginstyle.containeritemdrop}
                                iconStyle={loginstyle.iconStyle}
                                dropdownPosition='auto'
                                data={datagender}
                                labelField="label"
                                valueField="value"
                                placeholder={!confidGenderFocus ? 'Choisir votre sexe...' : '...'}
                                value={gender}
                                onFocus={() => this.setState({ confidGenderFocus: true })}
                                onBlur={() => this.setState({ confidGenderFocus: false })}
                                onChange={item => this.setState({ gender: item })}
                                renderLeftIcon={() => (<Foundation name='male-female' style={loginstyle.dropdownicon} />)}
                            />

                            <Text style={[styles.text, loginstyle.label]}>Saisir votre mot de passe</Text>
                            <View style={loginstyle.passwordinput}>
                                <TextInput
                                    style={[loginstyle.inputform, loginstyle.inputformpass, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Mot de passe'
                                    secureTextEntry={password1Visible}
                                    onChangeText={(val) => {this.setState({password1:val})}}
                                    editable={is_loading ? false : true}
                                />
                                <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePass1Visible}
                                        style={loginstyle.passwordhidebtn}
                                    >
                                    <Entypo 
                                        name={password1Visible ? 'eye-with-line' : 'eye'} 
                                        style={loginstyle.iconhidepasssiginup}/>
                                </TouchableOpacity>
                            </View>

                            <Text style={[styles.text, loginstyle.label]}>Confirmer votre mot de passe</Text>
                            <View style={loginstyle.passwordinput}>
                                <TextInput
                                    style={[loginstyle.inputform, loginstyle.inputformpass, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Confirmez Mot de passe'
                                    secureTextEntry={!password2Visible}
                                    onChangeText={(val) => {this.setState({password2:val})}}
                                    editable={is_loading ? false : true}
                                />
                                <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePass2Visible}
                                        style={loginstyle.passwordhidebtn}
                                    >
                                    <Entypo 
                                        name={password2Visible ? 'eye-with-line' : 'eye'} 
                                        style={loginstyle.iconhidepasssiginup}/>
                                </TouchableOpacity>
                            </View>

                            <View style={loginstyle.containercondition}>
                                <TouchableOpacity
                                    style={loginstyle.checkbtn}
                                    onPress={this._onChangeAcceptCondition}>
                                    {
                                        acceptCondition ?
                                                <FontAwesome name='check' style={loginstyle.checkicon} />
                                            :
                                                <Text></Text>
                                    }
                                </TouchableOpacity>
                                <Text style={[styles.text, loginstyle.conditiontext]}>
                                    J'accepte les
                                    <TouchableOpacity onPress={this._redirectPolicy.bind(this, 'https://t-cash.ca/terms')}>
                                        <Text style={[styles.text, loginstyle.conditionlink]}> conditions </Text>
                                    </TouchableOpacity>
                                    d'utilisations et de
                                    <TouchableOpacity onPress={this._redirectPolicy.bind(this, 'https://t-cash.ca/privacy-policy')}>
                                        <Text style={[styles.text, loginstyle.conditionlink]}> confidentialités </Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>

                            <TouchableOpacity onPress={this._authSignup}
                                style={loginstyle.submitButton}
                                disabled={is_loading ? true : false}
                            >
                                {
                                    is_loading ?
                                        <ActivityIndicator size="small" color="#fff" />
                                    :
                                        <Text style={[styles.textBold, loginstyle.submitBtnText]}>Continuer</Text>
                                }
                            </TouchableOpacity> 
                        </View>
                    </View>
                </ScrollView>
                <View style={loginstyle.copyrihtcontainer}>
                    <Text style={[loginstyle.copyrtext, styles.textBold]}>© {currentyear.getFullYear()} Tous droits reservés à T-Cash.</Text>
                    <TouchableOpacity style={loginstyle.partdevbtn}>
                        <Text style={styles.text}>Dévelopé par Poly-H Technology</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        site_infos      : state.auth.site_infos,
        is_loading      : state.loader.is_loading,
        root_navigation : state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(signupForm2);