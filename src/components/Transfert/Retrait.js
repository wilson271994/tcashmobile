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
import { retraitstyle } from '../../assets/styles/retrait.js';

const dataoperatorcountry = [
    { label: 'Canada', value: '1' },
    { label: 'Cameroun', value: '2' },
];

class Retrait extends PureComponent {
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
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate(' ');
    }

    toggleBalanceVisibility = () => {
        this.setState(prevState => ({ balanceVisible: !prevState.balanceVisible }));
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
            <ScrollView style={retraitstyle.container}>
                <View style={retraitstyle.header}>
                    <TouchableOpacity 
                        onPress={this._navigateToHome}
                        style={retraitstyle.closeButton}>
                        <Text style={retraitstyle.closeText}>×</Text>
                    </TouchableOpacity>
                    <Text style={retraitstyle.title}>Retrait d'argent</Text>
                </View>
        
                <View style={retraitstyle.section}>
                    <Text style={[styles.text, retraitstyle.label]}>Montant à retirer</Text>
                    <View style={retraitstyle.inputContainer}>
                        <Text style={retraitstyle.currency}>{user_infos.currency}</Text>
                        <TextInput
                            style={[retraitstyle.input, styles.text]}
                            placeholder="0"
                            placeholderTextColor='#c6c6c6'
                            value={montant}
                            onChangeText={text => this.setState({ montant: text })}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
        
                <View style={retraitstyle.section}>
                    <Text style={[styles.text, retraitstyle.label]}>Moyen de retrait</Text>
                    <View style={retraitstyle.radioGroup}>
                        <TouchableOpacity style={[
                                retraitstyle.radioOption,
                                typeRecharge === 30056 && retraitstyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 30056 })}
                        >
                            <View style={retraitstyle.radioCircle}>
                                {typeRecharge === 30056 && <View style={retraitstyle.radioDot} />}
                            </View>
                            <View style={retraitstyle.radioContent}>
                                <Image
                                source={require('../../assets/images/logo_orange.png')} // Logo MTN
                                style={retraitstyle.radioLogo}
                                />
                                <Text style={[retraitstyle.radioTitle, styles.textBold]}>Orange money Cameroun</Text>
                            </View>
                        </TouchableOpacity>
            
            
                        <TouchableOpacity style={[
                                retraitstyle.radioOption,
                                typeRecharge === 20056 && retraitstyle.radioOptionSelected,
                            ]}
                            onPress={() => this.setState({ typeRecharge: 20056 })}
                            >
                            <View style={retraitstyle.radioCircle}>
                                {typeRecharge === 20056 && <View style={retraitstyle.radioDot} />}
                            </View>
                            <View style={retraitstyle.radioContent}>
                                <Image
                                source={require('../../assets/images/mtn.jpg')} // Logo MTN
                                style={retraitstyle.radioLogo}
                                />
                                <Text style={[retraitstyle.radioTitle, styles.textBold]}>Mtn mobile money Cameroun</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={retraitstyle.continueButton}>
                <Text style={retraitstyle.continueText}>Continuer</Text>
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

export default connect(mapStateToProps, mapDispatchToProps, null)(Retrait);