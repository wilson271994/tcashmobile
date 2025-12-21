import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import  {homestyle}  from '../../assets/styles/home.js';
import Moment from 'moment';
import { store } from '../../reducers/store';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';

class HomeIndex extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        this._fechtData();
    } 

    _fechtData = async () => {
        await switchHeaderAction(true);  
    } 

    _navigateTotransactionDetail = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('TransactionDetail');
    }

 _navigateTotransfert = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfert');
    }

    _navigateToRecharge = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Recharge');
    }

    render(){
        const {navigation} = this.props; 
        return(
            <ImageBackground style={styles.backgroundapp} 
                source={require('../../assets/images/background.jpg')}>
                <ScrollView contentContainerStyle={homestyle.scrollContainer}>
                        {/* Header home page */}
                        <View style={homestyle.header}>
                            <TouchableOpacity style={homestyle.container_pp}>
                                <Image
                                    source={require('../../assets/images/default_pp.png')}
                                    style={homestyle.pp_user}
                                />
                            </TouchableOpacity>   

                            <View style={homestyle.containerusername}>
                                <Text style={[styles.textBold, homestyle.UserText]}>Wilson NDONGO</Text>
                                <View style={homestyle.conatinerverifystatus}>
                                    <Image
                                        source={require('../../assets/images/verified.png')}
                                        style={homestyle.verified}
                                    />
                                    <Text style={homestyle.verifiedtext}>verifié</Text>
                                </View>
                            </View> 

                            <TouchableOpacity style={homestyle.comtainersupport}>
                                <Image
                                    source={require('../../assets/images/support.png')}
                                    style={homestyle.supportlogo}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={homestyle.containernotif}>
                                <Image
                                    source={require('../../assets/images/notification.png')}
                                    style={homestyle.notificationlogo}
                                />
                            </TouchableOpacity>
                        </View>
                    
                        {/* Wallet balance */}
                        <View style={homestyle.walletContainer}>
                            <View style={homestyle.containerlogotcash}>
                                <Image
                                    source={require('../../assets/images/t_cash.png')}
                                    style={homestyle.tcashlogo}
                                />
                            </View>
                            <View style={homestyle.walletamountcontainer}>
                                <Text style={[styles.text, homestyle.walletTitleText]}>Mon Solde</Text>
                                <Text style={[styles.textBold, homestyle.walletAmount]}>32 132.2 FCFA</Text>
                            </View>
                            <TouchableOpacity style={homestyle.containerwalleteye}>
                                <Image
                                    source={require('../../assets/images/eye.png')}
                                    style={homestyle.walleteye}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        {/* Principal services */}
                        <View style={homestyle.containerprincipalservice}>
                            <TouchableOpacity 
                            onPress={this._navigateToRecharge}
                            style={[styles.card, homestyle.walletservicebtn]}>
                                <Image
                                    source={require('../../assets/images/deposit.png')}
                                    style={homestyle.imageservicehome}
                                />     
                                <Text style={[styles.textBold, homestyle.depositeText]}>Recharge</Text>
                            </TouchableOpacity> 

                            <TouchableOpacity 
                            onPress={this._navigateTotransfert}
                            style={[styles.card, homestyle.walletservicebtn]}>
                                <Image
                                    source={require('../../assets/images/transfer.png')}
                                    style={homestyle.imageservicehome}
                                />                     
                                <Text style={[styles.textBold, homestyle.depositeText]}>Transfert</Text>   
                            </TouchableOpacity>
                        </View>

                        {/* Recent transaction history */}
                        <ScrollView contentContainerStyle={homestyle.containerHistoryTransation}>
                            <View style={homestyle.transactionItemContainer}>
                                <Text style={[styles.textBold, homestyle.headertitletrans]}>Transactions recentes</Text>
                                
                                <TouchableOpacity 
                                    onPress={this. _navigateTotransactionDetail.bind(this)}
                                    style={homestyle.historytransitem}>
                                    <View style={homestyle.histcovercontainer}>
                                        <Image
                                            source={require('../../assets/images/tcash_mtn.png')}
                                            style={homestyle.historycover} />
                                    </View>
                                    <View style={homestyle.historycontent}>
                                        <Text style={[styles.textBold, homestyle.histtranstype]}>T_cash Deposite</Text>
                                        <Text style={[styles.textItalicBold, homestyle.histransamount]}>+11 000 FCFA</Text>
                                        <Text style={[styles.text, homestyle.histtransauthor]}>Auteur : Valery Yanick</Text>
                                    </View>
                                    <View style={homestyle.historystatus}>
                                        <Text style={[styles.textItalicBold, homestyle.histtransstatussuccess]}>Réussie</Text>
                                        <Text 
                                            numberOfLines={1}
                                            style={[styles.text, homestyle.histtranstime]}>Il y a 12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={homestyle.separatoritemhist} />

                                <TouchableOpacity 
                                    onPress={this. _navigateTotransactionDetail.bind(this)}
                                    style={homestyle.historytransitem}>
                                    <View style={homestyle.histcovercontainer}>
                                        <Image
                                            source={require('../../assets/images/tcash_tcash.png')}
                                            style={homestyle.historycover} />
                                    </View>
                                    <View style={homestyle.historycontent}>
                                        <Text style={[styles.textBold, homestyle.histtranstype]}>T_cash Deposite</Text>
                                        <Text style={[styles.textItalicBold, homestyle.histransamount]}>+11 000 FCFA</Text>
                                        <Text style={[styles.text, homestyle.histtransauthor]}>Auteur : Valery Yanick</Text>
                                    </View>
                                    <View style={homestyle.historystatus}>
                                        <Text style={[styles.textItalicBold, homestyle.histtransstatussuccess]}>Réussie</Text>
                                        <Text 
                                            numberOfLines={1}
                                            style={[styles.text, homestyle.histtranstime]}>Il y a 12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={homestyle.separatoritemhist} />

                                <TouchableOpacity 
                                    onPress={this. _navigateTotransactionDetail.bind(this)}
                                    style={homestyle.historytransitem}>
                                    <View style={homestyle.histcovercontainer}>
                                        <Image
                                            source={require('../../assets/images/tcash_om.png')}
                                            style={homestyle.historycover} />
                                    </View>
                                    <View style={homestyle.historycontent}>
                                        <Text style={[styles.textBold, homestyle.histtranstype]}>T_cash Deposite</Text>
                                        <Text style={[styles.textItalicBold, homestyle.histransamount]}>+11 000 FCFA</Text>
                                        <Text style={[styles.text, homestyle.histtransauthor]}>Auteur : Valery Yanick</Text>
                                    </View>
                                    <View style={homestyle.historystatus}>
                                        <Text style={[styles.textItalicBold, homestyle.histtransstatusfail]}>Echec</Text>
                                        <Text 
                                            numberOfLines={1}
                                            style={[styles.text, homestyle.histtranstime]}>Il y a 12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={homestyle.separatoritemhist} />

                                <TouchableOpacity 
                                    onPress={this. _navigateTotransactionDetail.bind(this)}
                                    style={homestyle.historytransitem}>
                                    <View style={homestyle.histcovercontainer}>
                                        <Image
                                            source={require('../../assets/images/tcash_visa.png')}
                                            style={homestyle.historycover} />
                                    </View>
                                    <View style={homestyle.historycontent}>
                                        <Text style={[styles.textBold, homestyle.histtranstype]}>T_cash Deposite</Text>
                                        <Text style={[styles.textItalicBold, homestyle.histransamount]}>+11 000 FCFA</Text>
                                        <Text style={[styles.text, homestyle.histtransauthor]}>Auteur : Valery Yanick</Text>
                                    </View>
                                    <View style={homestyle.historystatus}>
                                        <Text style={[styles.textItalicBold, homestyle.histtransstatusfail]}>Echec</Text>
                                        <Text 
                                            numberOfLines={1}
                                            style={[styles.text, homestyle.histtranstime]}>Il y a 12 hours ago</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={homestyle.separatoritemhist} />

                            </View>

                        </ScrollView>
                </ScrollView>
            </ImageBackground>
        )
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

export default connect(mapStateToProps, mapDispatchToProps, null)(HomeIndex);