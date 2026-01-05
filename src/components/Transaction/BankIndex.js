import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView, ImageBackground} from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { bankstyle } from '../../assets/styles/bank.js';

class BankIndex extends PureComponent {
  state = {
    montantSaisi: '', 
    frais: 0,
    totalPreleve: 0,
    montantRecu: 0,
    tauxChange: 1.52, // Exemple : 1 XAF = 1.52 NGN
    deviseDestination: 'NGN',
    paysDestination: 'Nigeria',
  };

 _navigateTotransfert = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfert');
    }
  
  calculerFrais = (text) => {
    const montant = parseFloat(text.replace(/[^0-9]/g, '')) || 0;

    // Exemple de règle de frais : 2% du montant + 500 FCFA fixe
    const pourcentageFrais = montant * 0.02;
    const fraisFixes = 500;
    const fraisTotaux = pourcentageFrais + fraisFixes;

    const totalPreleve = montant + fraisTotaux;
    const montantRecu = montant * this.state.tauxChange;

    this.setState({
      montantSaisi: montant.toLocaleString('fr-FR'),
      frais: fraisTotaux,
      totalPreleve: totalPreleve,
      montantRecu: montantRecu.toFixed(2),
    });
  };

  render() {
    const {
      montantSaisi,
      frais,
      totalPreleve,
      montantRecu,
      deviseDestination,
      paysDestination,
    } = this.state;

    return (
      <SafeAreaView style={bankstyle.container}>
        <ScrollView>

          <View style={bankstyle.header}>
            <TouchableOpacity 
            onPress={this._navigateTotransfert}
            style={bankstyle.backButton}>
              <Text style={bankstyle.backArrow}>×</Text>
            </TouchableOpacity>
            <Text style={bankstyle.title}>Transfert Bancaire</Text>
          </View>


          <View style={bankstyle.tabs}>
            <TouchableOpacity style={bankstyle.tabActive}>
              <Text style={bankstyle.tabTextActive}>Transfert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={bankstyle.tabInactive}>
              <Text style={bankstyle.tabTextInactive}>Bénéficiaire</Text>
            </TouchableOpacity>
          </View>

          <Text style={bankstyle.infoText}>Vous envoyez exactement</Text>


          <View style={bankstyle.amountCard}>
            <View style={bankstyle.amountRow}>
              <TextInput
                style={bankstyle.amountInput}
                value={montantSaisi}
                onChangeText={this.calculerFrais}
                keyboardType="numeric"
                placeholder="0"
              />
              <View style={bankstyle.currencyFlag}>
                <Text style={bankstyle.currencyText}>XAF</Text>
                <Text style={bankstyle.countryText}>Cameroun</Text>
              </View>
            </View>

            <Text style={bankstyle.balanceText}>Balance disponible : 48,50 FCFA</Text>

            <View style={bankstyle.feeRow}>
              <Text style={bankstyle.feeLabel}>{frais.toFixed(0)} FCFA</Text>
              <Text style={bankstyle.feeValue}>Nos Frais</Text>
            </View>

            <View style={bankstyle.feeRow}>
              <Text style={bankstyle.feeLabel}>+ {frais.toFixed(0)} FCFA</Text>
              <Text style={bankstyle.feeValue}>Total des frais</Text>
            </View>

            <View style={bankstyle.totalRow}>
              <Text style={bankstyle.totalLabel}>= {totalPreleve.toFixed(0)} FCFA</Text>
              <Text style={bankstyle.totalValue}>Montant total qui vous sera prélevé</Text>
            </View>

            <Text style={bankstyle.minAmountText}>Montant minimum 1000,00 FCFA</Text>
          </View>


          <Text style={bankstyle.recipientText}>Le bénéficiaire reçoit</Text>

          <View style={bankstyle.recipientCard}>
            <View style={bankstyle.recipientAmountRow}>
              <Text style={bankstyle.recipientAmount}>{montantRecu} ₦</Text>
              <Text style={bankstyle.recipientAmountText}>Montant total converti</Text>
            </View>

            <Text style={bankstyle.exchangeRateText}>
              Taux de change garantie (24h)
            </Text>


            <View style={bankstyle.currencySelector}>
              <Text style={bankstyle.currencyInput}>{montantRecu}</Text>
              <View style={bankstyle.currencyDropdown}>
                <Text style={bankstyle.currencyDropdownText}>| {deviseDestination}</Text>
                <Text style={bankstyle.countryDropdownText}>{paysDestination}</Text>
              </View>
            </View>
          </View>


          <View style={bankstyle.footer}>
            <TouchableOpacity style={bankstyle.continueButton}>
              <Text style={bankstyle.continueText}>Continuer</Text>
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
        user_infos:state.auth.user_infos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BankIndex);