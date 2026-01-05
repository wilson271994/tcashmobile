import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView, ImageBackground, ScrollView, StatusBar } from 'react-native';

import { styles } from '../../assets/styles';
import { loginstyle } from '../../assets/styles/login';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AccountActivationAction } from '../../reducers/actions';
import GradientBackground from '../Utils/Gradient';


class activationPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      is_alert: false,
      alert_title: '',
      alert_subtitle: '',
      confirmationCode: '',
    };
  }

  componentDidMount() {

  }

  _activateAccount =  async () => {
    const { root_navigation } = this.props;
    const { confirmationCode } = this.state;
    const signup_info = AsyncStorage.getItem('signupInfo');
    if (confirmationCode != '' && signup_info != null) {
      const signup_info_json = JSON.parse(signup_info);
      const data = {
        confirmationCode: confirmationCode,
        email: signup_info_json.email,
        navigation: root_navigation
      }
      AccountActivationAction(data);
    } else {
      this.setState({ is_alert: true });
      this.setState({ alert_subtitle: 'Erreur de donnée!' })
      this.setState({ alert_subtitle: 'Veuillez saisir le code que vous avez reçu par email.' })
    }
  }
  render() {
    const { is_loading, _switchToPhoneConfirm } = this.props;
    const { is_alert, alert_title, alert_subtitle } = this.state;
    return (
      <GradientBackground style={loginstyle.background}>
        <SafeAreaView style={loginstyle.safeArea}>
          <View style={loginstyle.container1}>
            <Text style={[styles.text, loginstyle.titleText]}>Vérification de l'Email</Text>
            <Text style={[styles.text, loginstyle.instructionText]}>
              Consultez vos e-mails et rentrez le code reçu dans la case ci-dessous pour activer votre compte. Si vous ne voyez pas l'e-mail , vérifiez vos spams.
            </Text>

            <View style={loginstyle.inputContainer}>
              <TextInput
                style={[styles.text, loginstyle.input]}
                placeholder="Code de confirmation"
                placeholderTextColor="#999"
                onChangeText={(confirmationCode) => this.setState({ confirmationCode })}
                value={this.state.confirmationCode}
                keyboardType="default"
              />
            </View>

            <TouchableOpacity
              onPress={this._activateAccount}
              disabled={is_loading ? true : false}
              style={loginstyle.confirmButton}>
              {
                is_loading ?
                  <View style={loginstyle.loaderbtn}>
                    <ActivityIndicator size="large" color="#fff" />
                  </View>
                  :
                  <Text style={[styles.text, loginstyle.confirmButtonText]}>Terminer 3/3</Text>
              }
            </TouchableOpacity>

            <Text style={[styles.text, loginstyle.sendText]}>Vous n'avez pas reçu de code?</Text>
            <TouchableOpacity style={loginstyle.resendLink}>
              <Text style={[styles.text, loginstyle.resendText]}> Renvoyer</Text>
            </TouchableOpacity>

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
        </SafeAreaView>
      </GradientBackground>
    );
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

export default connect(mapStateToProps, mapDispatchToProps, null)(activationPage);