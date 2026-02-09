import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, TextInput, ScrollView, ImageBackground } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { homestyle } from '../../assets/styles/home.js';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { styles } from '../../assets/styles/index.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { transactionstyle } from '../../assets/styles/transaction.js';
import { GetTransactionComAction } from '../../reducers/actions/index.js';
import Toast from 'react-native-toast-message';

const dataoperatorcountry = [
    { label: 'Cameroun', value: '1' },
    { label: 'Canada', value: '2' },
];

class WithdrawIndex extends PureComponent {
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
            commission:0
        }
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

    _navigateToHome = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate(' ');
    }

    render() {
        const {user_infos, transaction_fee, is_loading} = this.props;
        const { 
            typeRecharge, 
            operatorCountryFocus, 
            operatorCountry,
            commission,
            service_code
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
                            <Text style={[styles.textBold, transactionstyle.titleheader]}>Retrait d'argent</Text>
                        </View>
                
                        <View style={transactionstyle.formcontainer}>
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Choisir le pays de l'opérateur</Text>
                                {this._renderDropdownLabel}
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
                                    value={operatorCountry}
                                    onFocus={() => this.setState({ operatorCountryFocus: true })}
                                    onBlur={() => this.setState({ operatorCountryFocus: false })}
                                    onChange={item => this.setState({ operatorCountry: item })}
                                />
                            </View>
                    
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Montant à retirer (En CAD)</Text>
                                <TextInput
                                    style={[transactionstyle.inputContainer, styles.text]}
                                    placeholderTextColor='#999'
                                    placeholder="Saisir le montant en dollars canadien"
                                    onChangeText={text => this.setState({ amount: text })}
                                    keyboardType="numeric"
                                />
                            </View>
                    
                            { 
                                operatorCountry.value === '1' ?
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
                                        <View style={[transactionstyle.formitem, transactionstyle.recapcontainer]}>
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
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Frais de la transaction</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{commission} FCFA</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Montant à payer</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>100 FCFA</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={transactionstyle.formitem}>
                                            <Text style={[styles.text, transactionstyle.label]}>Nom lié compte</Text>
                                            <View style={transactionstyle.inputContainer}>
                                                <TextInput
                                                    style={[transactionstyle.input, styles.text]}
                                                    placeholderTextColor='#999'
                                                    placeholder="Nom et prenom"
                                                    onChangeText={text => this.setState({ account_name: text })}
                                                />
                                            </View>
                                        </View>

                                        <View style={transactionstyle.formitem}>
                                            <Text style={[styles.text, transactionstyle.label]}>Numéro compte</Text>
                                            <View style={transactionstyle.inputContainer}>
                                                <TextInput
                                                    style={[transactionstyle.input, styles.text]}
                                                    placeholderTextColor='#c6c6c6'
                                                    placeholder="67xxxxxx"
                                                    onChangeText={text => this.setState({ account_number: text })}
                                                    keyboardType="numeric"
                                                />
                                            </View>
                                        </View>
                                    </>
                                :null
                            }
                            <TouchableOpacity 
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
            GetTransactionComAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading      : state.loader.is_loading,
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        transaction_fee : state.list.transaction_fee
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(WithdrawIndex);