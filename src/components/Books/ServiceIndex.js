import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, StyleSheet, Modal, Platform, SafeAreaView, Button, ActivityIndicator, ImageBackground, ScrollView, Linking, TouchableHighlight} from 'react-native';
import Moment from 'moment';
import { SectionGrid } from 'react-native-super-grid';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { servicestyle } from '../../assets/styles/service.js';
import BookBanner from './BookBanner.js';
import { styles } from '../../assets/styles/index.js';
import cover from '../../assets/images/biblio.jpg';

import { store } from '../../reducers/store.js';

const service_list = [
    {
        'id'    : 1,
        'name' : 'Recharge',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 2,
        'name' : 'Retrait',
        'cover' : cover
    },
    {
        'id'    : 3,
        'name' : 'Consulter le solde',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 4,
        'name' : 'Tranfert',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 5,
        'name' : 'Créer une carte virtuelle',
        'label' : 'favorit',
        'cover' : cover
    },
]

class ServiceIndex extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
          searchText : 
            ' ',
        }
    };
   handleChangeText = (text) => {
        this.setState({ searchText: text });
    };
    componentDidMount(){
        this._fechtData();
    } 
  
    _fechtData = async () => {
        await switchHeaderAction(true);  
    } 
    _navigateToBookDetail = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('BookDetail');
    }
   

    _renderItem = (item) => {
        const {user_infos} = this.props;  
        return (
            <View style={servicestyle.booklistpage}>
                <TouchableOpacity 
                    onPress={this._navigateToBookDetail.bind(this, item)}
                    style={servicestyle.covercontainer}>
                    <Image 
                        style={servicestyle.coverbook}
                        source={item.cover}
                    />
                </TouchableOpacity>
                <View style={servicestyle.infobookcontainer}>
                    <Text 
                        numberOfLines={1}
                        style={[servicestyle.bookname, styles.textBold]} >
                            {item.name}
                    </Text>
                </View>
                <TouchableOpacity 
                    onPress={this._navigateToBookDetail.bind(this, item)}
                    style={servicestyle.btndetail}> 
                    <Image style={servicestyle.backstyle} source={require('../../assets/images/back.png')} />
                    <Text style={[servicestyle.textbtndetail, styles.textBold]}>{item.name} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        const {navigation, is_loading} = this.props; 
        return(
            <SafeAreaView style={servicestyle.container2}>
              <View style={servicestyle.header}>
                    <View style={servicestyle.headeritemleft}>
                        <Image
                            source={require('../../assets/images/logo.png')} // Remplacez par le chemin de votre image
                            style={servicestyle.logo2}
                        />
                    </View>

                    <View style={[servicestyle.searchcontainer, servicestyle.headeritemmidle]}>
                        <View style={servicestyle.inputSearch}>
                            <TextInput
                                style={servicestyle.SearchBar}
                                placeholderTextColor='#fff'
                                onChangeText={this.handleChangeText}
                                value={this.state.searchText}
                                placeholder='Recherche...'
                            />
                            <Icon name='search' style={servicestyle.searchIcons} />
                        </View>
                    </View>
                
                    <View style={servicestyle.headeritemright}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/notification.png')} // Remplacez par le chemin de votre image
                                style={servicestyle.notification}
                            />
                        </TouchableOpacity>

                       
                        <TouchableOpacity>
                                 <Image
                                    source={require('../../assets/images/panier.png')} // Remplacez par le chemin de votre image
                                    style={servicestyle.panier1}
                                /> 
                            </TouchableOpacity>

                            <View style={servicestyle.counter1}>
                                <Text style={servicestyle.index}>0</Text>
                            </View>
                            
                    </View>

                </View>
                <SectionGrid
                    ListHeaderComponent={ 
                        <BookBanner />
                    }
                    style={[styles.card, servicestyle.gridcontainer]}
                    spacing={15}
                    sections={[{data: service_list}]}
                    renderItem={({ item, index }) => (this._renderItem(item, index))}   
                    refreshing={is_loading}     
                    //onEndReached={this._fetchMoreProduct}
                />

                {
                    service_list.length === 0 && is_loading === false ?
                        <View style={servicestyle.emptypage}>
                            <Text style={[styles.text, servicestyle.textempty]}>Aucun livre disponible dans cette rubrique!</Text>
                        </View>
                    :null
                }
                {
                    service_list.length === 0 || is_loading ?
                        <View style={servicestyle.loadershopping}>
                            <ActivityIndicator size='large' color='#2e27a5' />
                        </View>
                    :null
                }

            </SafeAreaView>
        )
    }
  } 


 


const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            switchHeaderAction,
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        user_infos:state.auth.user_infos,
        is_loading : state.loader.is_loading
    }
}

  export default connect(mapStateToProps, mapDispatchToProps, null)(ServiceIndex);