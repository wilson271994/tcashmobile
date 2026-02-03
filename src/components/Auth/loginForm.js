import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput, Modal,TouchableOpacity, ActivityIndicator, ImageBackground, StatusBar} from 'react-native';
import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import Entypo  from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { AUTH_ERROR_MESSAGE, IS_AUTH_ERROR, IS_LOADING, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { LoginAction, checkAuthDataAction } from '../../reducers/actions';
import { ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            passwordVisible:false, 
            currentyear:new Date(),
        }
    }

    componentDidMount(){
        checkAuthDataAction(); 
        store.dispatch({type:IS_LOADING, value:false})
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
            const data = {
                username:username,
                password:password
            }
            LoginAction(data);
        }else if(username === ''){
            store.dispatch({type:IS_AUTH_ERROR, value:true});
            store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Veuillez saisir votre adresse email.'});
        }else if(password === ''){
            store.dispatch({type:IS_AUTH_ERROR, value:true});
            store.dispatch({type:AUTH_ERROR_MESSAGE, value:'Veuillez Saisir votre mot de passe.'});
        }
    } 

    _authSignup = () => {
        const {navigation} = this.props;
        store.dispatch({type:PAGE_TITLE, value:''})
        store.dispatch({type:ROOT_NAVIGATION, value:navigation})
        navigation.navigate('SignUpForm1');
    }

    _closeAlert = () => {
        store.dispatch({type:IS_AUTH_ERROR, value:false});
    }

    render(){
        const {is_loading} = this.props;
        const {currentyear} = this.state;
        return (
            <ImageBackground
                source={require('../../assets/images/background.jpg')}>
                <ScrollView>  
                    <View style={[loginstyle.containerlogin]}>
                        <View style={loginstyle.loginheader}>
                            <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.iconlogologin} />
                            <Text style={[styles.textBold, loginstyle.logintitle]}>Bienvenu sur T-Cash</Text>
                            <Text style={[styles.text,  loginstyle.loginsubtitle]}>Heureux de vous revoir.</Text>
                        </View>

                        <View style={[loginstyle.loginbox]}>
                            <Text style={[styles.text, loginstyle.inputloginlabel]}>Utilisateur ou email</Text>
                            <View style={loginstyle.blocinupt}>
                                    <TextInput
                                    style={[loginstyle.inputlogin, styles.text]}
                                    autoCapitalize="none" 
                                    autoCorrect={false}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Utilisateur ou adresse email'
                                    onChangeText={(val) => {this.setState({username:val})}}
                                    editable={is_loading ? false : true}
                                />
                                
                            </View>
                            <Text style={[styles.text, loginstyle.inputloginlabel]}>Mot de passe</Text>
                            <View style={loginstyle.blocinupt}>
                                <TextInput
                                    style={[loginstyle.inputlogin, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Entrez votre Mot de passe'
                                    secureTextEntry={!this.state.passwordVisible}
                                    onChangeText={(val) => {this.setState({password:val})}}
                                    editable={is_loading ? false : true}
                                />
                                <View style={loginstyle.blockhidepass}>
                                    <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePassVisible}>
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
                                    style={loginstyle.signupbtn}>
                                    <Text style={[styles.text, loginstyle.signupbtntext]}>Inscription</Text>
                                </TouchableOpacity>
                            </View> 

                            <TouchableOpacity 
                                disabled={is_loading ? true : false}
                                style={loginstyle.submitButton} 
                                onPress={this._authSignin}>
                            {
                                is_loading ?
                                    <ActivityIndicator size="small" color="#fff" />
                                :
                                    <Text style={[styles.textBold, loginstyle.submitBtnText]}>Connexion</Text>
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
        is_loading:state.loader.is_loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginForm);
