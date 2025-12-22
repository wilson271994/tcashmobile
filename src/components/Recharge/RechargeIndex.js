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
import { rechargestyle } from '../../assets/styles/recharge.js';

const dataoperatorcountry = [
    { label: 'Canada', value: '1' },
    { label: 'Cameroun', value: '2' },
];

class RechargeIndex extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            montant: '',
            numero: '+237 **** 964',
            typeRecharge: 'gratuite', // 'gratuite' ou 'payante'
            balanceVisible: false,
            operatorCountryFocus:false,
            operatorCountryValue:'',
            account_name:'',
            account_number:''
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
        const {user_infos} = this.props;
        const { 
            montant, 
            numero, 
            typeRecharge, 
            balanceVisible, 
            operatorCountryFocus, 
            operatorCountryValue,
        } = this.state;
        return (
            <ScrollView style={rechargestyle.container}>
                <View style={rechargestyle.header}>
                    <TouchableOpacity 
                        onPress={this._navigateToHome}
                        style={rechargestyle.closeButton}>
                        <Text style={rechargestyle.closeText}>×</Text>
                    </TouchableOpacity>
                    <Text style={rechargestyle.title}>Recharger votre compte T_cash</Text>
                </View>
        
                <View style={rechargestyle.section}>
                    <Text style={[styles.text, rechargestyle.label]}>Choisir le pays de l'opérateur</Text>
                    {this._renderDropdownLabel}
                    <Dropdown
                        style={[rechargestyle.inputContainer, operatorCountryFocus && { borderColor: 'blue' }]}
                        placeholderStyle={[rechargestyle.placeholderStyle, styles.text]}
                        selectedTextStyle={[rechargestyle.selectedTextStyle, styles.text]}
                        itemTextStyle={[rechargestyle.itemTextStyle, styles.text]}
                        containerStyle={rechargestyle.containeritemdrop}
                        iconStyle={rechargestyle.iconStyle}
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
        
                <View style={rechargestyle.section}>
                    <Text style={[styles.text, rechargestyle.label]}>Montant à recharger</Text>
                    <View style={rechargestyle.inputContainer}>
                        <Text style={rechargestyle.currency}>{user_infos.currency}</Text>
                        <TextInput
                            style={[rechargestyle.input, styles.text]}
                            placeholder="0"
                            placeholderTextColor='#c6c6c6'
                            value={montant}
                            onChangeText={text => this.setState({ montant: text })}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
        
                <View style={rechargestyle.section}>
                    <Text style={[styles.text, rechargestyle.label]}>Moyen de paiement</Text>
                    <View style={rechargestyle.radioGroup}>
                        <TouchableOpacity style={[
                                rechargestyle.radioOption,
                                typeRecharge === 30056 && rechargestyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 30056 })}
                        >
                            <View style={rechargestyle.radioCircle}>
                                {typeRecharge === 30056 && <View style={rechargestyle.radioDot} />}
                            </View>
                            <View style={rechargestyle.radioContent}>
                                <Image
                                source={require('../../assets/images/logo_orange.png')} // Logo MTN
                                style={rechargestyle.radioLogo}
                                />
                                <Text style={[rechargestyle.radioTitle, styles.textBold]}>Orange money cameroun</Text>
                            </View>
                        </TouchableOpacity>
            
            
                        <TouchableOpacity style={[
                                rechargestyle.radioOption,
                                typeRecharge === 20056 && rechargestyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 20056 })}
                            >
                            <View style={rechargestyle.radioCircle}>
                                {typeRecharge === 20056 && <View style={rechargestyle.radioDot} />}
                            </View>
                            <View style={rechargestyle.radioContent}>
                                <Image
                                source={require('../../assets/images/mtn.jpg')} // Logo MTN
                                style={rechargestyle.radioLogo}
                                />
                                <Text style={[rechargestyle.radioTitle, styles.textBold]}>Mtn mobile money cameroun</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={rechargestyle.section}>
                    <Text style={[styles.textBold, rechargestyle.recaptitle]}>Résumé de la transaction</Text>
                    <View style={rechargestyle.containeritemrecap}>
                        <View style={rechargestyle.itemrecap}>
                            <Text style={[rechargestyle.labelrecap, styles.text]}>Montant net à payer</Text>
                        </View>
                        <View style={rechargestyle.itemrecap}>
                            <Text style={[rechargestyle.valuerecap, styles.textBold]}>100 XAF</Text>
                        </View>
                    </View>
                    <View></View>
                    <View></View>
                </View>

                <View style={rechargestyle.section}>
                    <Text style={[styles.text, rechargestyle.label]}>Nom lié compte</Text>
                    <View style={rechargestyle.inputContainer}>
                        <Text style={rechargestyle.currency}>{user_infos.currency}</Text>
                        <TextInput
                            style={[rechargestyle.input, styles.text]}
                            placeholder="Nom et prenom"
                            placeholderTextColor='#c6c6c6'
                            onChangeText={text => this.setState({ account_name: text })}
                        />
                    </View>
                </View>

                <View style={rechargestyle.section}>
                    <Text style={[styles.text, rechargestyle.label]}>Numéro compte</Text>
                    <View style={rechargestyle.inputContainer}>
                        <Text style={rechargestyle.currency}>{user_infos.currency}</Text>
                        <TextInput
                            style={[rechargestyle.input, styles.text]}
                            placeholderTextColor='#c6c6c6'
                            placeholder="67xxxxxx"
                            onChangeText={text => this.setState({ account_number: text })}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
        
        
                <TouchableOpacity style={rechargestyle.continueButton}>
                <Text style={rechargestyle.continueText}>Continuer</Text>
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
        user_infos: state.auth.user_infos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(RechargeIndex);