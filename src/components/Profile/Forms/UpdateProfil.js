import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../../../assets/styles/index.js';
import Toast from 'react-native-toast-message';
import { FetchPreloadDataAction, UpdateProfilAction } from '../../../reducers/actions/index.js';
import { profilstyle } from '../../../assets/styles/profil.js';

class UpdateProfil extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            cities:[],
            countryFocus:false,
            country:'',
            cityFocus:false,
            city:'',
            username:'',
            first_name:'',
            last_name:'',
            phone:'',
            email:''
        }
    }

    componentDidMount(){
        this._fetchNecessaryData();
    }

    _fetchNecessaryData = () => {
        const {user_infos} = this.props;
        this.setState({
            country         : user_infos.country,
            city            : user_infos.city,
            username        : user_infos.username,
            first_name      : user_infos.first_name,
            last_name       : user_infos.last_name,
            phone           : user_infos.phone,
            email           : user_infos.email
        })
        FetchPreloadDataAction();
    }

    _navigateToProfil = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    _toggleCountry = (item) => {
        this.setState({country:item.id})
        this.setState({cities:item.cities});
    }

    _updateProfil = () => {
        const { navigation, user_token } = this.props;
        const {username, first_name, last_name, phone, email, country, city} = this.state;
        const data = JSON.stringify({
            token       : user_token,
            username    : username,
            first_name  : first_name,
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
            first_name,
            last_name,
            email,
            phone,
            username
        } = this.state;
        return (
            <View style={profilstyle.containerform}>
                <ImageBackground 
                    source={require('../../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <ScrollView contentContainerStyle={profilstyle.scroolviecontainer}>
                        <View style={profilstyle.headerform}>
                            <TouchableOpacity onPress={this._navigateToProfil}
                                style={profilstyle.closeButton}>
                                <Image 
                                    source={require('../../../assets/images/back.png')} 
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
                                    value={username}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Nom</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre nom"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ first_name: text })}
                                    value={first_name}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Prenom</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir votre prenom"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ last_name: text })}
                                    value={last_name}
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
                                    value={phone}
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
                                    value={email}
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
                                    data={site_infos.countries ? site_infos.countries : []}
                                    labelField="name"
                                    valueField="id"
                                    value={country}
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
                                    value={city}
                                    placeholder={!cityFocus ? 'Choisir la ville...' : '...'}
                                    onFocus={() => this.setState({ cityFocus: true })}
                                    onBlur={() => this.setState({ cityFocus: false })}
                                    onChange={item => this.setState({ city: item.id })}
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

export default connect(mapStateToProps, mapDispatchToProps, null)(UpdateProfil);