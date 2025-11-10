import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, TextInput,TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView} from 'react-native';
import  {styles}  from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountActivationAction } from '../../reducers/actions';

class activationPage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            code:'',
            is_alert:false,
            alert_title:'',
            alert_subtitle:''
        } 
    };

    componentDidMount(){

    }

    _activateAccount = () => {
        const {root_navigation} = this.props;
        const {code} = this.state;
        const signup_info = AsyncStorage.getItem('signupInfo');
        if(code != '' && signup_info != null){
            const signup_info_json = JSON.parse(signup_info);
            const data = {
                code:code,
                email:signup_info_json.email,
                navigation:root_navigation
            }
            AccountActivationAction(data);
        }else{
            this.setState({is_alert:true});
            this.setState({alert_subtitle:'Erreur de donnée!'})
            this.setState({alert_subtitle:'Veuillez saisir le code que vous avez reçu par email.'})
        }
    }

    _backToLogin = () => {
        const {root_navigation} = this.props;
        root_navigation.navigate(' ');
    }

    render(){
        const {is_loading} = this.props;
        const {is_alert, alert_title, alert_subtitle} = this.state;
        return(
            <View style={[styles.card, loginstyle.containerActivation]}>
                <ImageBackground 
                    style={[loginstyle.itemslidersignup]}
                    source={require('../../assets/images/background.jpg')}> 
                        <ScrollView 
                            ref={(ref) => {this.scrollListReftop = ref}}
                            style={loginstyle.formblocksignup}>
                            {
                                is_loading ?
                                    <ProgressBar 
                                        indeterminate 
                                        backgroundColor="#fff" 
                                        height={3}/>  
                                :null
                            } 
                            <Text style={[styles.textBold, loginstyle.titlesignup, {color:'#fff'}]}>Finalisez la création de votre compte!</Text>

                            <View>
                                <Text style={[styles.text, loginstyle.subtitlelogin]}>Un code vous a été envoyé dans votre boite mail, vérifier le dans vos SPAMS s'il ne se trouve pas dans la boite de réception principale. </Text>
                                <Text style={[styles.text, loginstyle.subtitlelogin]}>Après avoir confirmé votre adresse email, cliquez sur <Text style={loginstyle.subtitlecolor}>se connecter!</Text></Text>
                            </View>

                            <View style={loginstyle.footersignup}>
                                <TouchableOpacity 
                                    disabled={is_loading ? true : false}
                                    style={loginstyle.btnsignup} 
                                    onPress={this._backToLogin}>
                                {
                                    is_loading ?
                                        <View style={loginstyle.loaderbtn}>
                                            <ActivityIndicator size="large" color="#fff" />
                                        </View>
                                    :
                                        <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>Se Connecter</Text>
                                }
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                </ImageBackground>

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
                    cancelText="Annuler"
                    confirmText="Confirmer"
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
        ...bindActionCreators({AccountActivationAction}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading:state.loader.is_loading,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(activationPage);