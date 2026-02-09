import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { UpdateNotificationPermissionAction } from '../../../reducers/actions/index.js';
import { styles } from '../../../assets/styles/index.js';
import Toast from 'react-native-toast-message';
import { profilstyle } from '../../../assets/styles/profil.js';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5.js';
import { switchProfilHomeAction } from '../../../navigations/rootNavigation.js';

class UpdateNotify extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            receive_announce    : false,
            send_money          : false,
            receive_money       : false,
            payment_issue       : false,
            special_offer       : false,
            user_experience     : false,
        }
    }

    componentDidMount(){
        this._loadNotifInfo();
    }

    _loadNotifInfo = () => {
        const {user_infos} = this.props;
        this.setState({
            receive_announce    : user_infos.can_notif_announce,
            send_money          : user_infos.can_notif_send_money,
            receive_money       : user_infos.can_notif_receive_money,
            payment_issue       : user_infos.can_notif_error_trans,
            special_offer       : user_infos.can_notif_special_offer,
            user_experience     : user_infos.can_notif_user_feedback,
        })
    }

    _navigateToProfil = () => {
        switchProfilHomeAction(true);
    }

    _toggleReceiveAnounce = () => {
        const {receive_announce} = this.state;
        this.setState({receive_announce:!receive_announce});
    }

    _toggleSendMoney = () => {
        const {send_money} = this.state;
        this.setState({send_money:!send_money});
    }

    _toggleReceiveMoney = () => {
        const {receive_money} = this.state;
        this.setState({receive_money:!receive_money});
    }

    _togglePaymentIssueMoney = () => {
        const {payment_issue} = this.state;
        this.setState({payment_issue:!payment_issue});
    }

    _toggleSpecialOffer = () => {
        const {special_offer} = this.state;
        this.setState({special_offer:!special_offer});
    }

    _toggleUserExperience = () => {
        const {user_experience} = this.state;
        this.setState({user_experience:!user_experience});
    }

    _updateNotify = () => {
        const { navigation, user_token } = this.props;
        const {receive_announce, send_money, receive_money, payment_issue, special_offer, user_experience} = this.state;
        const data = JSON.stringify({
            token                       : user_token,
            can_notif_announce          : receive_announce,
            can_notif_send_money        : send_money,
            can_notif_receive_money     : receive_money,
            can_notif_error_trans       : payment_issue,
            can_notif_special_offer     : special_offer,
            can_notif_user_feedback     : user_experience,
        })
        UpdateNotificationPermissionAction(data, navigation)
    }

    render() {
        const {user_infos, is_loading, site_infos} = this.props;
        const { 
            receive_announce,
            send_money,
            receive_money,
            payment_issue,
            special_offer,
            user_experience
        } = this.state;
        return (
            <View style={profilstyle.containerform}>
                <ImageBackground 
                    source={require('../../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={profilstyle.scroolviecontainer}>
                        <View style={profilstyle.headerform}>
                            <TouchableOpacity onPress={this._navigateToProfil}
                                style={profilstyle.closeButton}>
                                <Image 
                                    source={require('../../../assets/images/back.png')} 
                                    style={profilstyle.closeicon} 
                                />
                            </TouchableOpacity>
                            <Text style={[styles.textBold, profilstyle.titleheader]}>Paramètrages des notifications</Text>
                        </View>

                        <View style={profilstyle.formcontainer}>
                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>Annonces</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabe]}>Restez informé des dernières fonctionnalités, annonces et nouvelles passionnantes.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._toggleReceiveAnounce}
                                        style={[profilstyle.checkbtn, receive_announce ? profilstyle.ischeckbtn : '']}>
                                        {
                                            receive_announce ? 
                                                <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                            :null
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>Envoie d'argent</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabel]}>Recevez une notification par e-mail chaque fois que vous effectuez un paiement.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._toggleSendMoney}
                                        style={[profilstyle.checkbtn, send_money ? profilstyle.ischeckbtn : '']}>
                                            {
                                                send_money ?
                                                    <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                                :null
                                            }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>Paiemens reçus</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabel]}>Envoie-moi un email quand je reçois un paiement.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._toggleReceiveMoney}
                                        style={[profilstyle.checkbtn, receive_money ? profilstyle.ischeckbtn : '']}>
                                            {
                                                receive_money ?
                                                    <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                                :null
                                            }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>J'ai un problème avec un paiement.</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabel]}>Prévenez-moi par email s'il y a un problème avec un paiement.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._togglePaymentIssueMoney}
                                        style={[profilstyle.checkbtn, payment_issue ? profilstyle.ischeckbtn : '']}>
                                            {
                                                payment_issue ?
                                                    <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                                :null
                                            }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>Offres spéciales.</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabel]}>Obtenez des offres exclusives de dernière minute directement de notre part.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._toggleSpecialOffer}
                                        style={[profilstyle.checkbtn, special_offer ? profilstyle.ischeckbtn : '']}>
                                            {
                                                special_offer ?
                                                    <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                                :null
                                            }
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={profilstyle.formcheckitem}>
                                <View style={profilstyle.labelcheckitem}>
                                    <Text style={[styles.textBold, profilstyle.label]}>Revue de l'activité.</Text>
                                    <Text numberOfLines={1} style={[styles.text, profilstyle.sublabel]}>Parlez-nous de votre expérience de paiement pour aider à guider d'autres utilisateurs.</Text>
                                </View>
                                <View style={profilstyle.checkbtncont}>
                                    <TouchableOpacity onPress={this._toggleUserExperience}
                                        style={[profilstyle.checkbtn, user_experience ? profilstyle.ischeckbtn : '']}>
                                            {
                                                user_experience ?
                                                    <FontAwesome5Icon name='check'  style={profilstyle.ischeckicon} />
                                                :null
                                            }
                                    </TouchableOpacity>
                                </View>
                            </View>
                    
                            <TouchableOpacity onPress={this._updateNotify} 
                                style={profilstyle.submitButton}
                                disabled={is_loading ? true : false}
                            >
                                {
                                    is_loading ?
                                        <ActivityIndicator size="small" color="#fff" />
                                    :
                                        <Text style={[styles.textBold, profilstyle.submitBtnText]}>Enregistrer</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </ScrollView> 
                </ImageBackground>
            </View>
        );
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            UpdateNotificationPermissionAction,
            switchProfilHomeAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading      : state.loader.is_loading,
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        site_infos      : state.auth.site_infos,
        transaction_fee : state.trans.transaction_fee
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(UpdateNotify);