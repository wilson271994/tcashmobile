import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView,} from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import { store } from '../../reducers/store.js';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { switchHeaderAction } from '../../reducers/actions/index.js';
import { transfertstyle } from '../../assets/styles/transfert.js';

class TransfertIndex extends PureComponent {
  state = {
    selectedOption: null,
  };

   _navigateToHome = () => {
      const { navigation } = this.props;
      store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
      navigation.navigate(' ');
    }

  _handleOptionPress = (optionId) => {
    const { navigation } = this.props;

    this.setState({ selectedOption: optionId });

    switch (optionId) {
      case 1:
        navigation.navigate('Bank'); 
        break;
      case 2:
        navigation.navigate('Momo'); 
        break;
      case 3:
        navigation.navigate('TransfertTcash'); 
        break;
      case 4:
        navigation.navigate('RechargeCredit'); 
        break;
      default:
        break;
    }
  };

  renderOption = (id, iconSource, title, description) => {
    const isSelected = this.state.selectedOption === id;

    return (
      <TouchableOpacity
        style={[
          transfertstyle.optionCard,
          isSelected && transfertstyle.optionCardSelected,
        ]}
        onPress={() => this._handleOptionPress(id)}
      >
        <Image source={iconSource} style={transfertstyle.optionIcon} />
        <View style={transfertstyle.optionTextContainer}>
          <Text style={transfertstyle.optionTitle}>{title}</Text>
          <Text style={transfertstyle.optionDescription}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView style={transfertstyle.container}>
        <ScrollView>

          <View style={transfertstyle.header}>
            <TouchableOpacity
              onPress={this._navigateToHome}
              style={transfertstyle.backButton}
            >
              <Text style={transfertstyle.backArrow}>×</Text>
            </TouchableOpacity>
            <Text style={transfertstyle.title}>Transfert</Text>
          </View>


          <Text style={transfertstyle.subtitle}>
            Quel transfert souhaitez-vous effectuer ?
          </Text>


          <View style={transfertstyle.optionsContainer}>
            {this.renderOption(
              1,
              require('../../assets/images/bank.png'),
              'Transfert Bancaire',
              'Allow tcash user to make bank transfer'
            )}

            {this.renderOption(
              2,
              require('../../assets/images/mtn.jpg'),
              'Mobile money transfert',
              'Allow tcash user to transfert money from balance to mobile money wallet'
            )}

            {this.renderOption(
              3,
              require('../../assets/images/logo.png'),
              'Transfert Tcash',
              'Allow tcash user to make tcash transfer'
            )}

            {this.renderOption(
              4,
              require('../../assets/images/mtn_tcash.png'),
              'Recharge de crédit',
              'Transférer du crédit de communication à vos proches en Afrique, avec quelques clics'
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(
      {
        switchHeaderAction,
      },
      dispatch
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    user_infos: state.auth.user_infos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfertIndex);