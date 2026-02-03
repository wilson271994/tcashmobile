import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, TextInput, ScrollView, ImageBackground } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION, TRANSACTION_FEES } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { GetTransactionComAction, SearchUserAction, switchHeaderAction } from '../../reducers/actions/index.js';
import { homestyle } from '../../assets/styles/home.js';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { styles } from '../../assets/styles/index.js';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { transactionstyle } from '../../assets/styles/transaction.js';
import Toast from 'react-native-toast-message';

const dataoperatorcountry = [
    { label: 'Cameroun', value: '1' },
    { label: 'Canada', value: '2' },
];

class TransferIndex extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            balanceVisible: false,
            operatorCountryFocus:false,
            operatorCountry:'',
            account_name:'',
            account_number:'',
            service_code:'',
            commission:0,
            destinatorFocus:false,
            destinator:{},
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

    toggleBalanceVisibility = () => {
        this.setState(prevState => ({ balanceVisible: !prevState.balanceVisible }));
    };

    _searchUserList = (searchkey) => {
        const {user_token} = this.props;
        if(searchkey !== ''){
            const data = {
                token       : user_token,
                searchkey   : searchkey
            };
            SearchUserAction(data);
        }
    } 

    _chooseDestinator = (user) => {
        this.setState({destinator:user})
    }

    _calculateCommission = (amount) => {
        const {user_token, user_infos} = this.props;
        const {operatorCountry, destinator} = this.state;
        if(user_infos.wallet > amount){
            if(amount > 0 && operatorCountry.value && destinator.id){
                console.log('true')
                const data = {
                    token           : user_token,
                    api_token       : '',
                    amount          : amount,
                    serviceid       : '',
                    currency        : 'CAD',
                    sysservicecode  : '1002'
                };
                GetTransactionComAction(data);
            } 
        }else{
            Toast.show({
                'type':'error',
                props:{
                    title:'Oups une erreure c\'est produite!',
                    description:'Votre solde est insuffisant pour effectuer cette transaction. Rechargez votre portefeuille.',
                }
            }); 
        }
    } 

    render() {
        const {user_infos, transaction_fee, user_list, is_loading} = this.props;
        const { 
            amount, 
            operatorCountryFocus, 
            destinatorFocus, 
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
                            <Text style={[styles.textBold, transactionstyle.titleheader]}>Envoie d'argent</Text>
                        </View>

                        <View style={transactionstyle.formcontainer}>
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Choisir le pays de destination</Text>
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
                                <Text style={[styles.text, transactionstyle.label]}>Selectionner le destinataire</Text>
                                <Dropdown
                                    style={[styles.text, transactionstyle.inputContainer, destinatorFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[transactionstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[transactionstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[transactionstyle.itemTextStyle, styles.text]}
                                    containerStyle={transactionstyle.containeritemdrop} 
                                    iconStyle={transactionstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={user_list}
                                    labelField="name"
                                    valueField="id"
                                    placeholder={!destinatorFocus ? 'Choisir l\'utilisateur...' : '...'}
                                    onFocus={() => this.setState({ destinatorFocus: true })}
                                    onBlur={() => this.setState({ destinatorFocus: false })}
                                    onChange={(text) => {
                                            this._chooseDestinator(text) 
                                            this.setState({ destinatorFocus: false })
                                        }
                                    }
                                    onChangeText={(text) => this._searchUserList(text)}
                                    search={true}
                                    searchPlaceholder='Pseudo, email, nom ou prenom...'
                                    searchPlaceholderTextColor='#999'
                                    inputSearchStyle={transactionstyle.inputsearchstyle}
                                />
                            </View>
                    
                            <View style={transactionstyle.formitem}>
                                <Text style={[styles.text, transactionstyle.label]}>Montant à recharger (En CAD)</Text>
                                <TextInput
                                    style={[transactionstyle.inputContainer, styles.text]}
                                    placeholder="Saisir le montant en dollars canadien"
                                    placeholderTextColor='#999'
                                    onChangeText={(val) => {
                                        this.setState({amount:val});
                                        this._calculateCommission(val)
                                    }}
                                    keyboardType="numeric"
                                />
                            </View>

                            {
                                transaction_fee && transaction_fee.total_to_pay ?
                                    <>
                                        <View style={[transactionstyle.section, transactionstyle.recapcontainer]}>
                                            <Text style={[styles.textBold, transactionstyle.recaptitle]}>Résumé de la transaction</Text>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Montant net à recevoir</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{amount} CAD</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Frais du service</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.service_commission} CAD</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Frais de la transaction</Text>
                                                </View> 
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.transaction_commission} CAD</Text>
                                                </View>
                                            </View>
                                            <View style={transactionstyle.containeritemrecap}>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.labelrecap, styles.text]}>Montant total</Text>
                                                </View>
                                                <View style={transactionstyle.itemrecap}>
                                                    <Text style={[transactionstyle.valuerecap, styles.textBold]}>{transaction_fee.total_to_pay} CAD</Text>
                                                </View>
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
            SearchUserAction,
            GetTransactionComAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading      : state.loader.is_loading,
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        transaction_fee : state.trans.transaction_fee,
        user_list       : state.list.user_list
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(TransferIndex);