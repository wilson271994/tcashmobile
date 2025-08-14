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
import Swiper from 'react-native-swiper';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';

import cover from '../../assets/images/biblio.jpg';
import { bookstyle } from '../../assets/styles/books';

class BookDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render(){
        const {is_loading} = this.props;
        return( 
            <SafeAreaView style={bookstyle.container}>
                <ScrollView>
                    <View style={[bookstyle.container]}>
                        <View style={[bookstyle.container3]}>
                        <View style={bookstyle.promoContainer}>
                                <Image  source={require('../../assets/images/biblio.jpg')}  style={bookstyle.promoImage} />
                            </View>
                                <Text style={bookstyle.Title}>Titre du livre</Text>
                                <Text style={bookstyle.autor}>Nom de l'auteur</Text>
                                <Text style={bookstyle.Description}>Lorem inpushv ;lkjpsopppsotgwerperw
                                    sdlkdjfoidfjerw
                                    sdiwjeroidjfowiejriowehfjn fmgnbd;olg
                                </Text>
                        </View>
                        
                    </View>
                </ScrollView>

                <TouchableOpacity 
                    style={bookstyle.btn}> 
                    <MaterialCommunityIcons name='basket-fill' style={ bookstyle.icondetail}/>
                    <Text style={[bookstyle.textbtndetail, styles.textBold]}>Ajouter au panier</Text>
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