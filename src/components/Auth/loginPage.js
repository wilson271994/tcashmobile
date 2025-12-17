import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, Image, TextInput, Modal, TouchableOpacity, ActivityIndicator, ImageBackground, StatusBar } from 'react-native';
import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { IS_AUTHENTICATED, IS_LOADING, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { LoginAction, checkAuthDataAction } from '../../reducers/actions';
import { ScrollView } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import GradientBackground from '../Gradient/Gradient';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_login: false,
            username: '',
            password: '',
            passwordVisible: false,
            is_alert: false,
            alert_title: 'Erreur dans le formulaire!',
            alert_subtitle: '',
        }
    }

    componentDidMount() {
        checkAuthDataAction();
    }

    _openLogin = () => {
        this.setState({ is_login: !this.state.is_login });
    }

    _togglePassVisible = () => {
        this.setState({ passwordVisible: !this.state.passwordVisible });
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
        const { password, username } = this.state;
        if (username !== '' && password !== '') {
            this.setState({ is_loading: true });
            const data = JSON.stringify({
                username: username,
                password: password
            });
            LoginAction(data);
        } else if (username === '') {
            this.setState({ is_alert: true });
            this.setState({ alert_subtitle: 'Veuillez saisir votre nom d\'utilisateur et votre adresse email.' })
        } else if (password === '') {
            this.setState({ is_alert: true });
            this.setState({ alert_subtitle: 'Veuillez Saisir votre mot de passe.' })
        }
    }

    _authSignup = () => {
        const { navigation } = this.props;
        store.dispatch({ type: PAGE_TITLE, value: '' })
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation })
        navigation.navigate('SignUpForm1');
    }

    _closeAlert = () => {
        this.setState({
            is_alert: false,
            is_loading: false
        });
        store.dispatch({ type: IS_AUTH_ERROR, value: false });
    }

    render() {
        const { is_loading } = this.props;
        const { is_alert, alert_title, alert_subtitle } = this.state;
        return (
                    <ScrollView style={loginstyle.ScrollView}>
                        <ImageBackground source={require('../../assets/images/background.jpg')} style={[loginstyle.itemslidersignup]}>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor="#1B497D"
                        />
                        <View style={[loginstyle.loginbox]}>

                            <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.image} />
                            <Text style={[styles.textBold, loginstyle.Text]}>Connectez-vous ici</Text>
                            <Text style={[styles.textBold, loginstyle.Text1]}>Bon retour tu m'as manqué</Text>

                            <View style={loginstyle.blocinupt}>

                                <TextInput
                                    style={[loginstyle.inputtextlogin, styles.text]}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholderTextColor='#B1B1B1'
                                    placeholder='Entrez votre email'
                                    onChangeText={(val) => { this.setState({ username: val }) }}
                                    editable={is_loading ? false : true}
                                />

                            </View>
                            <View style={loginstyle.blocinupt}>
                                <TextInput
                                    style={[loginstyle.inputtextlogin, styles.text]}
                                    placeholderTextColor='#B1B1B1'
                                    placeholder='Entrez votre Mot de passe'
                                    secureTextEntry={!this.state.passwordVisible}
                                    onChangeText={(val) => { this.setState({ password: val }) }}
                                    editable={is_loading ? false : true}
                                />
                                <View style={loginstyle.blockhidepass}>
                                    <TouchableOpacity
                                        disabled={is_loading ? true : false}
                                        onPress={this._togglePassVisible}>
                                        <Entypo
                                            name={this.state.passwordVisible ? 'eye-with-line' : 'eye'}
                                            style={loginstyle.iconhidepass} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={loginstyle.lostpassbox}>
                                <TouchableOpacity
                                    disabled={is_loading ? true : false}>
                                    <Text style={[styles.text, loginstyle.forgetpassfooter]}>Mot de passe oublier ?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={this._authSignup.bind(this)}
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

                            <Text style={[styles.textBold, loginstyle.Text2]}>Scannez pour télécharger</Text>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/qrcode.png')} style={loginstyle.code} />
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
        ...bindActionCreators({ LoginAction, checkAuthDataAction }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        state,
        is_loading: state.loader.is_loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginPage);
