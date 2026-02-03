import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput, Modal,TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking} from 'react-native';
import  {styles}  from '../../assets/styles';
import Moment from 'moment';
import 'moment/locale/fr';
import { store } from '../../reducers/store';
import { loginstyle } from '../../assets/styles/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

class SignupForm1 extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            username        : '',
            first_name      : '',
            last_name       : '',
            email           : '',
            phone           : '',
            currentyear     : new Date(),
        } 
    };

    componentDidMount(){
        this._fillUpPersistData();
    }

    _fillUpPersistData = async () => {
        const form1data = await AsyncStorage.getItem('DataForm1');
        if(form1data !== null){
            const unpackdata = JSON.parse(form1data);
            if(unpackdata.username !== ''){
                this.setState({username:unpackdata.username})
            }
            if(unpackdata.first_name !== ''){
                this.setState({first_name:unpackdata.first_name})
            }
            if(unpackdata.last_name !== ''){
                this.setState({last_name:unpackdata.last_name})
            }
            if(unpackdata.email !== ''){
                this.setState({email:unpackdata.email})
            }
            if(unpackdata.phone !== ''){
                this.setState({phone:unpackdata.phone})
            }
        }   
    }

    _usernameValidation = () => {
        const {username} = this.state;
        const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/;
        if (regex.test(username)) {
            return true;
        }
        return false;
    }

    _emailValidation = () => {
        const {email} = this.state;
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    _navigateToLogin = () => {
        const {navigation} = this.props;
        navigation.navigate(' ');
    }

    _navigateToForm2 = async () => {
        const {navigation} = this.props;
        const {username, first_name, last_name, email, phone} = this.state;
        if(
            username !== '' && this._usernameValidation() &&
            email    !== '' && this._emailValidation()    &&
            first_name  !== '' &&
            last_name   !== '' &&
            phone       !== ''
        ){
            const data = JSON.stringify({
                username    : username,
                first_name  : first_name,
                last_name   : last_name,
                email       : email,
                phone       : phone
            });
            await AsyncStorage.setItem('DataForm1', data);
            navigation.navigate('SignUpForm2');
        }
        if(username === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre nom d\'utilisateur.',
                }
            });
        }
        if(!this._usernameValidation()){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Votre nom d\'utilisateur ne doit pas contenir des caractères spéciaux ni d\'espace.',
                }
            });
        }
        if(first_name === '' || last_name === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre nom et votre prenom.',
                }
            });
        }
        if(email === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre adresse email.',
                }
            });
        }
        if(!this._emailValidation()){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner une adresse email valide.',
                }
            });
        }
        if(phone === ''){
            Toast.show({
                'type': 'error',
                props: {
                    title: 'Une erreur c\'est produite!',
                    description: 'Veuillez renseigner votre numéro de téléphone.',
                }
            });
        }
    }

    _closeAlert = () => {
        this.setState({is_alert:false});
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render(){
        const {is_loading} = this.props;
        const {
            username,
            first_name,
            last_name,
            email,
            phone,
            currentyear
        } = this.state;
        return(
            <ImageBackground source={require('../../assets/images/background.jpg')}>  
                <ScrollView ref={(ref) => {this.scrollListReftop = ref}}>
                    <View style={[loginstyle.containersignup]}>
                        <View style={loginstyle.signupheader}>
                            <View style={loginstyle.containerlogo}>
                                <TouchableOpacity onPress={this._navigateToLogin}
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
                            <Text style={[styles.text, loginstyle.text4]}>Créez un compte T-cash et profitez</Text>
                        </View>

                        <View style={loginstyle.containerform}>
                            <Text style={[styles.text, loginstyle.label]}>Nom d'utilisateur</Text>
                            <TextInput
                                style={[loginstyle.inputform, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#b1b1b1'
                                placeholder="Nom d'utilisateur"
                                onChangeText={(val) => {this.setState({username:val})}}
                                editable={is_loading ? false : true}
                                value={username}
                            />

                            <Text style={[styles.text, loginstyle.label]}>Saisir votre Nom</Text>
                            <TextInput
                                style={[loginstyle.inputform, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#b1b1b1'
                                placeholder="Votre nom"
                                onChangeText={(val) => {this.setState({first_name:val})}}
                                editable={is_loading ? false : true}
                                value={first_name}
                            />

                            <Text style={[styles.text, loginstyle.label]}>Saisir votre Prenom</Text>
                            <TextInput
                                style={[loginstyle.inputform, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#b1b1b1'
                                placeholder="Votre nom"
                                onChangeText={(val) => {this.setState({last_name:val})}}
                                editable={is_loading ? false : true}
                                value={last_name}
                            />

                            <Text style={[styles.text, loginstyle.label]}>Saisir votre adresse email</Text>
                            <TextInput
                                style={[loginstyle.inputform, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#b1b1b1'
                                placeholder="Votre adresse email"
                                onChangeText={(val) => {this.setState({email:val})}}
                                editable={is_loading ? false : true}
                                keyboardType="email-address"
                                value={email}
                            />
                            <Text style={[styles.text, loginstyle.label]}>Saisir votre numéro de téléphone</Text>
                            <TextInput
                                style={[loginstyle.inputform, styles.text]}
                                autoCapitalize="none" 
                                autoCorrect={false}
                                placeholderTextColor='#b1b1b1'
                                placeholder="Votre numéro de téléphone"
                                onChangeText={(val) => {this.setState({phone:val})}}
                                editable={is_loading ? false : true}
                                keyboardType="numeric"
                                value={phone}
                            />

                            <TouchableOpacity onPress={this._navigateToForm2}
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
        is_loading:state.loader.is_loading,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(SignupForm1);