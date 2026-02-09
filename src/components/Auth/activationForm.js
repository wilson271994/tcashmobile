import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, ImageBackground, ScrollView} from 'react-native';

import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountActivationAction, resentActivationCodeAction } from '../../reducers/actions';
import Toast from 'react-native-toast-message';


class activationForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            confirmationCode    : '',
            currentyear         : new Date(),
        };
    }

    _activateAccount =  async () => {
        const { confirmationCode } = this.state;
        const signup_info = await AsyncStorage.getItem('DataForm1');
        if (confirmationCode !== '' && signup_info !== null) {
            const signup_info_json = JSON.parse(signup_info);
            const data = JSON.stringify({
                code        : confirmationCode,
                email       : signup_info_json.email,
            });
            AccountActivationAction(data);
        }
        if(confirmationCode === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez saisir le code reçu par email.',
                }
            });
        }
        if(signup_info === null){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Fermez l\'application et recommencer la création de votre compte.',
                }
            });
        }
    }

    _resentActivateCode =  async () => {
        const signup_info = await AsyncStorage.getItem('DataForm1');
        if (signup_info !== null) {
            const signup_info_json = JSON.parse(signup_info);
            const data = JSON.stringify({
                email       : signup_info_json.email,
            });
            resentActivationCodeAction(data);
        }
        if(confirmationCode === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez saisir le code reçu par email.',
                }
            });
        }
        if(signup_info === null){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Fermez l\'application et recommencer la création de votre compte.',
                }
            });
        }
    }

    _navigateToForm2 = () => {
        const {navigation} = this.props;
        navigation.navigate(' ');
    }
        
    render() {
        const { is_loading } = this.props;
        const {
            currentyear,
            confirmationCode
        } = this.state;
        return (
                <ImageBackground source={require('../../assets/images/background.jpg')}> 
                    <ScrollView ref={(ref) => {this.scrollListReftop = ref}}>
                        <View style={[loginstyle.containersignup]}>
                            <View style={loginstyle.activationheader}>
                                <View style={loginstyle.logoiconcontactivation}>
                                    <Image source={require('../../assets/images/t_cash.png')} style={loginstyle.logocomp} />
                                </View>
                                <Text style={[styles.text, loginstyle.text1]}>Activation de compte</Text>
                                <Text style={[styles.text,  loginstyle.loginsubtitle]}>Vous-y êtes presque.</Text>
                            </View>

                            <View style={loginstyle.containeractivationform}>
                                <Text style={[styles.text, loginstyle.activationsubtitle]}>
                                    Consultez vos e-mails et rentrez le code reçu dans la case ci-dessous pour activer votre compte. Si vous ne voyez pas l'e-mail , vérifiez vos spams.
                                </Text>
                                
                                <Text style={[styles.text, loginstyle.label]}>Saisir le code</Text>
                                <TextInput
                                    style={[styles.text, loginstyle.inputform]}
                                    placeholder="Code de confirmation"
                                    placeholderTextColor="#999"
                                    onChangeText={(code) => this.setState({ confirmationCode:code })}
                                    value={confirmationCode}
                                    keyboardType="numeric"
                                />
                                
                                <TouchableOpacity onPress={this._activateAccount}
                                    style={loginstyle.submitButton}
                                    disabled={is_loading ? true : false}
                                >
                                    {
                                        is_loading ?
                                            <ActivityIndicator size="small" color="#fff" />
                                        :
                                            <Text style={[styles.textBold, loginstyle.submitBtnText]}>J'active mon compte</Text>
                                    }
                                </TouchableOpacity> 

                                <View style={loginstyle.resentcodecont}>
                                    <Text style={[styles.text, loginstyle.sendText]}>Vous n'avez pas reçu de code?</Text>
                                    <TouchableOpacity onPress={this._resentActivateCode}
                                        style={loginstyle.resendLink}>
                                        <Text style={[styles.text, loginstyle.resendText]}> Renvoyer</Text>
                                    </TouchableOpacity>
                                </View>
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
        ...bindActionCreators({resentActivationCodeAction, AccountActivationAction}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading: state.loader.is_loading,
        root_navigation: state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(activationForm);



