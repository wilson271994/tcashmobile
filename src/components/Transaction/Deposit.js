import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION, TRANSACTION_FEES } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { DepositMoneyAction, GetTransactionComAction } from '../../reducers/actions/index.js';
import { homestyle } from '../../assets/styles/home.js';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { styles } from '../../assets/styles/index.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { transactionstyle } from '../../assets/styles/transaction.js';
import Toast from 'react-native-toast-message';

const dataoperatorcountry = [
    { label: 'Cameroun', value: 'XAF' },
    { label: 'Canada', value: 'CAD' },
];

class DepositIndex extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            amount: Number(0),
            balanceVisible: false,
            operatorCountryFocus:false,
            operatorCountry:'',
            account_name:'',
            account_number:'',
            service_code:Number(0),
        }
    }

    componentDidMount(){
        this._initRequest();
    }

    _initRequest = () => {
        store.dispatch({type:TRANSACTION_FEES, value:{}})
    }

    _navigateToHome = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate(' ');
    }

    _togglePaymentMethod = async (code) => {
        const {amount} = this.state;
        if(amount > 0){
            this.setState({service_code:code});
            await this._calculateCommission(code);
        }else{
            Toast.show({
                'type':'error',
                props:{
                    title:'Une erreur c\'est produite!',
                    description:'Veuillez saisir le montant.',
                }
            }); 
        }
    }

    _calculateCommission = (service_code) => {
        const {user_token, user_infos} = this.props;
        const {operatorCountry, amount} = this.state;
        if(amount > 0 && operatorCountry.value && service_code > 0){
            const data = JSON.stringify({
                token           : user_token,
                api_token       : '',
                amount          : amount,
                serviceid       : service_code,
                currency        : 'XAF',
                sysservicecode  : '1001'
            });
            GetTransactionComAction(data);
        }
    } 

    _submitDeposit = () => {
        const {user_token, user_infos, transaction_fee, navigation} = this.props;
        const {operatorCountry, amount, account_name, account_number, service_code} = this.state;
        if(amount > 0 && operatorCountry.value !== '' && service_code > 0 && account_name !== '' && account_number !== ''){
            const data = JSON.stringify({
                token                       : user_token,
                amount                      : amount,
                serviceid                   : service_code,
                currency                    : operatorCountry.value,
                sysservicecode              : '1001',
                account_name                : account_name,
                account_number              : account_number,
                customer_email              : user_infos.email,
                description                 : `Recharge de portefeuille T-Cash par le client ${user_infos.name}`,
                initial_amount              : amount,
                final_amount                : transaction_fee.total_to_pay,
                comExchangeRatePercentage   : transaction_fee.company_exchange_rate_percentage,
                servicecommission           : transaction_fee.service_commission,
                initialexchangerate         : transaction_fee.initial_exchange_rate,
                finalexchangerate           : transaction_fee.final_exchange_rate

            });
            DepositMoneyAction(data, navigation);
        }else{
            if(amount === 0){
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Une erreur c\'est produite!',
                        description: 'Veuillez saisir le montant.',
                    }
                });
            }
            if(account_name === 0){
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Une erreur c\'est produite!',
                        description: 'Veuillez renseigner le nom lié au compte mobile money.',
                    }
                });
            }
            if(account_number === 0){
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Une erreur c\'est produite!',
                        description: 'Veuillez renseigner le numéro de téléphone.',
                    }
                });
            }
            if(operatorCountry.value === ''){
                Toast.show({
                    'type': 'error',
                    props: {
                        title: 'Une erreur c\'est produite!',
                        description: 'Veuillez choisir le pays de l\'opérateur.',
                    }
                });
            }
        }
    } 

    render() {
        const {user_infos, transaction_fee, is_loading} = this.props;
        const { 
            amount, 
            service_code, 
            operatorCountryFocus, 
            operatorCountry,
        } = this.state;
        return (
            <View style={transactionstyle.containertrans}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={transactionstyle.scroolviecontainer}>
                        <View style={transactionstyle.headerform}>
                            <TouchableOpacity onPress={this._navigateToHome}
                                style={transactionstyle.closeButton}>
                                <Image 
                                    source={require('../../assets/images/back.png')} 
                                    style={transactionstyle.closeicon} 
                                />
                            </TouchableOpacity>
                            <Text style={[styles.textBold, transactionstyle.titleheader]}>Recharger votre compte</Text>
                        </View>

                        <View style={transactionstyle.formcontainer}>
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Choisir le pays de l'opérateur</Text>
                                <Dropdown
                                    style={[styles.text, transactionstyle.inputContainer, operatorCountryFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[transactionstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[transactionstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[transactionstyle.itemTextStyle, styles.text]}
                                    containerStyle={transactionstyle.containeritemdrop}
                                    iconStyle={transactionstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={dataoperatorcountry}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!operatorCountryFocus ? 'Choisir le pays...' : '...'}
                                    onFocus={() => this.setState({ operatorCountryFocus: true })}
                                    onBlur={() => this.setState({ operatorCountryFocus: false })}
                                    onChange={item => this.setState({ operatorCountry: item })}
                                />
                            </View>
                    
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Montant à recharger</Text>
                                <TextInput
                                    style={[transactionstyle.inputContainer, styles.text]}
                                    placeholder="0"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ amount: text })}
                                    keyboardType="numeric"
                                />
                            </View>
                    
                            { 
                                operatorCountry.value === 'XAF' ?
                                    <View style={transactionstyle.formitem}>
                                        <Text style={[styles.text, transactionstyle.label]}>Moyen de paiement</Text>
                                        <View style={transactionstyle.radioGroup}>
                                            <TouchableOpacity style={[
                                                    transactionstyle.radioOption,
                                                    service_code === 30056 && transactionstyle.radioOptionSelected,
                                                ]}
                                                onPress={this._togglePaymentMethod.bind(this, 30056)}
                                            >
                                                <View style={transactionstyle.radioCircle}>
                                                    {service_code === 30056 && <View style={transactionstyle.radioDot} />}
                                                </View>
                                                <View style={transactionstyle.radioContent}>
                                                    <Image
                                                    source={require('../../assets/images/logo_orange.png')} // Logo MTN
                                                    style={transactionstyle.radioLogo}
                                                    />
                                                    <Text style={[transactionstyle.radioTitle, styles.textBold]}>Orange money cameroun</Text>
                                                </View>
                                            </TouchableOpacity>
                                
                                            <TouchableOpacity style={[
                                                    transactionstyle.radioOption,
                                                    service_code === 20056 && transactionstyle.radioOptionSelected,
                                                ]}
                                                    onPress={this._togglePaymentMethod.bind(this, 20056)}
                                                >
                                                <View style={transactionstyle.radioCircle}>
                                                    {service_code === 20056 && <View style={transactionstyle.radioDot} />}
                                                </View>
                                                <View style={transactionstyle.radioContent}>
                                                    <Image
                                                    source={require('../../assets/images/mtn.jpg')} // Logo MTN
                                                    style={transactionstyle.radioLogo}
                                                    />
                                                    <Text style={[transactionstyle.radioTitle, styles.textBold]}>Mtn mobile money cameroun</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                :null
                            }

                            {
                                transaction_fee && transaction_fee.total_to_pay ?
                                    <>
                                        <View style={[transactionstyle.recapcontainer]}>
                                            <Text style={[styles.textBold, transactionstyle.recaptitle]}>Résumé de la transaction</Text>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Montant net à recevoir</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{amount} FCFA</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Frais du service</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.service_commission} FCFA</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Frais de la transaction</Text>
                                                </View> 
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.transaction_commission} FCFA</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Montant total</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.total_to_pay} FCFA</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <Text style={[styles.text, transactionstyle.label]}>Nom lié compte</Text>
                                        <TextInput
                                            style={[transactionstyle.inputContainer, styles.text]}
                                            placeholderTextColor='#999'
                                            placeholder="Nom et prenom"
                                            onChangeText={text => this.setState({ account_name: text })}
                                        />

                                        <Text style={[styles.text, transactionstyle.label]}>Numéro compte</Text>
                                        <TextInput
                                            style={[transactionstyle.inputContainer, styles.text]}
                                            placeholderTextColor='#999'
                                            placeholder="67xxxxxx"
                                            onChangeText={text => this.setState({ account_number: text })}
                                            keyboardType="numeric"
                                        />
                                    </>
                                :null
                            }
                            <TouchableOpacity onPress={this._submitDeposit}
                                style={transactionstyle.submitButton}
                                disabled={is_loading ? true : false}
                            >
                                {
                                    is_loading ?
                                        <ActivityIndicator size="small" color="#fff" />
                                    :
                                        <Text style={[styles.textBold, transactionstyle.submitBtnText]}>Continuer</Text>
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
            GetTransactionComAction,
            DepositMoneyAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading      : state.loader.is_loading,
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        transaction_fee : state.trans.transaction_fee
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(DepositIndex);