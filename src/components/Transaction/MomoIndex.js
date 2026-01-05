import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView,Alert,PermissionsAndroid,Platform,TextInput,} from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import { store } from '../../reducers/store.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { switchHeaderAction } from '../../reducers/actions/index.js';
import { momostyle } from '../../assets/styles/momo.js';
import Contacts from 'react-native-contacts';



class MomoIndex extends PureComponent {
  state = {
    numeroTelephone: '',
    nomContact: '',
    montant: '',
    codeReduction: '',
    balanceVisible: false,
  };

_navigateTotransfert = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfert');
    }

  ouvrirSelecteurContacts = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Accès aux contacts',
            message: 'L\'application a besoin d\'accéder à vos contacts pour sélectionner un destinataire.',
            buttonPositive: 'Autoriser',
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission refusée', 'Impossible d\'accéder aux contacts.');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    Contacts.openContactPicker((contact) => {
      if (contact) {
        const phone = contact.phoneNumbers[0]?.number || '';
        const name = `${contact.givenName || ''} ${contact.familyName || ''}`.trim() || phone;

        this.setState({
          numeroTelephone: phone,
          nomContact: name,
        });
      }
    }).catch((error) => {
      console.log('Sélecteur annulé ou erreur :', error);
    });
  };

  toggleBalanceVisibility = () => {
    this.setState((prevState) => ({ balanceVisible: !prevState.balanceVisible }));
  };

  render() {
    const { numeroTelephone, nomContact, montant, codeReduction, balanceVisible } = this.state;

    return (
      <SafeAreaView style={momostyle.container}>
        <ScrollView>

          <View style={momostyle.header}>
            <TouchableOpacity 
            onPress={this._navigateTotransfert}
            style={momostyle.backButton}>
              <Text style={momostyle.backArrow}>×</Text>
            </TouchableOpacity>
            <Text style={momostyle.title}>Mobile money transfert</Text>
            <TouchableOpacity style={momostyle.closeButton}>
              <Text style={momostyle.closeText}>×</Text>
            </TouchableOpacity>
          </View>


          <Text style={momostyle.description}>
            Allow neero user to transfert money from balance to mobile money wallet
          </Text>


          <View style={momostyle.section}>
            <Text style={momostyle.label}>Envoyer à</Text>
            <TouchableOpacity
              style={momostyle.phoneInput}
              onPress={this.ouvrirSelecteurContacts}
            >
              <View style={momostyle.phoneContent}>
                {nomContact ? (
                  <>
                    <Text style={momostyle.selectedName}>{nomContact}</Text>
                    <Text style={momostyle.selectedNumber}>{numeroTelephone}</Text>
                  </>
                ) : (
                  <Text style={momostyle.phonePlaceholder}>
                    Entrer votre numéro de téléphone
                  </Text>
                )}
              </View>
              <Text style={momostyle.phoneArrow}>›</Text>
            </TouchableOpacity>
          </View>


          <View style={momostyle.section}>
            <Text style={momostyle.label}>Combien voulez-vous envoyer ?</Text>
            <View style={momostyle.amountContainer}>
              <Text style={momostyle.currency}>XAF</Text>
              <TextInput
                style={momostyle.amountInput}
                value={montant}
                onChangeText={(text) => this.setState({ montant: text })}
                placeholder="0"
                keyboardType="numeric"
              />
              <Text style={momostyle.gratuitText}>Gratuit</Text>
            </View>

            <TouchableOpacity
              style={momostyle.visibilityToggle}
              onPress={this.toggleBalanceVisibility}
            >
              <Text style={momostyle.visibilityText}>
                Balance masquée, cliquer pour démasquer
              </Text>
              <Text style={momostyle.eyeIcon}>{balanceVisible ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>


          <View style={momostyle.section}>
            <Text style={momostyle.label}>Un code de réduction ?</Text>
            <View style={momostyle.codeInputContainer}>
              <Text style={momostyle.codeIcon}>✓</Text>
              <TextInput
                style={momostyle.codeInput}
                placeholder="Code de réduction"
                value={codeReduction}
                onChangeText={(text) => this.setState({ codeReduction: text })}
              />
            </View>
          </View>


          <Text style={momostyle.arrivalText}>Arrivée. Quelques secondes</Text>


          <View style={momostyle.footer}>
            <TouchableOpacity style={momostyle.continueButton}>
              <Text style={momostyle.continueText}>Continuer</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(MomoIndex);