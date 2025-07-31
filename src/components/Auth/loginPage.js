import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput, Modal,TouchableOpacity, ActivityIndicator, ImageBackground, StatusBar} from 'react-native';
import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import Entypo  from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { LoginAction, checkAuthDataAction } from '../../reducers/actions';
import { ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            is_login:false,
            username:'',
            password:'',
            passwordVisible:false,
           is_loading:false,
            is_alert:false, 
            alert_title:'Erreur dans le formulaire!',
            alert_subtitle:'',
        }
    }

    componentDidMount(){
        checkAuthDataAction();
    }
    
    _openLogin = () => { 
        this.setState({is_login:!this.state.is_login});
    }

    _togglePassVisible = () => {  
        this.setState({passwordVisible:!this.state.passwordVisible});
    } 

    _emailValidation = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
        }
    }
        
    _authSignin = async () => {
        const {password, username} = this.state;
        if(username !== '' && password !== ''){
            this.setState({is_loading:true});
            const data = {
                username:username,
                password:password
            }
            LoginAction(data);
        }else if(username === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Veuillez saisir votre adresse email.'})
        }else if(password === ''){
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Veuillez Saisir votre mot de passe.'})
        }
    } 

    _authSignup = () => {
        const {navigation} = this.props;
        store.dispatch({type:PAGE_TITLE, value:'Créer votre Compte'})
        store.dispatch({type:ROOT_NAVIGATION, value:navigation})
        navigation.navigate('SignUpForm1');
    }

    _closeAlert = () => {
        this.setState({
            is_alert:false,
            is_loading:false
        });
        store.dispatch({type:IS_AUTH_ERROR, value:false});
    }

    render(){
        const {is_auth_error, auth_error_message} = this.props;
        const {is_alert, alert_title, alert_subtitle, is_loading} = this.state;
        return (
            <ScrollView>  
                <StatusBar 
                barStyle="dark-content" 
                 backgroundColor="#1B497D"
                />
                <ImageBackground 
               
                    style={[loginstyle.itemslider]} 
                    >
                    <View style={[loginstyle.loginbox]}>
                    
                
                        
                        <Text style={[styles.textBold, loginstyle.entetelogin]}>Votre email</Text>
                        <View style={loginstyle.blocinupt}>
                        
                            <FontAwesome name='user' style={loginstyle.iconloginuser}/>
                            <TextInput
                                style={[loginstyle.inputtextlogin, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#fff'
                                placeholder='Entrez votre email'
                                onChangeText={(val) => {this.setState({username:val})}}
                                editable={is_loading ? false : true}
                            />
                            
                        </View>
                        <Text style={[styles.textBold, loginstyle.entetelogin]}>Mot de passe</Text>
                        <View style={loginstyle.blocinupt}>
                            <FontAwesome name='lock' style={loginstyle.iconloginuser}/>
                            <TextInput
                                style={[loginstyle.inputtextlogin, styles.text]}
                                placeholderTextColor='#fff'
                                placeholder='Entrez votre Mot de passe'
                                secureTextEntry={!this.state.passwordVisible}
                                onChangeText={(val) => {this.setState({password:val})}}
                                editable={is_loading ? false : true}
                            />
                            <View style={loginstyle.blockhidepass}>
                                <TouchableOpacity 
                                    disabled={is_loading ? true : false}
                                    onPress={this._togglePassVisible}>
                                    <Entypo 
                                        name={this.state.passwordVisible ? 'eye-with-line' : 'eye'} 
                                        style={loginstyle.iconhidepass}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={loginstyle.lostpassbox}>
                            <TouchableOpacity 
                                disabled={is_loading ? true : false}>
                                <Text style={[styles.text, loginstyle.forgetpassfooter]}>Mot de passe oublier ?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={this._authSignup}
                                disabled={is_loading ? true : false}
                                style={loginstyle.signupfooter}>
                                <Text style={[styles.text, loginstyle.signupfootertext]}>Inscription</Text>
                            </TouchableOpacity>
                        </View> 

                        <View style={loginstyle.footerlogin}>
                            <TouchableOpacity 
                                disabled={is_loading ? true : false}
                                style={loginstyle.btnsubmit} 
                                onPress={this._authSignin}>
                            {
                                is_loading ?
                                    <View style={loginstyle.loaderbtn}>
                                        <ActivityIndicator size="small" color="#fff" />
                                    </View>
                                :
                                    <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Connexion</Text>
                            }
                            </TouchableOpacity>
                        </View>

                       
                    </View>
                </ImageBackground>

                
                {/* Manage Error Alert */}
                <AwesomeAlert
                    show={false}
                    title={alert_title}
                    titleStyle={[styles.textBold, styles.titlealert]}
                    message={auth_error_message ? auth_error_message : alert_subtitle}
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
        );
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dispatch,
      ...bindActionCreators({LoginAction, checkAuthDataAction}, dispatch),
    }
};

const mapStateToProps = (state) => {
   return {
      state,
      is_auth_error:state.auth.is_auth_error,
      auth_error_message:state.auth.auth_error_message,
   }
 }

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginPage);
