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
import GradientBackground from '../Utils/Gradient.js';

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

    _navigateToTransfer = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfer');
    }

    _navigateToDeposit = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Deposit');
    }

    render(){
        const {user_infos} = this.props; 
        return(
            <View style={homestyle.container}>
                <ScrollView contentContainerStyle={homestyle.scrollContainer}>
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
                            <Text style={[styles.textBold, homestyle.walletAmount]}>{user_infos.wallet} {user_infos.currency === 'XAF' ? 'FCFA' : user_infos.currency}</Text>
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

                        <TouchableOpacity onPress={this._navigateToTransfer}
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
                                user_infos.lasttransactions ? 
                                    user_infos.lasttransactions.map((item, i) => 
                                        <>
                                            <TouchableOpacity key={i}
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
                                        </>
                                    )
                                :
                                    <View style={homestyle.emptytransaction}>
                                        <Text style={[styles.text, homestyle.emptytext]}>Aucune transaction pour l'instant.</Text>
                                    </View>
                            }
                        </View>
                    </ScrollView>
                </ScrollView>
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
        user_infos:state.auth.user_infos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(HomeIndex);