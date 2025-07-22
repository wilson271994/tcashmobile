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





const handleValidation = () => {
    if (!prenom || !numRue || !pays || !ville || !telephone  || !typeCompte) {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires.');
    } else {
      Alert.alert('Succès', 'Formulaire soumis avec succès !');
    }
};


const countryselection = [ 

    { label: 'Cameroun', value:'2'},
    {label: 'Canada', value:'2'},
    {label: 'Belgique', value:'2'},
    {label: 'Maroc', value:'2'},
    {label: 'Argentine', value:'2'},
    {label: 'Afrique du Sud', value:'2'},
    {label: 'Mexique', value:'2'},
    {label: 'Egypte', value:'2'},
    {label:  'France', value:'2'},
    {label: 'Sénégal', value:'2'},
    {label: 'Chine', value:'2'},
    {label: 'Inde', value:'2'},
    {label: 'Pays-Bas', value:'2'},
    {label: 'Russie', value:'2'},
    {label:'États-Unis', value:'2'},
  
];

const cityselection = [ 

    { label: 'Paris', value:'2'},
    {label: 'Marseille', value:'2'},
    {label: 'Yaounde', value:'2'},
    {label: 'Garoua', value:'2'},
    {label: 'Saint Petersburg', value:'2'},
    {label: 'Novosibirsk', value:'2'},
    {label: 'Ottawa', value:'2'},
    {label: 'Quebec', value:'2'},
    {label:  'Marrakech', value:'2'},
    {label: 'Rabat', value:'2'},
    {label: 'Fès', value:'2'},
    {label: 'Mogadishu', value:'2'},
    {label: 'Córdoba', value:'2'},
    {label: 'Rosario', value:'2'},
    {label:'Guadalajara', value:'2'},
    {label:  'Monterrey', value:'2'},
    {label: 'Alexandria', value:'2'},
    {label: 'Saint-Louis', value:'2'},
    {label: 'Shanghai', value:'2'},
    {label: 'Giza', value:'2'},
    {label:  'Louga', value:'2'},
    {label: 'Shenzhen', value:'2'},
    {label: 'Delhi', value:'2'},
    {label: 'Kolkata', value:'2'},
    {label: 'Utrecht', value:'2'},
    {label:'New York', value:'2'},
    {label: 'Los Angeles', value:'2'},
    {label: 'Anvers', value:'2'},
    {label:  'Liège', value:'2'},
    { label: 'Douala', value: '3'},
    { label:'Moscow',  value: '4'},
    { label: 'Vancouver', value: '5'},
    { label: 'Casablanca', value: '5'},
    { label: 'Dakar',  value: '7'},
    { label: 'Buenos Aires', value: '8'},
    { label: 'Mexico City', value: '9'},
    { label: 'Cairo', value: '10'},
    { label: 'Dakar',value: '11'},
    { label: 'Beijing',value: '12'},
    { label: 'Mumbai', value: '13'},
    { label: 'Amsterdam', value: '14'},
    { label: 'Washington D.C.',  value: '15'},
    { label: 'Bruxelles', value: '16'},

];





class signupForm2 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            firstname:'',
            street:'',
            phonenumber:'',
            acceptCondition:false,
            password2Visible:false,
            confidFocus:false,
            gender:'',
            country:'',
            city:'',
            account:'',
            is_alert:false,
            alert_title:'',
            alert_subtitle:''
        } 
    };

    componentDidMount(){

    }

    _togglePass1Visible = () => {  
        this.setState({password1Visible:!this.state.password1Visible});
    } 

    _togglePass2Visible = () => {  
        this.setState({password2Visible:!this.state.password2Visible});
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
        this.setState({acceptCondition:!this.state.acceptCondition});
    }

    _emailValidation = () => {
        const {email} = this.state;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(email) === false) {
            return false;
        }
        return true;
    }

    _passwordValidation = () => {
        const {password1, password2} = this.state;
        if (password1 != password2) {
            return false;
        }
        return true;
    }

    _acceptConditionValidation = () => {
        const {acceptCondition} = this.state;
        if (acceptCondition) {
            return true;
        }
        return false;
    }

    _usernameValidation = () => {
        const {username} = this.state;
        let reg = /^[a-zA-Z0-9.\_$@*!]{3,30}$/;
        if (reg.test(username) === false) {
            return false;
        }
        return true;
    }

    _navigateToPreloadPage = () => {
        const {navigation} = this.props;
        navigation.navigate('Preload');
        store.dispatch({type: IS_AUTHENTICATED, action: true});
    }

    _authSignup = async () => {
        const {is_loading, root_navigation} = this.props;
        const {country, city,  password1, password2, street} = this.state;
        if(
            country !== '' &&
            city !== '' &&
            password1 !== '' &&
                password2 !== '' &&
            street !== '' &&
            this._passwordValidation() &&
                this._cityValidation() &&
                this._countryValidation() &&
                this._acceptConditionValidation() &&
                this._dateofbirthValidation() &&
                this._streetValidation() &&
                this._authSignupAction()
        ){
            const data = {
                country:country,
                city:city,
                dateofbirth:dateofbirth,
                street:street,
                password:password1,
                confirm_password:password2,
                device_type:'phone',
                navigation:root_navigation,
                
            }

            
            //LoginAction(data);
            SignupAction(data);
            this.scrollListReftop.scrollToEnd({animated : true});
        }
        // }else if(username === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez saisir votre nom d\'utilisateur.'})
        // }else if(!this._usernameValidation()){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Nom d\'utilisateur invalid. Le nom d\'utilisateur ne doit pas contenir d\'espace ni de tirai.'})
        // }else if(password1 === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez saisir votre mot de passe.'})
        // }else if(password2 === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez confirmer votre mot de passe.'})
        // }else if(!this._passwordValidation()){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Les mots de passe sont différents.'})
        // }else if(email === ''){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez saisir votre adresse email.'})
        // }else if(!this._emailValidation()){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Votre adresse email est incorrect.'})
        // }else if(!this._acceptConditionValidation()){
        //     this.setState({is_alert:true});
        //     this.setState({alert_subtitle:'Erreur de donnée!'})
        //     this.setState({alert_subtitle:'Veuillez lire et accepter les conditions d\'utilisation et la police de confidentialité.'})
        // }
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
            <View style={[styles.card, loginstyle.containerSignup]}>
                <ScrollView 
                    ref={(ref) => {this.scrollListReftop = ref}}>
                    <ImageBackground 
                    source={require('../../assets/images/welcome.png')}
                        style={[loginstyle.itemslidersignup]}
                        >  
                        <View style={loginstyle.containersignup}>
                            <Text style={[styles.textBold, loginstyle.titlesignup, {color:'#000'}]}>Rejoignez-nous maintenant!</Text>


                          

                            <Text style={[styles.textBold, loginstyle.entetesigup]}>Votre rue</Text>
                            <View style={loginstyle.blocinupt2}>
                            <FontAwesome name='map' style={loginstyle.iconsignupuser}/>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#fff'
                                    placeholder='Votre rue'
                                    onChangeText={(val) => {this.setState({email:val})}}
                                    editable={is_loading ? false : true}
                                />
                            </View>


                          


                            <Text style={[styles.textBold, loginstyle.entetesigup]}>Votre Mot de passe</Text>
                            <View style={loginstyle.blocinupt2}>
                                <FontAwesome name='lock' style={loginstyle.iconsignupuser}/>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    placeholderTextColor='#fff'
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
                                <View style={loginstyle.bloccriterierspass}>
                                    <Text style={[styles.text, loginstyle.passwordcritariers]}> - Le mot de passe doit avoir aumoins 6 charactères.</Text>
                                    <Text style={[styles.text, loginstyle.passwordcritariers]}> - Doit contenir une lettre majuscule.</Text>
                                    <Text style={[styles.text, loginstyle.passwordcritariers]}> - Doit contenir un nombre ou un charactère spécial.</Text>
                                </View>
                            </View>

                            <View style={loginstyle.blocinupt2}>
                                <FontAwesome name='lock' style={loginstyle.iconsignupuser}/>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    placeholderTextColor='#fff'
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
                                    value={gender}
                                    onFocus={() => this.setState({confidFocus:true})}
                                    onBlur={() => this.setState({confidFocus:false})}
                                    onChange={item => this.setState({gender:item})}
                                    renderLeftIcon={() => (<Foundation name='map' style={loginstyle.dropdownicon}/>)}
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
                                    value={gender}
                                    onFocus={() => this.setState({confidFocus:true})}
                                    onBlur={() => this.setState({confidFocus:false})}
                                    onChange={item => this.setState({gender:item})}
                                    renderLeftIcon={() => (<Foundation name='map' style={loginstyle.dropdownicon}/>)}
                                />
                            </View>


                            <View style={loginstyle.containercondition}>
                                <TouchableOpacity 
                                    style={loginstyle.checkbtn}
                                    onPress={this._onChangeAcceptCondition}>
                                    {
                                        acceptCondition ?
                                            <FontAwesome name='check' style={loginstyle.checkicon}/>
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
                                    onPress={this._navigateToPreloadPage}>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(signupForm2);