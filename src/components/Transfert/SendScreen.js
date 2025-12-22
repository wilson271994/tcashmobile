import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, SafeAreaView, Modal, ScrollView, FlatList, Alert, PermissionsAndroid, Platform, TextInput, } from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import { store } from '../../reducers/store.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { switchHeaderAction } from '../../reducers/actions/index.js';
import { momostyle } from '../../assets/styles/momo.js';
import Contacts from 'react-native-contacts';
import { styles } from '../../assets/styles/index.js';


class SendScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      numeroTelephone: '',
      nomContact: '',
      montant: '',
      codeReduction: '',
      balanceVisible: false,
      account_number: '',
      searchQuery: '',
      selectedItem: null,
      isOpen: false,
      items: [
        { id: '1', name: 'Jacques Dumerile Etoanikoul', username: 'jacques6a18' },
        { id: '2', name: 'Jérémie Nathan Tadjo Nde', username: 'jérémiecab' },
        { id: '3', name: 'Tomeni Ngadani Kevin Loic', username: 'kevinloic44clo' },
        { id: '4', name: 'Yves Cyrille Kissebini', username: 'yves1397' },
        { id: '5', name: 'Aline Mireille Ngo', username: 'aline_mireille' },
        { id: '6', name: 'Paul Désiré Kamga', username: 'pauldkamga' },
        { id: '7', name: 'Sophie Nadia Tchoumi', username: 'sophie_nadia' },
        { id: '8', name: 'Luc Bertrand Nguimfack', username: 'lucbertrand' },
        { id: '9', name: 'Carine Merveille Fouda', username: 'carinefouda' },
        { id: '10', name: 'Emmanuel Armand Djomo', username: 'emmadjomo' },
      ],


    }
  }

  // Filtrer les éléments selon la recherche
  getFilteredItems = () => {
    const { searchQuery, items } = this.state;
    if (!searchQuery) return items;

    const lowerQuery = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.username.toLowerCase().includes(lowerQuery)
    );
  };

  // Sélectionner un élément et fermer le dropdown
  handleSelect = (item) => {
    this.setState({
      selectedItem: item,
      isOpen: false,
      searchQuery: '', // Réinitialiser la recherche
    });
  };

  _navigateTotransfert = () => {
    const { navigation } = this.props;
    store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
    navigation.navigate('Transfert');
  }


  toggleBalanceVisibility = () => {
    this.setState((prevState) => ({ balanceVisible: !prevState.balanceVisible }));
  };

  render() {
    const { user_infos } = this.props;
    const filteredItems = this.getFilteredItems();
    const { montant, codeReduction, balanceVisible, selectedItem, isOpen, searchQuery } = this.state;

    return (
      <SafeAreaView style={momostyle.container}>
        <ScrollView>

          <View style={momostyle.header}>
            <TouchableOpacity
              onPress={this._navigateTotransfert}
              style={momostyle.backArrow}>
              <Text style={momostyle.closeText}>×</Text>
            </TouchableOpacity>
            <Text style={momostyle.title}>Envoyez de l'argent</Text>
          </View>


          <Text style={momostyle.description}>
            Allow Tcash user to transfert money from balance to other user
          </Text>


          <View style={momostyle.section}>
            <Text style={momostyle.label}>Envoyer à</Text>


            <TouchableOpacity
              style={momostyle.dropdownButton}
              onPress={() => this.setState({ isOpen: true })}
            >
              <Text style={momostyle.selectedText}>
                {selectedItem ? selectedItem.name : 'Sélectionner un destinataire'}
              </Text>
              <Text style={momostyle.arrow}>▼</Text>
            </TouchableOpacity>


            <Modal
              visible={isOpen}
              animationType="slide"
              transparent={true}
              onRequestClose={() => this.setState({ isOpen: false })}
            >
              <View style={momostyle.modalOverlay}>
                <View style={momostyle.modalContent}>

                  <TextInput
                    style={momostyle.searchInput}
                    placeholder="Rechercher nom ou @username"
                    value={searchQuery}
                    onChangeText={(text) => this.setState({ searchQuery: text })}
                  />


                  <FlatList
                    data={filteredItems}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={momostyle.item}
                        onPress={() => this.handleSelect(item)}
                      >
                        <Text style={momostyle.itemName}>{item.name}</Text>
                        <Text style={momostyle.itemUsername}>{item.username}</Text>
                      </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                      <Text style={momostyle.emptyText}>Aucun résultat trouvé</Text>
                    }
                  />


                  <TouchableOpacity
                    style={momostyle.closeButton}
                    onPress={() => this.setState({ isOpen: false })}
                  >
                    <Text style={momostyle.closeText}>Fermer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>


          </View>


          <View style={momostyle.section}>
            <Text style={momostyle.label}>Combien voulez-vous envoyer ?</Text>
            <View style={momostyle.amountContainer}>
              <Text style={momostyle.currency}>CAD</Text>
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


          <Text style={momostyle.arrivalText}>Cliquez pour finaliser la transaction.</Text>


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

export default connect(mapStateToProps, mapDispatchToProps, null)(SendScreen);