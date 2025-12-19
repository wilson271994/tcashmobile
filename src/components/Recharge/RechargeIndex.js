import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { switchHeaderAction } from '../../reducers/actions/index.js';
import { rechargestyle } from '../../assets/styles/recharge.js';


class RechargeIndex extends PureComponent {
  state = {
    montant: '',
    numero: '+237 **** 964',
    typeRecharge: 'gratuite', // 'gratuite' ou 'payante'
    balanceVisible: false,
  };

  _navigateToHome = () => {
    const { navigation } = this.props;
    store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
    navigation.navigate(' ');
  }

  toggleBalanceVisibility = () => {
    this.setState(prevState => ({ balanceVisible: !prevState.balanceVisible }));
  };

  render() {
    const { montant, numero, typeRecharge, balanceVisible } = this.state;

    return (
      <ScrollView style={rechargestyle.container}>

        <View style={rechargestyle.header}>
          <TouchableOpacity 
          onPress={this._navigateToHome}
          style={rechargestyle.closeButton}>
            <Text style={rechargestyle.closeText}>×</Text>
          </TouchableOpacity>
          <Text style={rechargestyle.title}>Recharger votre compte T_cash</Text>
        </View>


        <View style={rechargestyle.section}>
          <Text style={rechargestyle.label}>Montant à recharger</Text>
          <View style={rechargestyle.inputContainer}>
            <Text style={rechargestyle.currency}>XAF</Text>
            <TextInput
              style={rechargestyle.input}
              placeholder="0"
              value={montant}
              onChangeText={text => this.setState({ montant: text })}
              keyboardType="numeric"
            />
            <Text style={rechargestyle.gratuitText}>Gratuit</Text>
          </View>
          <TouchableOpacity
            style={rechargestyle.visibilityToggle}
            onPress={this.toggleBalanceVisibility}
          >
            <Text style={rechargestyle.visibilityText}>
              Balance masquée, cliquer pour démasquer
            </Text>
            <Text style={rechargestyle.eyeIcon}>{balanceVisible ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>


        <View style={rechargestyle.section}>
          <Text style={rechargestyle.label}>Moyen de recharge</Text>
          <View style={rechargestyle.paymentMethod}>
            <Image
              source={require('../../assets/images/mtn.jpg')} // Remplace par ton logo MTN
              style={rechargestyle.paymentLogo}
            />
            <View style={rechargestyle.paymentInfo}>
              <Text style={rechargestyle.paymentNumber}>{numero}</Text>
              <Text style={rechargestyle.paymentProvider}>MTN Money</Text>
            </View>
            <TouchableOpacity style={rechargestyle.changeButton}>
              <Text style={rechargestyle.changeText}>Changer</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={rechargestyle.section}>
          <Text style={rechargestyle.label}>Type de recharge</Text>
          <View style={rechargestyle.radioGroup}>

            <TouchableOpacity
              style={[
                rechargestyle.radioOption,
                typeRecharge === 'gratuite' && rechargestyle.radioOptionSelected,
              ]}
              onPress={() => this.setState({ typeRecharge: 'gratuite' })}
            >
              <View style={rechargestyle.radioCircle}>
                {typeRecharge === 'gratuite' && <View style={rechargestyle.radioDot} />}
              </View>
              <View style={rechargestyle.radioContent}>
                <Image
                  source={require('../../assets/images/mtn.jpg')} // Logo MTN
                  style={rechargestyle.radioLogo}
                />
                <View>
                  <Text style={rechargestyle.radioTitle}>Recharge 100% gratuite 🔥</Text>
                  <Text style={rechargestyle.radioDescription}>
                    Ce type de recharge MTN Money, est 100% gratuite. Pas de frais côté MTN Money / pas de frais côté T_cash
                  </Text>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              style={[
                rechargestyle.radioOption,
                typeRecharge === 'payante' && rechargestyle.radioOptionSelected,
              ]}
              onPress={() => this.setState({ typeRecharge: 'payante' })}
            >
              <View style={rechargestyle.radioCircle}>
                {typeRecharge === 'payante' && <View style={rechargestyle.radioDot} />}
              </View>
              <View style={rechargestyle.radioContent}>
                <Image
                  source={require('../../assets/images/mtn.jpg')} // Logo MTN
                  style={rechargestyle.radioLogo}
                />
                <View>
                  <Text style={rechargestyle.radioTitle}>Ce type de recharge avec frais</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity style={rechargestyle.continueButton}>
          <Text style={rechargestyle.continueText}>Continuer</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      switchHeaderAction
    }, dispatch),
  }
};

const mapStateToProps = (state) => {
  return {
    user_infos: state.auth.user_infos,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(RechargeIndex);