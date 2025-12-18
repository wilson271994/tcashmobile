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
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { IS_AUTH_ERROR, IS_AUTHENTICATED, IS_LOADING } from '../../reducers/actions/types';





const handleValidation = () => {
    if (!prenom || !numRue || !pays || !ville || !telephone || !typeCompte) {
        Alert.alert('Erreur', 'Tous les champs sont obligatoires.');
    } else {
        Alert.alert('Succès', 'Formulaire soumis avec succès !');
    }
};

const datagender = [
    { label: 'Masculin', value: '0' },
    { label: 'Féminin', value: '1' },
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
            firstname           : '',
            street              : '',
            phonenumber         : '',
            acceptCondition     : false,
            password1Visible    : false,
            password2Visible    : false,
            confidFocus         : false,
            gender              : '',
            country             : '',
            city                : '',
            account             : '',
            password1           : '',
            password2           : '',
            is_alert            : false,
            alert_title         : 'Erreur dans le formulaire!',
            alert_subtitle      : ''
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

    _renderDropdownLabel = () => {
        if (this.state.confidValue || this.state.confidFocus) {
            return (
                <Text style={[poststyle.label, this.state.confidFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

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

    _streetValidation = () => {
        const { username } = this.state;
        let reg = /^[a-zA-Z0-9.\_$@*!]{3,30}$/;
        if (reg.test(username) === false) {
            return false;
        }
        return true;
    }

    _navigateToPreloadPage = () => {
        const { navigation } = this.props;
        navigation.navigate('Preload');
        store.dispatch({ type: IS_AUTHENTICATED, action: true });
    }

     _navigateToActivationPage = () => {
        const { navigation } = this.props;
        navigation.navigate('ActivationPage');
        store.dispatch({ type: IS_AUTHENTICATED, action: true });
    }

    _authSignup = async () => {
        const { is_loading, root_navigation } = this.props;
        const { country, city, password1, password2, street } = this.state;
        if (
            country !== '' &&
            city !== '' &&
            password1 !== '' &&
            password2 !== '' &&
            street !== '' &&
            this._passwordValidation() &&
            this._cityValidation() &&
            this._countryValidation() &&
            this._acceptConditionValidation() &&
            this._streetValidation() &&
            this._authSignupAction()
        ){
            this.setState({ is_loading: true });
            const data = {
                country: country,
                city: city,
                street: street,
                password: password1,
                confirm_password: password2,
                device_type: 'phone',
                navigation: root_navigation,

            }



            //LoginAction(data);
            SignupAction(data);
            this.scrollListReftop.scrollToEnd({ animated: true });
        }else{
            if(street === '' && password1 ==='' && password2 ==='' && city === '' && country === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez remplir tous les champs.'});
            }

            if(street === '' && password1 !=='' && password2 !=='' && city !== '' && country !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre adresse'});
            }else if(street !== '' && password1 ==='' && password2 ==='' && city === '' && country === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays, votre ville et entrer votre mot de passe.'});
            }else if(street !== '' && city !== '' && password1 ==='' && password2 ==='' && country === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays et saisir votre mot de passe.'});
            }else if(street !== '' && city !== '' && country !== '' && password1 ==='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre mot de passe et le confirmer.'});    
            }else if(street !== '' && city !== '' && country !== '' && password1 !=='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez confitmer votre mot de passe.'});
                
            }else if(street !== '' && city !== '' && country !== '' && password2 !=='' && password1 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez entrer votre mot de passe.'});
            }else if(street !== '' && city === '' && password1 ==='' && password2 ==='' && country !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre ville et saisir votre mot de passe.'});
            }

            if(country === '' && password1 !=='' && password2 !=='' && city !== '' && street !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays'})
            }else if(country !== '' && password1 ==='' && password2 ==='' && city === '' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre ville, saisir votre adresse et votre mot de passe.'});
            }else if(country !== '' && city !== '' && password1 ==='' && password2 ==='' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre adresse et votre mot de passe.'});
            }else if(country !== '' && city !== '' && street !== '' && password1 ==='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre mot de passe et le confirmer.'});
            }else if(country !== '' && city !== '' && street !== '' && password1 !=='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez confimer votre mot de passe.'});
            }else if(country !== '' && city !== '' && street !== '' && password2 !=='' && password1 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez entrer votre mot de passe.'});
            } 
                
            if(city === '' && password1 !=='' && password2 !=='' && country !== '' && street !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez schoisir votre ville.'});
            }else if(city !== '' && password1 ==='' && password2 ==='' && country === '' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays, saisir votre adresse et votre mot de passe.'});
            }else if(city !== '' && country !== '' && password1 ==='' && password2 ==='' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre adresse et votre mot de passe.'});
            }else if(city !== '' && country !== '' && street !== '' && password1 ==='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre mot de passe et le confirmer.'});
            }else if(city !== '' && country !== '' && street !== '' && password1 !=='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez confimer votre mot de passe.'});
            }else if(city !== '' && country !== '' && street !== '' && password2 !=='' && password1 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez entrer votre mot de passe.'});
            }   

            if(password1 === '' && city !== '' && password2 !=='' && country !== '' && street !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez saisir votre mot de passe.'});
            }else if(password1 !== '' && country ==='' && city ==='' && street === '' && password2 === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays, votre ville, saisir votre adresse et confirmer votre mot depasse.'});
            }else if(password1 !== '' && country !== '' && city ==='' && street ==='' && password2 === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre ville, votre adresse et confirmer votre mot de passe.'});
            }else if(password1 !== '' && country !== '' && city !== '' && street ==='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez entrer votre adresse et confirmer votre mot de passe.'});
            }else if(password1 !== '' && city !== '' && city !== '' && street !=='' && password2 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez confimer votre mot de passe.'});
            }
            
            if(password2 === ''  && city !== '' && password1 !=='' && country !== '' && street !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez confirmer votre mot de passe.'});
            }else if(password2 !== '' && city ==='' && password1 ==='' && country === '' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre pays, votre ville, entrer votre adresse et votre mot de passe.'});
            }else if(password2 !== '' && country !== '' && city ==='' && password1 ==='' && street === ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre ville, votre adresse et entrer votre mot de passe.'});
            }else if(password2 !== '' && country !== '' && street !== '' && city ==='' && password1 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez choisir votre ville et entrer votre mot de passe.'});
            }else if(password1 !== '' && city !== '' && city !== '' && street !=='' && password1 ===''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez entrer votre mot de passe.'});
            }   

            if(street !== '' && password1 !=='' && password2 !=='' && city !== '' && country !== '' && !this._passwordValidation()){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Les mots de passe sont différents.'});
            }

            if(this._passwordValidation() && !this._acceptConditionValidation() && street !== '' && password1 !=='' && password2 !=='' && city !== '' && country !== ''){
                this.setState({is_alert:true});
                this.setState({alert_subtitle:'Veuillez lire et accepter les conditions d\'utilisation et la police de confidentialité.'});
            }

        }

    }

    _closeAlert = () => {
        this.setState({
            is_alert: false 
        });
        store.dispatch({ type: IS_AUTH_ERROR, value: false });
        store.dispatch({ type: IS_LOADING, value: false });
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render() {
        const { is_loading } = this.props;
        const { 
            password1Visible, 
            password2Visible, 
            acceptCondition, 
            confidFocus, 
            street,
            country,
            gender,
            city,
            is_alert, 
            alert_title, 
            alert_subtitle 
        } = this.state;
        return (
            <View style={[styles.card, loginstyle.containerSignup]}>
                <ScrollView
                    ref={(ref) => { this.scrollListReftop = ref }}>
                    <ImageBackground
                    source={require('../../assets/images/background.jpg')}
                        style={[loginstyle.itemslidersignup]}
                        >
                        <View style={loginstyle.containersignup}>
                            <Text style={[styles.textBold, loginstyle.titlesignup]}>Rejoignez-nous maintenant!</Text>


                            <View style={loginstyle.selectcontainer}>
                                {this._renderDropdownLabel}
                                <Dropdown
                                    style={[loginstyle.dropdown, confidFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                    containerStyle={loginstyle.containeritemdrop}
                                    iconStyle={loginstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={countryselection}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!confidFocus ? 'Choisir votre Pays' : '...'}
                                    value={country}
                                    onFocus={() => this.setState({ confidFocus: true })}
                                    onBlur={() => this.setState({ confidFocus: false })}
                                    onChange={item => this.setState({ country: item })}
                                    renderLeftIcon={() => (<Foundation name='map' style={loginstyle.dropdownicon} />)}
                                />
                            </View>

                            <View style={loginstyle.selectcontainer}>
                                {this._renderDropdownLabel}
                                <Dropdown
                                    style={[loginstyle.dropdown, confidFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                    containerStyle={loginstyle.containeritemdrop}
                                    iconStyle={loginstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={cityselection}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!confidFocus ? 'Choisir votre Ville' : '...'}
                                    value={city}
                                    onFocus={() => this.setState({ confidFocus: true })}
                                    onBlur={() => this.setState({ confidFocus: false })}
                                    onChange={item => this.setState({ city : item })}
                                    renderLeftIcon={() => (<Foundation name='map' style={loginstyle.dropdownicon} />)}
                                />
                            </View>
                            

                            <View style={loginstyle.selectcontainer}>
                                {this._renderDropdownLabel}
                                <Dropdown
                                    style={[loginstyle.dropdown, confidFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[loginstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[loginstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[loginstyle.itemTextStyle, styles.text]}
                                    containerStyle={loginstyle.containeritemdrop}
                                    iconStyle={loginstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={datagender}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!confidFocus ? 'Choisir votre sexe...' : '...'}
                                    value={gender}
                                    onFocus={() => this.setState({ confidFocus: true })}
                                    onBlur={() => this.setState({ confidFocus: false })}
                                    onChange={item => this.setState({ gender: item })}
                                    renderLeftIcon={() => (<Foundation name='male-female' style={loginstyle.dropdownicon} />)}
                                />
                            </View>

                            <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup1, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Mot de passe'
                                    secureTextEntry={!password2Visible}
                                    onChangeText={(val) => {this.setState({password1:val})}}
                                    editable={is_loading ? false : true}
                                />
                                <View style={loginstyle.blockhidepass}>
                                    <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePass2Visible}>
                                        <Entypo 
                                            name={password2Visible ? 'eye-with-line' : 'eye'} 
                                            style={loginstyle.iconhidepasssiginup}/>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup1, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Confirmez Mot de passe'
                                    secureTextEntry={!password2Visible}
                                    onChangeText={(val) => {this.setState({password2:val})}}
                                    editable={is_loading ? false : true}
                                />
                                <View style={loginstyle.blockhidepass}>
                                    <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePass2Visible}>
                                        <Entypo 
                                            name={password2Visible ? 'eye-with-line' : 'eye'} 
                                            style={loginstyle.iconhidepasssiginup}/>
                                    </TouchableOpacity>
                                </View>
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
                                    En créant votre compte, vous acceptez les
                                    <TouchableOpacity onPress={this._redirectPolicy.bind(this, 'https://japapmessenger.com/terms/terms')}>
                                        <Text style={[styles.text, loginstyle.conditionlink]}> conditions </Text>
                                    </TouchableOpacity>
                                    d'utilisations et de
                                    <TouchableOpacity onPress={this._redirectPolicy.bind(this, 'https://japapmessenger.com/terms/privacy-policy')}>
                                        <Text style={[styles.text, loginstyle.conditionlink]}> confidentialités </Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>

                            <View style={loginstyle.footersignup}>
                                <TouchableOpacity
                                    disabled={is_loading ? true : false}
                                    style={loginstyle.btnsignup}
                                    onPress={this._authSignup}>
                                    {
                                        is_loading ?
                                            <View style={loginstyle.loaderbtn}>
                                                <ActivityIndicator size="small" color="#fff" />
                                            </View>
                                            :
                                            <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Créer maintenant</Text>
                                    }
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ImageBackground>
                </ScrollView>

                {/* Manage Error Alert */}
                <AwesomeAlert
                    show={is_alert}
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
        is_loading: state.loader.is_loading,
        root_navigation: state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(signupForm2);