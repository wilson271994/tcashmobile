import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet, Modal, Platform, SafeAreaView, Switch, Button, ActivityIndicator, ImageBackground, ScrollView, Linking, TouchableHighlight } from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker'; // Pour les listes déroulantes
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import { LogoutActiion, switchHeaderAction } from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';
import cover from '../../assets/images/biblio.jpg';
import { profilstyle } from '../../assets/styles/profil.js'; 
import { store } from '../../reducers/store.js';
import AwesomeAlert from 'react-native-awesome-alerts';
import { switchProfilFaqAction, switchProfilHomeAction, switchProfilUpdateInfoAction, switchProfilUpdateKycAction, switchProfilUpdateNotifAction } from '../../navigations/rootNavigation.js';

class ProfilIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            is_alert : false,
            alert_title : '',
            alert_subtitle : '',
        };

    };

    componentDidMount(){
        switchProfilHomeAction(true); 
    }

    _toggleLogout = () => {
        this.setState({
            is_alert: true,
            alert_title : 'Déconnexion du système.',
            alert_subtitle : 'Êtes-vous sûr de vouloir éffectuer cette action ?'
        });
    }

    _logOut = () => {
        const {user_token} = this.props
        const data = JSON.stringify({
            token : user_token
        })
        LogoutActiion(data);
    }

    _closeAlert = () => {
        this.setState({is_alert: false});
    }

    _fechtData = async () => {
        await switchHeaderAction(true);
    }

    _openModalTicketCreation = () => {
        this.setState({ isVisibleTckCrModal: true });
    }

    _navigateToProfilUpdate = () => {
        switchProfilUpdateInfoAction(true);
    }

    _navigateToNotifyUpdate = () => {
        switchProfilUpdateNotifAction(true);
    }

    _navigateToSupport = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate('Support');
    }

    _navigateToFaq = () => {
        switchProfilFaqAction(true);
    }

    _navigateToKYC = () => {
        switchProfilUpdateKycAction(true); 
    }


    render() {
        const { is_alert, alert_title, alert_subtitle, is_loading } = this.state;
        const { navigation } = this.props;
        const { isVisibleTckCrModal } = this.state;
        return (
            <View style={[profilstyle.container]}>
                <ScrollView contentContainerStyle={profilstyle.scrollContainer}>
                    <Text style={[styles.textItalicBold, profilstyle.sectionTitle]}>Mon Compte</Text>
                    <View style={profilstyle.bloccontainer}>
                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem} onPress={this._navigateToProfilUpdate}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/account.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Informations personnelles</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Mettre à jour nom, prenom, etc.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem} onPress={this._navigateToKYC}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/kyc.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Mise à jour du KYC</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Identifiez-vous et </Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem} onPress={this._navigateToNotifyUpdate}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/notification.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Notifications</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Gestion des notifications</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[styles.textItalicBold, profilstyle.sectionTitle]}>Paiements</Text>
                    <View style={profilstyle.bloccontainer}>
                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/visacard.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Compte Mobile Money / VISA</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Gérer vos portefeuilles</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[styles.textItalicBold, profilstyle.sectionTitle]}>Supports</Text>
                    <View style={profilstyle.bloccontainer}>
                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity onPress={this._navigateToFaq}
                                style={profilstyle.flexrowitem}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/info.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>FAQs</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Gérer vos portefeuilles</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/referral.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Affiliations</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Gestion des notifications</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[styles.textItalicBold, profilstyle.sectionTitle]}>Authentification</Text>
                    <View style={profilstyle.bloccontainer}>
                        <View style={profilstyle.paramitem}>
                            <TouchableOpacity style={profilstyle.flexrowitem} onPress={this._toggleLogout}>
                                <View style={profilstyle.containericonimg}>
                                    <Image source={require('../../assets/images/logout.png')} style={profilstyle.iconimage} />
                                </View>
                                <View style={profilstyle.labelmenucont}>
                                    <Text style={[styles.textBold, profilstyle.itemlisttext]}>Déconnexion</Text>
                                    <Text style={[styles.text, profilstyle.itemlisthelptext]}>Cloturez cette session</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* Componnent Alert */}
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
                    confirmText="Je me déconnecte"
                    confirmButtonStyle={[styles.text, styles.btnalert]}
                    confirmButtonColor="#060064"
                    onConfirmPressed={this._logOut}
                />
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({LogoutActiion}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        state,
        user_token: state.auth.user_token
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ProfilIndex);