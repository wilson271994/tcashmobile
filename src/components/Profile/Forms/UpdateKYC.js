import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../../../assets/styles/index.js';
import Toast from 'react-native-toast-message';
import { FetchPreloadDataAction, UpdateKycAction, UpdateProfilAction } from '../../../reducers/actions/index.js';
import { profilstyle } from '../../../assets/styles/profil.js';
import { launchImageLibrary } from 'react-native-image-picker';
import BackgroundImage from 'react-native-elements/dist/config/BackgroundImage.js';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5.js';

const dataidentification = [
    {
        label : 'Carte nationale d\'identité',
        value : 1
    },
    {
        label : 'Passeport',
        value : 2
    },
    {
        label : 'Permit de conduire',
        value : 3
    },
    {
        label : 'Autres',
        value : 4
    },
]

const optionspickupimage = {
    mediaType: 'photo',
    quality: 0.8,
};

class UpdateProfil extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            idcardTypeFocus : false,
            idcard_type     : 1,
            idcard_number   : '',
            idcard_recto    : '',
            idcard_verso    : '',
            idcard_recto_pp : ''
        }
    }

    componentDidMount(){
        this._fetchNecessaryData();
    }

    _fetchNecessaryData = () => {
        const {user_infos} = this.props;
        this.setState({
            idcard_type         : user_infos.idcard_type,
            idcard_number       : user_infos.idcard_number,
            idcard_recto        : user_infos.idcard_recto,
            idcard_verso        : user_infos.idcard_verso,
            idcard_recto_pp     : user_infos.idcard_recto_pp,
        })
        FetchPreloadDataAction();
    }

    _navigateToProfil = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    _updateKyc = () => {
        const { navigation, user_token } = this.props;
        const {username, first_name, last_name, phone, email, country, city} = this.state;
        const data = JSON.stringify({
            token       : user_token,
            idcard_type         : user_infos.idcard_type,
            idcard_number       : user_infos.idcard_number,
            idcard_recto        : user_infos.idcard_recto,
            idcard_verso        : user_infos.idcard_verso,
            idcard_recto_pp     : user_infos.idcard_recto_pp,
        })
        UpdateKycAction(data, navigation)
    }

    _pickupRectoIdcard = async () => {
        const response = await launchImageLibrary(optionspickupimage);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('Error: ', response.errorMessage);
        } else {
            const source = { uri: response.assets[0].uri };
            this.setState({idcard_recto:source});
        }
    };

    _pickupVersoIdcard = async () => {
        const response = await launchImageLibrary(optionspickupimage);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('Error: ', response.errorMessage);
        } else {
            const source = { uri: response.assets[0].uri };
            this.setState({idcard_verso:source});
        }
    };

    _pickupRectoPPIdcard = async () => {
        const response = await launchImageLibrary(optionspickupimage);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.errorCode) {
            console.log('Error: ', response.errorMessage);
        } else {
            const source = { uri: response.assets[0].uri };
            this.setState({idcard_recto_pp:source});
        }
    };

    render() {
        const {user_infos, is_loading, site_infos} = this.props;
        const { 
            idcardTypeFocus,
            idcard_type,
            idcard_number,
            idcard_recto,
            idcard_verso,
            idcard_recto_pp
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
                            <Text style={[styles.textBold, profilstyle.titleheader]}>Confirmez votre identité</Text>
                        </View>

                        <View style={profilstyle.formcontainer}>
                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Choisir votre pièce d'identité</Text>    
                                <Dropdown
                                    style={[styles.text, profilstyle.inputContainer, idcardTypeFocus && { borderColor: 'blue' }]}
                                    placeholderStyle={[profilstyle.placeholderStyle, styles.text]}
                                    selectedTextStyle={[profilstyle.selectedTextStyle, styles.text]}
                                    itemTextStyle={[profilstyle.itemTextStyle, styles.text]}
                                    containerStyle={profilstyle.containeritemdrop}
                                    iconStyle={profilstyle.iconStyle}
                                    dropdownPosition='auto'
                                    data={dataidentification}
                                    labelField="label"
                                    valueField="value"
                                    value={idcard_type}
                                    placeholder={!idcardTypeFocus ? 'Choisir...' : '...'}
                                    onFocus={() => this.setState({ idcardTypeFocus: true })}
                                    onBlur={() => this.setState({ idcardTypeFocus: false })}
                                    onChange={item => this.setState({idcard_type:item.value})}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Numéro de la pièce d'identité</Text>
                                <TextInput
                                    style={[profilstyle.inputContainer, styles.text]}
                                    placeholder="Saisir le numéro"
                                    placeholderTextColor='#999'
                                    onChangeText={text => this.setState({ idcard_number: text })}
                                    value={idcard_number}
                                />
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Filmer la vue de principale de la pièce</Text>
                                <TouchableOpacity onPress={this._pickupRectoIdcard}
                                    style={profilstyle.containerimagekyc}>
                                    <BackgroundImage 
                                        source={require('../../../assets/images/id-card-front.png')} 
                                        resizeMode="cover"
                                    >
                                        <View style={profilstyle.iconcontaineridcard}></View>
                                        {
                                            idcard_recto !== undefined ?
                                                <View style={profilstyle.approvedimage}>
                                                    <Image
                                                        source={require('../../../assets/images/verified.png')}
                                                        style={styles.verified}
                                                    />
                                                </View>
                                            :null
                                        }
                                    </BackgroundImage>
                                </TouchableOpacity>
                            </View>

                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Filmer l'arrière de la pièce</Text>
                                <TouchableOpacity style={profilstyle.containerimagekyc}>
                                    <BackgroundImage 
                                        source={require('../../../assets/images/id-card-back.png')} 
                                        resizeMode="cover"
                                    >
                                        <View style={profilstyle.iconcontaineridcard}></View>
                                        {
                                            idcard_verso !== undefined ?
                                                <View style={profilstyle.approvedimage}>
                                                    <Image
                                                        source={require('../../../assets/images/verified.png')}
                                                        style={styles.verified}
                                                    />
                                                </View>
                                            :null
                                        }
                                    </BackgroundImage>
                                </TouchableOpacity>
                            </View>
 
                            <View style={profilstyle.formitem}>
                                <Text style={[styles.text, profilstyle.label]}>Filmer vous avec le pièce d'identité</Text>
                                <TouchableOpacity style={profilstyle.containerimagekyc}>
                                    <BackgroundImage 
                                        source={require('../../../assets/images/id-card-user.png')} 
                                        resizeMode="cover"
                                    >
                                        <View style={profilstyle.iconcontaineridcard}></View>
                                        {
                                            idcard_recto_pp !== undefined ?
                                                <View style={profilstyle.approvedimage}>
                                                    <Image
                                                        source={require('../../../assets/images/verified.png')}
                                                        style={styles.verified}
                                                    />
                                                </View>
                                            :null
                                        }
                                    </BackgroundImage>
                                </TouchableOpacity>
                            </View>
                    
                            <TouchableOpacity onPress={this._updateKyc}
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