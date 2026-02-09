import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { View, TouchableOpacity, Text, Image, StatusBar} from "react-native";
import StackHome from "../navigations/stack/StackHome.js";
import { styles } from "../assets/styles/index.js";  
import StackService from "../navigations/stack/StackService.js";
import StackTransaction from "../navigations/stack/StackTransaction.js";
import AuthNavigation from "../navigations/AuthNavigation.js";
import { switchHomePageAction, switchProfilPageAction, switchServicePageAction, switchTransactionPageAction } from "../navigations/rootNavigation.js";
import ProfilNavigation from "../navigations/ProfilNavigation.js";

class BaseContainer extends Component { 
        constructor(props) {
        super(props);
        this.state = {
        }
    }

    _navigateToNotification = () => {
        const {root_navigation} = this.props;
        root_navigation.navigate('Notification');
    }

    _navigateToSupport = () => {
        const {root_navigation} = this.props;
        root_navigation.navigate('Support');
    }

    render() {
        const {  
            is_home_page, 
            is_service_page,
            is_transaction_page,
            is_profil_page,
            is_authenticated, 
            user_infos, 
        } = this.props;
        return (
            <View style={styles.main}>
                <StatusBar barStyle="dark-content" backgroundColor="#5eb3a5" />
                {
                    is_authenticated ?
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.container_pp}>
                                <Image
                                    source={require('../assets/images/default_pp.png')}
                                    style={styles.pp_user}
                                />
                            </TouchableOpacity>   

                            <View style={styles.containerusername}>
                                <Text style={[styles.textBold, styles.UserText]}>{user_infos.name}</Text>
                                <View style={styles.conatinerverifystatus}>
                                    
                                    {
                                        user_infos.is_verified ?
                                            <>
                                                <Image
                                                    source={require('../assets/images/verified.png')}
                                                    style={styles.verified}
                                                />
                                                <Text style={[styles.text, styles.verifiedtext]}>vérifié</Text>
                                            </>
                                        :
                                            <>
                                                <Image
                                                    source={require('../assets/images/verified.png')}
                                                    style={styles.verified}
                                                />
                                                <Text style={[styles.text, styles.unverifiedtext]}>non vérifié</Text>
                                            </>
                                    }
                                </View>
                            </View> 

                            <TouchableOpacity onPress={this._navigateToSupport}
                                style={styles.comtainersupport}>
                                <Image
                                    source={require('../assets/images/support.png')} 
                                    style={styles.supportlogo}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._navigateToNotification}
                                style={styles.containernotif}>
                                <Image
                                    source={require('../assets/images/notification.png')}
                                    style={styles.notificationlogo}
                                />
                            </TouchableOpacity>
                        </View>
                    :null
                }

                <View style={styles.bodybase}>
                    {
                        is_authenticated ?
                            <>
                                {
                                    is_home_page ?
                                        <StackHome />
                                    : null
                                }
                                {
                                    is_service_page ?
                                        <StackService />
                                    : null
                                }
                                {
                                    is_transaction_page ?
                                        <StackTransaction />
                                    : null
                                }
                                {
                                    is_profil_page ?
                                        <ProfilNavigation />
                                    : null
                                }
                            </>
                        :
                            <AuthNavigation />
                    }
                </View>
                {
                    is_authenticated ?
                        <View style={styles.bottomNav}>
                            <TouchableOpacity
                                onPress={switchHomePageAction.bind(this, true)}
                                style={styles.navItem}>
                                <View style={[styles.activeNavItem, is_home_page ? styles.activeNavCircle : '']}>
                                    <Image 
                                        source={is_home_page ? require('../assets/images/accueil.png') : require('../assets/images/accueil-b.png')} 
                                        style={[styles.icon, is_home_page ? styles.activeicon : '']}/>
                                </View>
                                <Text style={[styles.navLabel, is_home_page ? styles.activeNavLabel : '']}>Accueil</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={switchServicePageAction.bind(this, true)}
                                style={styles.navItem}>
                                <View style={[styles.activeNavItem, is_service_page ? styles.activeNavCircle : '']}>
                                    <Image 
                                        source={is_service_page ? require('../assets/images/wallet.png') : require('../assets/images/wallet-b.png')} 
                                        style={[styles.icon, is_service_page ? styles.activeicon : '']}/>
                                </View>
                                <Text style={[styles.navLabel, is_service_page ? styles.activeNavLabel : '']}>Services</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={switchTransactionPageAction.bind(this, true)}
                                style={styles.navItem}>
                                <View style={[styles.activeNavItem, is_transaction_page ? styles.activeNavCircle : '']}>
                                    <Image 
                                        source={is_transaction_page ? require('../assets/images/transaction.png') : require('../assets/images/transaction-b.png')} 
                                        style={[styles.icon, is_transaction_page ? styles.activeicon : '']}/>
                                </View>
                                <Text style={[styles.navLabel, is_transaction_page ? styles.activeNavLabel : '']}>Transactions</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={switchProfilPageAction.bind(this, true)}
                                style={styles.navItem}>
                                <View style={[styles.activeNavItem, is_profil_page ? styles.activeNavCircle : '']}>  
                                    <Image 
                                        source={is_profil_page ? require('../assets/images/profile.png') : require('../assets/images/profile-b.png')} 
                                        style={[styles.icon, is_profil_page ? styles.activeicon : '']}/>
                                </View>
                                <Text style={[styles.navLabel, is_profil_page ? styles.activeNavLabel : '']}>Profil</Text>
                            </TouchableOpacity>
                        </View>
                    :null
                }
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ 
        switchHomePageAction, 
        switchServicePageAction,
        switchTransactionPageAction,
        switchProfilPageAction
    }, dispatch)
});

const mapStateToProps = (state) => {
    return {
        is_authenticated    : state.auth.is_authenticated,
        is_loading          : state.loader.is_loading,
        is_home_page        : state.navigation.is_home_page,
        is_service_page     : state.navigation.is_service_page,
        is_transaction_page : state.navigation.is_transaction_page,
        is_profil_page      : state.navigation.is_profil_page,
        user_infos          : state.auth.user_infos,
        user_token          : state.auth.user_token,
        user_infos          : state.auth.user_infos,
        root_navigation     : state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BaseContainer);