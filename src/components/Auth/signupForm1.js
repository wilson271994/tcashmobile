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
import { Dropdown } from 'react-native-element-dropdown';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';

const datagender = [ 
    { label: 'Masculin', value: '0' },
    { label: 'Féminin', value: '1' },
];

const account = [ 

    { label: 'Particulier', value:'2'},
    {label: 'Entreprise', value:'2'},
    {label: 'Etudiant', value:'2'},
    {label: 'Enseignant', value:'2'},
    {label: 'Consultant', value:'2'},
   

];

class SignupForm1 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password1:'',
            password2:'',
            acceptCondition:false,
            password1Visible:false,
            password2Visible:false,
            confidFocus:false,
            gender:'',
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


    _navigateToForm2 = () => {
        const {navigation} = this.props;
        navigation.navigate('SignupForm2');
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
                    source={require('../../assets/images/background.jpg')}
                        style={[loginstyle.itemslidersignup]}
                        >  
                        <View style={loginstyle.containersignup}>
                            <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.iconmenup1} />
                            <Text style={loginstyle.text1}>Créer un compte</Text>
                            <Text style={loginstyle.text4}>Créez un compte T-cash et profitez</Text>

                          
                            <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder="Nom d'utilisateur"
                                    onChangeText={(val) => {this.setState({email:val})}}
                                    editable={is_loading ? false : true}
                                />
                            </View>

                             <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Votre nom'
                                    onChangeText={(val) => {this.setState({email:val})}}
                                    editable={is_loading ? false : true}
                                />
                            </View>

                             <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Votre prénom'
                                    onChangeText={(val) => {this.setState({email:val})}}
                                    editable={is_loading ? false : true}
                                />
                            </View>

                             <View style={loginstyle.blocinupt2}>
                                <TextInput
                                    style={[loginstyle.inputtextsignup, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Votre Adresse Email'
                                    onChangeText={(val) => {this.setState({email:val})}}
                                    editable={is_loading ? false : true}
                                />
                            </View>

                            <View style={loginstyle.footersignup}>
                                <TouchableOpacity 
                                    disabled={is_loading ? true : false}
                                    style={loginstyle.btnnext} 
                                    onPress={this._navigateToForm2}>
                                {
                                    is_loading ?
                                        <View style={loginstyle.loaderbtn}>
                                            <ActivityIndicator size="small" color="#fff" />
                                        </View>  
                                    :
                                        <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Suivant</Text>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(SignupForm1);