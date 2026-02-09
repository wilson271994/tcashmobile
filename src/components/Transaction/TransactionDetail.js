import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import { styles } from '../../assets/styles';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Moment from 'moment';
import 'moment/locale/fr';
import { transactionstyle } from '../../assets/styles/transaction';
import { BASE_URL } from '../../api/config';

class TransactionDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isScroll : false,
        }
    };

    _backToHome = () => {
        const {root_navigation} = this.props;  
        root_navigation.goBack();
    } 

    _toggleScrollView = (data) => {
        if(data){

        }
        console.log(data)
    }

    render(){
        const {transaction_detail} = this.props;
        return( 
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgroundapp}>
                <ScrollView onScrollBeginDrag={this._toggleScrollView} style={transactionstyle.containerdetail}>
                    <View style={transactionstyle.headertransdetail}>
                        <TouchableOpacity 
                            onPress={this._backToHome}
                            style={transactionstyle.backbtn}>
                            <Image source={require('../../assets/images/back-w.png')} style={transactionstyle.backicon} />
                        </TouchableOpacity>
                        <View style={transactionstyle.containertitledetail}>
                            <Text 
                                numberOfLines={1}
                                style={[styles.textBold, transactionstyle.titledetailpage]}>Transaction Nº T-CASH{transaction_detail.id}</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique}>
                        <View style={transactionstyle.containerlogotransdetail}>
                            <Image source={{ uri : BASE_URL + transaction_detail.service.logo }} style={transactionstyle.logotransdetail} />
                        </View>
                        <View style={transactionstyle.pricedatetransdetail}>
                            <Text style={[styles.textBold, transactionstyle.pricedetailpage]}>{transaction_detail.initial_amount} {transaction_detail.currency === 'XAF' ? 'FCFA' : transaction_detail.currency}</Text>
                            <Text style={[styles.text, transactionstyle.phonedetailpage]}>Compte {transaction_detail.mobileWalletNumber}</Text>
                            <Text style={[styles.text, transactionstyle.datedetailpage]}>De {transaction_detail.created_day} à {transaction_detail.created_time}</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique2}>
                        <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Détail du paiement</Text>
                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Statut</Text>
                                {
                                    transaction_detail.transactionStatus === 'SUCCESS' ?
                                        <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Réussie</Text>
                                    :
                                        <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Échouée</Text>
                                }
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Nom du service</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>{transaction_detail.service.name}</Text>
                        </View>
                    </View>
                    
                    <View style={transactionstyle.detailrubrique2}>
                        <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Source du paiement</Text>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Wallet</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>
                                {
                                    transaction_detail.service.service_code === 1001 ?
                                        'Opérateur Mobile Money'
                                    :
                                        'Portefeuille T-cash'
                                }
                            </Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Compte de la source</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>
                                {
                                    transaction_detail.service.service_code === 1001 ?
                                        transaction_detail.mobileWalletNumber
                                    :
                                        'Mon compte T-Cash'
                                }
                            </Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Montant</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>{transaction_detail.initial_amount} {transaction_detail.currency === 'XAF' ? 'FCFA' : transaction_detail.currency}</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Total des frais</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>{Number(transaction_detail.final_amount) - Number(transaction_detail.initial_amount)} {transaction_detail.currency === 'XAF' ? 'FCFA' : transaction_detail.currency}</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Montant total payé</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>{transaction_detail.final_amount} {transaction_detail.currency === 'XAF' ? 'FCFA' : transaction_detail.currency}</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique2}>
                            <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Destination du paiement</Text>

                            <View style={transactionstyle.rowitem}>
                                <Text style={[styles.text, transactionstyle.rowitemlabel]}>Bénéficiaire</Text>
                                <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>
                                    {
                                        transaction_detail.service.service_code === 1001 ?
                                            transaction_detail.mobileWalletNumber
                                        :
                                            'Mon compte T-Cash'
                                    }
                                </Text>
                            </View>

                            <View style={transactionstyle.rowitem}>
                                <Text style={[styles.text, transactionstyle.rowitemlabel]}>Référence</Text>
                                <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>{transaction_detail.transaction_ref}</Text>
                            </View>
                    </View>

                </ScrollView> 
            </ImageBackground>
        )   
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
        root_navigation     : state.navigation.root_navigation,
        transaction_detail  : state.detail.transaction_detail
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(TransactionDetail);