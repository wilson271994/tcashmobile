import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text, Image, TextInput, Modal,TouchableOpacity, ActivityIndicator, ImageBackground, ScrollView, Linking} from 'react-native';
import  {styles}  from '../../assets/styles';
import Moment from 'moment';
import 'moment/locale/fr';
import Foundation  from 'react-native-vector-icons/Foundation';
import Entypo  from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { store } from '../../reducers/store';
import { loginstyle } from '../../assets/styles/login';
import { Dropdown, SelectCountry } from 'react-native-element-dropdown';
import AwesomeAlert from 'react-native-awesome-alerts';
import { SignupAction } from '../../reducers/actions';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { IS_AUTHENTICATED } from '../../reducers/actions/types';

const handleValidation = () => {
    if (!prenom || !numRue || !pays || !ville || !telephone  || !typeCompte) {
      Alert.alert('Erreur', 'Tous les champs sont obligatoires.');
    } else {
      Alert.alert('Succès', 'Formulaire soumis avec succès !');
    }
};

class Preload extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
           
        } 
    };

    componentDidMount(){

    }

    _navigateToHome = () => {
        //upate state is_authenticated
        store.dispatch({type:IS_AUTHENTICATED, value:true});
    }

    _closeAlert = () => {
        this.setState({is_alert:false}); 
    }

    _redirectPolicy = (url) => {
        Linking.openURL(url);
    }

    render(){
        const {is_loading} = this.props;
        const {password1Visible, password2Visible, acceptCondition, confidFocus, gender, is_alert, alert_title, alert_subtitle} = this.state;
        return(
            
            <View style={[loginstyle.containerPreload]}>

                
                <View style={loginstyle.preloadlogo}>

                <Image
                source={require('../../assets/images/logo.png')}
                  style={loginstyle.preloadheaderlogo}
                />
                      
                </View>

                <View style={loginstyle.preloadlogo}>

                 <Text style={[styles.textBold, loginstyle.textpreload]}>A house without a book is like a body without a soul</Text>

                </View>

                <View style={loginstyle.preloadimage}>

                <Image
                source={require('../../assets/images/preload.png')}
                  style={loginstyle.preloadheaderimage}
                />
                      
                </View>
                <View style={loginstyle.footerpreload}>
                    <TouchableOpacity 
                        disabled={is_loading ? true : false}
                        style={loginstyle.btnspreload} 
                        onPress={this._navigateToHome}>
                    {
                        is_loading ?
                            <View style={loginstyle.loaderbtn}>
                                <ActivityIndicator size="small" color="#fff" />
                            </View>  
                        :
                            <Text style={[styles.textBold, loginstyle.textbtnsubmit]}>
                                Prise en main <FontAwesome name='angle-right' style={loginstyle.iconpreload} />
                            </Text>
                    }
                    </TouchableOpacity>       
                </View>

            </View>
        )
    }


} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading:state.loader.is_loading,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Preload);