import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, StyleSheet, Modal, Platform, SafeAreaView, Switch, Button, ActivityIndicator, ImageBackground, ScrollView, Linking, TouchableHighlight} from 'react-native';
import Moment from 'moment';
import { SectionGrid } from 'react-native-super-grid';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker'; // Pour les listes déroulantes
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import Search from '../../screens/Search.js';
import { styles } from '../../assets/styles/index.js';
import cover from '../../assets/images/biblio.jpg';
import { profilstyle } from '../../assets/styles/profil.js';
import { store } from '../../reducers/store.js';



class ProfileIndex extends PureComponent {

  constructor(props){
    super(props); 
    this.state = {
        is_loading:false,
        searchText : 
        '',
    };

};

  state = {
    notificationsEnabled: true,
    backgroundPlayEnabled: false,
    autoplayEnabled: true,
    darkModeEnabled: false,
  };

  toggleSwitch = (name) => {
    this.setState(prevState => ({
      [name]: !prevState[name]
    }));
  };

  _navigateToSupport = () => {
    const {navigation} = this.props; 
    store.dispatch({type:ROOT_NAVIGATION, value:navigation});
    navigation.navigate('Support');
}


_closeAlert = () => {
  this.setState({
      is_alert:false,
      is_loading:false
  });
  store.dispatch({type:IS_AUTH_ERROR, value:false});
}

_fechtData = async () => {
  await switchHeaderAction(true);  


} 


  render() {
    const {is_alert, alert_title, alert_subtitle, is_loading} = this.state;
    const {navigation} = this.props; 
    return (
      <SafeAreaView style={profilstyle.container2}>
        <View style={[profilstyle.container2]}>
          <ScrollView contentContainerStyle={profilstyle.scrollContainer}>
              <TouchableOpacity>
                <View  >
                  <Image source={require('../../assets/images/account.png')} style={profilstyle.image} />
                </View>
              </TouchableOpacity>  
                <TouchableOpacity>
                  <Text style={profilstyle.sectionTitle1}>Modifier mon profil</Text>
                </TouchableOpacity>
                <View style={profilstyle.containerName}>
                <TouchableOpacity>
                <Image source={require('../../assets/images/account.png')}   color="black" style={profilstyle.icon}/>
                  <Text style={profilstyle.notif2}>full name</Text>
                </TouchableOpacity>  
              </View>

            
              <Text style={profilstyle.sectionTitle}>Paramètres</Text>
              <View style={profilstyle.containerSettings}>
                <View style={profilstyle.language}>
                  <Image source={require('../../assets/images/Globe.png')} style={profilstyle.icon2} />
                    <Text style={profilstyle.notif1}>Languages</Text> 
                      <Picker
                          selectedValue={this.state.ageLimit}
                          onValueChange={(itemValue, itemIndex) =>
                              this.setState({ ageLimit: itemValue })
                          }
                          style={profilstyle.picker}
                          >
                          <Picker.Item label="Arabe" value="Arabe" />
                          <Picker.Item label="Bahasa" value="Bahasa" />
                          <Picker.Item label="Deutsh" value="Deutsh" />
                          <Picker.Item label="English" value="English" />  
                          <Picker.Item label="Espagnol" value="Espagnol" />                          
                          <Picker.Item label="French" value="French" />
                          <Picker.Item label="Japanesse" value="Japanesse" />
                          <Picker.Item label="Portugess" value="Portugess" />

                       {/* ... autres options */}

                      </Picker>
                          
                </View>

                      <View style={profilstyle.searchcontainer}>
                          <TouchableOpacity style={styles.option}>
                          <Image source={require('../../assets/images/notification.png')} style={profilstyle.icons1} />
                            <Text style={profilstyle.notif}>Notifications</Text> 
                          </TouchableOpacity>
                      </View>

                      <TouchableOpacity style={styles.option}>
                        <View style={[profilstyle.searchcontainer]}>
                         <Image source={require('../../assets/images/Headset.png')} style={profilstyle.icons} />
                          <Text style={profilstyle.notif3}>Jouer en arrière plan</Text>
                          <Switch
                            value={this.state.backgroundPlayEnabled}
                            onValueChange={() => this.toggleSwitch('backgroundPlayEnabled')} style={profilstyle.switch}
                          />
                        </View>
                      </TouchableOpacity>

                          {/* Autres options avec switch de la même manière */}
                     
                        {/* Autres sections similaires pour Payments, Supports, etc. */}

                      
                          <TouchableOpacity style={styles.option}>
                            <View style={[profilstyle.searchcontainer]}>
                                <Icon name="play-circle-outline" size={20} style={profilstyle.icons}/>
                              
                              <Text style={profilstyle.notif3}>Lecture automatique</Text>
                              <Switch
                                value={this.state.autoplayEnabled}
                                onValueChange={() => this.toggleSwitch('autoplayEnabled')} style={profilstyle.switch}
                              />
                            </View>
                          </TouchableOpacity>


                          <TouchableOpacity style={styles.option}>
                            <View style={[profilstyle.searchcontainer]}>
                                <Icon name="moon-outline" size={20} style={profilstyle.icons}/>
                            
                              <Text style={profilstyle.notif3}>Mode sombre</Text>
                              <Switch
                                value={this.state.darkModeEnabled}
                                onValueChange={() => this.toggleSwitch('darkModeEnabled')} style={profilstyle.switch}
                              />
                            </View>
                          </TouchableOpacity>
              </View>

              <Text style={profilstyle.sectionTitle}>Payements</Text>
              <View style={profilstyle.containerSettings}> 
                <View style={profilstyle.searchcontainer}>
                  <TouchableOpacity style={styles.option}>
                  <Image source={require('../../assets/images/visacard.png')} style={profilstyle.icons1} />
                    <Text style={profilstyle.notif}>Ajouter une carte</Text> 
                  </TouchableOpacity>
                </View>

                <View style={profilstyle.searchcontainer}>
                  <TouchableOpacity style={styles.option}>
                    <Image source={require('../../assets/images/wallet.png')} style={profilstyle.icons1} />
                    <Text style={profilstyle.notif}>Autres moyens</Text> 
                  </TouchableOpacity>
                </View>              

              </View>

              <Text style={profilstyle.sectionTitle}>Supports</Text>
              <View style={profilstyle.containerSettings}> 
                <TouchableOpacity style={styles.option} 
                  onPress={this._navigateToSupport.bind(this)}>
                  
                  <View style={profilstyle.searchcontainer}> 
            
                    <Image source={require('../../assets/images/info.png')} style={profilstyle.icons4} />
                      <Text style={profilstyle.notif4}>FAQs</Text> 
                  
                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.option}>
                  <View style={profilstyle.searchcontainer}>
                    <Image source={require('../../assets/images/referral.png')} style={profilstyle.icons4} />
                      <Text style={profilstyle.notif4}>A propos de nous</Text> 
                  </View>              
                </TouchableOpacity>

              </View>

          </ScrollView>
        </View>
      </SafeAreaView>


     
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      ...bindActionCreators({
      }, dispatch),
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ProfileIndex);