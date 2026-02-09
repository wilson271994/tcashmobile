import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, RefreshControl, ScrollView, ImageBackground} from 'react-native';
import  {homestyle}  from '../../assets/styles/home.js';
import Moment from 'moment';
import { store } from '../../reducers/store';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION, TRANSACTION_DETAIL } from '../../reducers/actions/types';
import Icon from 'react-native-vector-icons/Ionicons';
import {GetUserInfoAction, switchHeaderAction} from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';
import GradientBackground from '../Utils/Gradient.js';
import { BASE_URL } from '../../api/config.js';

class HomeIndex extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            refreshing : false
        }
    };

    componentDidMount(){
    } 

    _onRefresh = async () => { 
        this.setState({refreshing:true}) 
        this._fechtData().then(() => {this.setState({refreshing:false})})
    }

    _navigateTotransactionDetail = (item) => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        store.dispatch({type:TRANSACTION_DETAIL, value:item})
        navigation.navigate('TransactionDetail');
    }

    _navigateToDeposit = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Deposit');
    }

    _navigateToTransfer = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfer');
    }

    _navigateToWithdrawal = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Withdraw');
    }

    render(){
        const {user_infos, last_transaction} = this.props; 
        const {refreshing} = this.state;
        return(
            <View style={homestyle.container}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={homestyle.scrollContainer}
                        showsVerticalScrollIndicator={false}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={this._onRefresh}
                                colors={['#6aa7d7', '#ffa200']}
                            />
                        }
                    >
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
                                <Text style={[styles.textBold, homestyle.walletAmount]}>{user_infos.local_currency_wallet} {user_infos.currency === 'XAF' ? 'FCFA' : user_infos.currency}</Text>
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
                            <TouchableOpacity onPress={this._navigateToDeposit}
                                style={[styles.card, homestyle.walletservicebtn]}>
                                <Image
                                    source={require('../../assets/images/wallet-p.png')}
                                    style={homestyle.imageservicehome}
                                />     
                                <Text style={[styles.textBold, homestyle.depositeText]}>Recharge</Text>
                            </TouchableOpacity> 

                            <TouchableOpacity onPress={this._navigateToTransfer}
                                style={[styles.card, homestyle.walletservicebtn]}>
                                <Image
                                    source={require('../../assets/images/transfer-p.png')} 
                                    style={homestyle.imageservicehome}
                                />                     
                                <Text style={[styles.textBold, homestyle.depositeText]}>Transfert</Text>   
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this._navigateToWithdrawal}
                                style={[styles.card, homestyle.walletservicebtn]}>
                                <Image
                                    source={require('../../assets/images/withdraw-p.png')} 
                                    style={homestyle.imageservicehome}
                                />                     
                                <Text style={[styles.textBold, homestyle.depositeText]}>Retrait</Text>   
                            </TouchableOpacity>
                        </View>

                        {/* Recent transaction history */}
                        <ScrollView contentContainerStyle={homestyle.containerHistoryTransation}>
                            <View style={homestyle.transactionItemContainer}>
                                <Text style={[styles.textBold, homestyle.headertitletrans]}>Transactions recentes</Text>
                                {
                                    last_transaction ? 
                                        last_transaction.map((item, i) => 
                                            <View key={i}>
                                                <TouchableOpacity
                                                    onPress={this. _navigateTotransactionDetail.bind(this, item)}
                                                    style={homestyle.historytransitem}>
                                                    <View style={homestyle.histcovercontainer}>
                                                        <Image
                                                            source={{ uri : BASE_URL + item.service.logo }}
                                                            style={homestyle.historycover} />
                                                    </View>

                                                    <View style={homestyle.historycontent}>
                                                        <Text style={[styles.textBold, homestyle.histtranstype]}>{item.service.name}</Text>
                                                        <Text style={[styles.textItalicBold, homestyle.histransamount]}>
                                                            {item.service.service_code === 1001 ? '+ ' : '- '  }{item.initial_amount} {item.currency === 'XAF' ? 'FCFA' : item.currency}
                                                        </Text>
                                                        <Text style={[styles.text, homestyle.histtransauthor]}>Auteur : {item.MobileWcustomerName}</Text>
                                                    </View>

                                                    <View style={homestyle.historystatus}>
                                                        {
                                                            item.transactionStatus === 'SUCCESS' ?
                                                                <Text style={[styles.textItalicBold, homestyle.histtransstatussuccess]}>Réussie</Text>
                                                            :
                                                                <Text style={[styles.textItalicBold, homestyle.histtransstatusfail]}>Échouée</Text>
                                                        }
                                                        <Text 
                                                            numberOfLines={3}
                                                            style={[styles.text, homestyle.histtranstime]}>{item.created_day} à {item.created_time}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <View style={homestyle.separatoritemhist} />
                                            </View>
                                        )
                                    :
                                        <View style={homestyle.emptytransaction}>
                                            <Text style={[styles.text, homestyle.emptytext]}>Aucune transaction pour l'instant.</Text>
                                        </View>
                                }
                            </View>
                        </ScrollView>
                    </ScrollView>
                </ImageBackground>
            </View>
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
        user_infos          : state.auth.user_infos,
        user_token          : state.auth.user_token,
        last_transaction    : state.list.last_transaction
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(HomeIndex);