import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image } from 'react-native';
import { styles } from '../../assets/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import Moment from 'moment';
import { Picker } from '@react-native-picker/picker'; // Pour lepaystyles listes déroulantes
import 'moment/locale/fr';
import cover from '../../assets/images/biblio.jpg';
import { paystyle } from '../../assets/styles/paiement';

class PaieIndex extends PureComponent {
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
            <SafeAreaView style={paystyle.container2}>
                    <ScrollView 
                        onScrollBeginDrag={this._toggleScrollView} 
                        contentContainerStyle={paystyle.scrollContainer}>
                        <View style={paystyle.container2}>

                            <View style={paystyle.backgroundCircle4}>

                            </View>
                           <Image source={require('../../assets/images/logo.png')} style={paystyle.iconmenup} />
                        </View>
                        <Text style={paystyle.price}>11 000,00 FCFA</Text>
                        <Text style={paystyle.phone}>De +237****221</Text>
                        <Text style={paystyle.date}>Mardi, 05 aout 2025, 16:59</Text>

                        <Text style={paystyle.detail}>Détail du paiement</Text>
                        <View style={paystyle.view}>
                            <Text style={paystyle.state}>Statut</Text>
                            <Text style={paystyle.statut}>Terminé</Text>
                            <Text style={paystyle.state}>Catégories</Text>
                            <Text style={paystyle.statut}>Reacharge Neero</Text>
                            <Text style={paystyle.state}>Nom du service</Text>
                            <Text style={paystyle.statut}>Reacharge compte T-cash</Text>
                        </View>
                        
                        <Text style={paystyle.detail}>Source du paiement</Text>
                        <View style={paystyle.view}>
                            <Text style={paystyle.state}>Wallet</Text>
                            <Text style={paystyle.statut}>Orange Money</Text>
                            <Text style={paystyle.state}>Numero anrede</Text>
                            <Text style={paystyle.statut}>+237****221</Text>
                            <Text style={paystyle.state}>Montant</Text>
                            <Text style={paystyle.statut}>11 000,00FCFA</Text>
                            <Text style={paystyle.state}>Total des frais</Text>
                            <Text style={paystyle.statut}>Gratuit</Text>
                            <Text style={paystyle.state}>Montant payé</Text>
                            <Text style={paystyle.statut}>11 000,00FCFA</Text>
                            <Text style={paystyle.state}>Origine</Text>
                            <Text style={paystyle.statut}>Cameroun</Text>
                        </View>

                         <Text style={paystyle.detail}>Destination du paiement</Text>
                        <View style={paystyle.view}>
                            <Text style={paystyle.state}>Bénéficiaire</Text>
                            <Text style={paystyle.statut}>Compte T_cash</Text>
                            <Text style={paystyle.state}>Référence</Text>
                            <Text style={paystyle.statut}>1234-5678-9123</Text>
                        </View>

                    </ScrollView> 
            </SafeAreaView>
        )
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(PaieIndex);