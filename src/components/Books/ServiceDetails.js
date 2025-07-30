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
                <ScrollView>
                    <View style={[servicestyle.container]}>
                        <View style={[servicestyle.container3]}>
                            <View style={servicestyle.promoContainer}>
                                <Image  source={require('../../assets/images/biblio.jpg')}  style={servicestyle.promoImage} />
                            </View>
                            <Text style={servicestyle.Title}></Text>
                            <Text style={servicestyle.autor}></Text>
                            <Text style={servicestyle.Description}></Text>
                        </View>
                        
                    </View>
                </ScrollView>

                <TouchableOpacity 
                    style={servicestyle.btn}> 
                    <Image  source={require('../../assets/images/orange.png')}  style={servicestyle.orange} />
                    <Text style={[servicestyle.textbtndetail, styles.textBold]}>Via MTN money</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={servicestyle.btn2}> 
                    <Image  source={require('../../assets/images/mtn.jpg')}  style={servicestyle.mtn} />
                    <Text style={[servicestyle.textbtndetail2, styles.textBold]}>Via Orange Money</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={servicestyle.btn3}> 
                    <Image  source={require('../../assets/images/visacard.png')}  style={servicestyle.visa} />
                    <Text style={[servicestyle.textbtndetail3, styles.textBold]}>Via Carte</Text>
                </TouchableOpacity>

               


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

export default connect(mapStateToProps, mapDispatchToProps, null)(BookDetail);