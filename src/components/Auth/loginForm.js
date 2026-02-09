import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput,TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView} from 'react-native';
import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { IS_LOADING } from '../../reducers/actions/types';
import { LoginAction, checkAuthDataAction } from '../../reducers/actions';
import { switchSignupForm1Action } from '../../navigations/rootNavigation';

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
        store.dispatch({type:IS_LOADING, value:false});
    }

    _togglePassVisible = () => {  
        this.setState({passwordVisible:!this.state.passwordVisible});
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
        switchSignupForm1Action(true);
    }

    render(){
        const {is_loading} = this.props;
        const {currentyear, passwordVisible} = this.state;
        return (
            <ScrollView>  
                <ImageBackground
                    source={require('../../assets/images/background.jpg')}>
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
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Utilisateur ou adresse email'
                                    onChangeText={(val) => {this.setState({username:val})}}
                                    editable={is_loading ? false : true}
                                    autoCorrect={false}
                                    spellCheck={false}
                                />
                            </View>
                            <Text style={[styles.text, loginstyle.inputloginlabel]}>Mot de passe</Text>
                            <View style={loginstyle.blocinupt}>
                                <TextInput
                                    style={[loginstyle.inputlogin, styles.text]}
                                    placeholderTextColor='#b1b1b1'
                                    placeholder='Entrez votre Mot de passe'
                                    secureTextEntry={!passwordVisible}
                                    onChangeText={(val) => {this.setState({password:val})}}
                                    editable={is_loading ? false : true}
                                    autoCorrect={false}
                                    spellCheck={false}
                                />
                                <View style={loginstyle.blockhidepass}>
                                    <TouchableOpacity 
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePassVisible}>
                                            <FontAwesome name='eye' size={15} />
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

                    <View style={loginstyle.copyrihtcontainer}>
                        <Text style={[loginstyle.copyrtext, styles.textBold]}>© {currentyear.getFullYear()} Tous droits reservés à T-Cash.</Text>
                        <TouchableOpacity style={loginstyle.partdevbtn}>
                            <Text style={styles.text}>Dévelopé par Poly-H Technology</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({LoginAction, checkAuthDataAction, switchSignupForm1Action}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        state,
        is_loading:state.loader.is_loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginForm);
