import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import { styles } from '../../assets/styles';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Moment from 'moment';
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { transactionstyle } from '../../assets/styles/transaction';
import { switchHeaderAction } from '../../reducers/actions';

class TransactionDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isScroll : false,
            isVisibleTckCrModal : false
        }
    };


    _navigateToSupportChat = () => {
        const {navigation} = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('SupportChat');
    }

    _backToTransaction = () => {
        const {root_navigation} = this.props;  
        switchHeaderAction(true);
        root_navigation.goBack();
    } 

    _toggleScrollView = (data) => {
        if(data){

        }
        console.log(data)
    }

    _openModalTicketCreation = () => {
        this.setState({isVisibleTckCrModal:true});
    }

    _closeModalTicketCreation = () => {
        this.setState({isVisibleTckCrModal:false});
    }

    render(){
        const {is_loading} = this.props;
        const {isVisibleTckCrModal} = this.state;
        return( 
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgroundapp}>
                <ScrollView 
                    onScrollBeginDrag={this._toggleScrollView} 
                    contentContainerStyle={transactionstyle.scrollContainer}>

                    <View style={transactionstyle.headertransdetail}>
                        <TouchableOpacity 
                            onPress={this._backToTransaction}
                            style={transactionstyle.backbtn}>
                            <Image source={require('../../assets/images/back.png')} style={transactionstyle.backicon} />
                        </TouchableOpacity>
                        <View style={transactionstyle.containertitledetail}>
                            <Text 
                                numberOfLines={1}
                                style={[styles.textBold, transactionstyle.titledetailpage]}>Transaction Nº T-CASH012</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique}>
                        <View style={transactionstyle.containerlogotransdetail}>
                            <Image source={require('../../assets/images/mtn_tcash.png')} style={transactionstyle.logotransdetail} />
                        </View>
                        <View style={transactionstyle.pricedatetransdetail}>
                            <Text style={[styles.textBold, transactionstyle.pricedetailpage]}>11 000,00 FCFA</Text>
                            <Text style={[styles.text, transactionstyle.phonedetailpage]}>De +237****221</Text>
                            <Text style={[styles.text, transactionstyle.datedetailpage]}>Mardi, 05 aout 2025, 16:59</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique2}>
                        <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Détail du paiement</Text>
                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Statut</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Terminé</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Catégories</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Recharge</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Nom du service</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Recharge compte T-cash</Text>
                        </View>
                    </View>
                    
                    <View style={transactionstyle.detailrubrique2}>
                        <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Source du paiement</Text>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Wallet</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Orange Money</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Numero anrede</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>+237****221</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Montant</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>11 000,00 FCFA</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Total des frais</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Gratuit</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Montant payé</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>11 000,00 FCFA</Text>
                        </View>

                        <View style={transactionstyle.rowitem}>
                            <Text style={[styles.text, transactionstyle.rowitemlabel]}>Origine</Text>
                            <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Cameroun</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.detailrubrique2}>
                            <Text style={[styles.textBold, transactionstyle.rwoitemtitle]}>Destination du paiement</Text>

                            <View style={transactionstyle.rowitem}>
                                <Text style={[styles.text, transactionstyle.rowitemlabel]}>Bénéficiaire</Text>
                                <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>Compte T_cash</Text>
                            </View>

                            <View style={transactionstyle.rowitem}>
                                <Text style={[styles.text, transactionstyle.rowitemlabel]}>Référence</Text>
                                <Text style={[styles.textBold, transactionstyle.rowitemvalue]}>1234-5678-9123</Text>
                            </View>
                    </View>

                </ScrollView> 
            </ImageBackground>
        )   
    }


} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({switchHeaderAction}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(TransactionDetail);