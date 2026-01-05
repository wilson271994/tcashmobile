import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, ScrollView, ImageBackground } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { switchHeaderAction } from '../../reducers/actions/index.js';
import { homestyle } from '../../assets/styles/home.js';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { styles } from '../../assets/styles/index.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { transactionstyle } from '../../assets/styles/transaction.js';

const dataoperatorcountry = [
    { label: 'Canada', value: '1' },
    { label: 'Cameroun', value: '2' },
];

class WithdrawIndex extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            balanceVisible: false,
            operatorCountryFocus:false,
            operatorCountryValue:'',
            account_name:'',
            account_number:'',
            service_code:'',
            commission:0
        }
    }

    _navigateToHome = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate(' ');
    }

    toggleBalanceVisibility = () => {
        this.setState(prevState => ({ balanceVisible: !prevState.balanceVisible }));
    };

    _renderDropdownLabel = () => {
        if (this.state.confidValue || this.state.confidFocus) {
            return (
                <Text style={[poststyle.label, this.state.confidFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    render() {
        const {user_infos, transaction_fee} = this.props;
        const { 
            amount, 
            typeRecharge, 
            operatorCountryFocus, 
            operatorCountryValue,
            commission
        } = this.state;
        return (
            <ScrollView style={transactionstyle.container}>
                <View style={transactionstyle.header}>
                    <TouchableOpacity onPress={this._navigateToHome}
                        style={transactionstyle.closeButton}>
                        <Image 
                            source={require('../../assets/images/back.png')} 
                            style={transactionstyle.closeicon} 
                        />
                    </TouchableOpacity>
                    <Text style={[styles.textBold, transactionstyle.title]}>Envoie d'argent</Text>
                </View>
        
                <View style={transactionstyle.section}>
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
                        value={operatorCountryValue}
                        onFocus={() => this.setState({ operatorCountryFocus: true })}
                        onBlur={() => this.setState({ operatorCountryFocus: false })}
                        onChange={item => this.setState({ operatorCountryValue: item })}
                    />
                </View>
        
                <View style={transactionstyle.section}>
                    <Text style={[styles.text, transactionstyle.label]}>Montant à recharger</Text>
                    <View style={transactionstyle.inputContainer}>
                        <TextInput
                            style={[transactionstyle.input, styles.text]}
                            placeholder="0"
                            placeholderTextColor='#999'
                            value={String(amount)}
                            onChangeText={text => this.setState({ amount: text })}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
        
                <View style={transactionstyle.section}>
                    <Text style={[styles.text, transactionstyle.label]}>Moyen de paiement</Text>
                    <View style={transactionstyle.radioGroup}>
                        <TouchableOpacity style={[
                                transactionstyle.radioOption,
                                typeRecharge === 30056 && transactionstyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 30056 })}
                        >
                            <View style={transactionstyle.radioCircle}>
                                {typeRecharge === 30056 && <View style={transactionstyle.radioDot} />}
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
                                typeRecharge === 20056 && transactionstyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 20056 })}
                            >
                            <View style={transactionstyle.radioCircle}>
                                {typeRecharge === 20056 && <View style={transactionstyle.radioDot} />}
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

                {
                    commission > 0 ?
                        <>
                            <View style={[transactionstyle.section, transactionstyle.recapcontainer]}>
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

                            <View style={transactionstyle.section}>
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

                            <View style={transactionstyle.section}>
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
                    style={transactionstyle.continueButton}>
                    <Text style={transactionstyle.continueText}>Continuer</Text>
                </TouchableOpacity>
            </ScrollView>
        );
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
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        transaction_fee : state.list.transaction_fee
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(WithdrawIndex);