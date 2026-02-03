import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import Moment from 'moment';
import { store } from '../../reducers/store.js';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION, TRANSACTION_FEES } from '../../reducers/actions/types.js';
import Icon from 'react-native-vector-icons/Ionicons';
import { FetchPreloadDataAction, UpdateProfilAction } from '../../reducers/actions/index.js';
import { homestyle } from '../../assets/styles/home.js';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import { styles } from '../../assets/styles/index.js';
import Toast from 'react-native-toast-message';
import { profilstyle } from '../../assets/styles/profil.js';

class UpdateNotify extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            cities:[],
            countryFocus:false,
            country:'',
            cityFocus:false,
            city:'',
            username:'',
            firs_name:'',
            last_name:'',
            phone:'',
            email:''
        }
    }

    componentDidMount(){
        this._fetchNecessaryData();
    }

    _fetchNecessaryData = () => {
        FetchPreloadDataAction();
    }

    _navigateToHome = () => {
        const { navigation } = this.props;
        store.dispatch({ type: ROOT_NAVIGATION, value: navigation });
        navigation.navigate(' ');
    }

    _toggleCountry = (item) => {
        this.setState({country:item.id})
        this.setState({cities:item.cities});
    }

    _updateProfil = () => {
        const { navigation } = this.props;
        const {username, firs_name, last_name, phone, email, country, city} = this.state;
        const data = JSON.stringify({
            username   : username,
            firs_name   : firs_name,
            last_name   : last_name,
            email       : email,
            phone       : phone,
            country     : country,
            city        : city
        })
        UpdateProfilAction(data, navigation)
    }

    render() {
        const {user_infos, is_loading, site_infos} = this.props;
        const { 
            countryFocus, 
            country,
            cityFocus, 
            city,
            cities,
            firs_name,
            last_name,
            email,
            phone,
            username
        } = this.state;
        return (
            <View style={profilstyle.containerform}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={profilstyle.scroolviecontainer}>
                        <View style={profilstyle.headerform}>
                            <TouchableOpacity onPress={this._navigateToHome}
                                style={profilstyle.closeButton}>
                                <Image 
                                    source={require('../../assets/images/back.png')} 
                                    style={profilstyle.closeicon} 
                                />
                            </TouchableOpacity>
                            <Text style={[styles.textBold, profilstyle.titleheader]}>Informations personnelles</Text>
                        </View>

                        <View style={profilstyle.formcontainer}>
                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Utilisateur / Pseudo</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre nom d'utilisateur"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ username: text })}
                                    value={user_infos.username}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Nom</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre nom"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ first_name: text })}
                                    value={user_infos.first_name}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Prenom</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre prenom"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ last_name: text })}
                                    value={user_infos.last_name}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Téléphone</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre numéro de téléphone"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ phone: text })}
                                    keyboardType="numeric"
                                    value={user_infos.phone}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Adresse email</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre adresse email"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ phone: text })}
                                    keyboardType="email-address"
                                    value={user_infos.email}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Votre pays</Text>
                                <Dropdown
                                    style={[styles.text, profilstyle.inputContainer, countryFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[profilstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[profilstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[profilstyle.itemTextStyle, styles.text]}
                                    containerStyle={profilstyle.containeritemdrop}
                                    iconStyle={profilstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={site_infos.countries}
                                    labelField="name"
                                    valueField="id"
                                    placeholder={!countryFocus ? 'Choisir le pays...' : '...'}
                                    onFocus={() => this.setState({ countryFocus: true })}
                                    onBlur={() => this.setState({ countryFocus: false })}
                                    onChange={item => this._toggleCountry(item)}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Votre ville</Text>
                                <Dropdown
                                    style={[styles.text, profilstyle.inputContainer, cityFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[profilstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[profilstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[profilstyle.itemTextStyle, styles.text]}
                                    containerStyle={profilstyle.containeritemdrop}
                                    iconStyle={profilstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={cities}
                                    labelField="name"
                                    valueField="id"
                                    placeholder={!cityFocus ? 'Choisir la ville...' : '...'}
                                    onFocus={() => this.setState({ cityFocus: true })}
                                    onBlur={() => this.setState({ cityFocus: false })}
                                    onChange={item => this.setState({ city: item })}
                                />
                            </View>
                    
                            <TouchableOpacity onPress={this._updateProfil}
                                style={profilstyle.submitButton}
                                disabled={is_loading ? true : false}
                            >
                                {
                                    is_loading ?
                                        <ActivityIndicator size="small" color="#fff" />
                                    :
                                        <Text style={[styles.textBold, profilstyle.submitBtnText]}>Enregistrer</Text>
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
            FetchPreloadDataAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading      : state.loader.is_loading,
        user_infos      : state.auth.user_infos,
        user_token      : state.auth.user_token,
        site_infos      : state.auth.site_infos,
        transaction_fee : state.trans.transaction_fee
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(UpdateNotify);