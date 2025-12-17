import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text,  Image,SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/styles';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { store } from '../../reducers/store';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import 'moment/locale/fr';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';

import cover from '../../assets/images/biblio.jpg';
import { servicestyle } from '../../assets/styles/service';

class BookDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render(){
        const {is_loading} = this.props;
        return( 

      <SafeAreaView style={servicestyle.container}>
            <View style={servicestyle.Header}>
            <TouchableOpacity onPress={() => console.log('Retour')}>
            </TouchableOpacity>
            <Text style={servicestyle.headerTitle}>recharge</Text>
            <TouchableOpacity onPress={() => console.log('Limites de dépôt')}>
                <Text style={servicestyle.headerButton}>limites de dépôt</Text>
            </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={servicestyle.contentContainer}>
                <View style={servicestyle.adContainer}>
                    <Image
                    source={require('../../assets/images/lion.jpg')} // Assurez-vous d'avoir une image locale ou utilisez un URI
                    style={servicestyle.adImage}
                    />
                    <View style={servicestyle.adTextContainer}>
                    <Text style={servicestyle.adTitle}>BURGER AND PINT</Text>
                    <Text style={servicestyle.adPrice}>£ PRICE HERE</Text>
                    </View>
                </View>

                <View style={servicestyle.section}>
                    <Text style={servicestyle.sectionTitle}>
                    Effectuez votre dépôt sur votre compte T_cash via{"\n"}
                    momo au OM
                    </Text>
                    <TouchableOpacity style={servicestyle.optionItem} onPress={() => console.log('Mobile Money sélectionné')}>
                    <View style={servicestyle.optionLeft}>
                        <View style={servicestyle.optionIconContainer}>
                        <FontAwesome name="exchange" size={24} color="#00BFA5" />
                        </View>
                        <View>
                        <Text style={servicestyle.optionTitle}>Mobile Money</Text>
                        <View style={servicestyle.mobileLogos}>
                            <Image
                            source={require('../../assets/images/mtn.jpg')} // Remplacez par le chemin de vos images
                            style={servicestyle.Logo}
                            />
                            <Image
                            source={require('../../assets/images/orange.png')} // Remplacez par le chemin de vos images
                            style={servicestyle.Logo}
                            />
                        </View>
                        </View>
                    </View>
                    <FontAwesome name="arrow-right" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={servicestyle.section}>
                    <Text style={servicestyle.sectionTitle}>
                    Effectuez votre dépôt sur votre compte T_cash via une{"\n"}
                    banque
                    </Text>
                    <TouchableOpacity style={servicestyle.optionItem} onPress={() => console.log('Banque sélectionnée')}>
                    <View style={servicestyle.optionLeft}>
                        <View style={servicestyle.optionIconContainer}>
                        <FontAwesome name="bank" size={24} color="#00BFA5" />
                        </View>
                        <Text style={servicestyle.optionTitle}>Banque</Text>
                    </View>
                    <FontAwesome name="arrow-right" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
      </SafeAreaView>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BookDetail);