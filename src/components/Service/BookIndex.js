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
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons.js';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import Search from '../../screens/Search.js';
import { bookstyle } from '../../assets/styles/books.js';
import BookBanner from './BookBanner.js';
import { styles } from '../../assets/styles/index.js';
import cover from '../../assets/images/biblio.jpg';
import { searchstyle } from '../../assets/styles/search.js';
import { homestyle } from '../../assets/styles/home.js';
import { store } from '../../reducers/store.js';

const book_list = [
    {
        'id'    : 1,
        'name' : 'Favorit book one',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 2,
        'name' : 'Favorit book two',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 3,
        'name' : 'Favorit book three',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 4,
        'name' : 'Favorit book three',
        'label' : 'favorit',
        'cover' : cover
    },
    {
        'id'    : 5,
        'name' : 'Favorit book three',
        'label' : 'favorit',
        'cover' : cover
    },
]

class BookIndex extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
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
            <View style={bookstyle.booklistpage}>
                <TouchableOpacity 
                     onPress={this._navigateToBookDetail.bind(this, item)}
                    style={bookstyle.covercontainer}>
                    <Image 
                        style={bookstyle.coverbook}
                        source={item.cover}
                    />
                    
                    <View style={bookstyle.statbook}>
                        <View style={bookstyle.itemblogstat}>
                            <Icon name="thumbs-up-outline" style={bookstyle.iconstatblog} />
                            <Icon name="heart-outline" style={bookstyle.iconstatblog} />
                            <Icon name="share-social" style={bookstyle.iconstatblog} />                                  
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={bookstyle.infobookcontainer}>
                    <Text 
                        numberOfLines={1}
                        style={[bookstyle.bookname, styles.textBold]} >
                            {item.name}
                    </Text>

                    <View style={bookstyle.footerbook}>
                        <Text 
                            numberOfLines={1} 
                            style={[styles.textBold, bookstyle.textprice]}>
                                2000 XAF
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={this._navigateToBookDetail.bind(this, item)}
                    style={bookstyle.btndetail}> 
                    <MaterialCommunityIcons name='basket-fill' style={bookstyle.icondetail}/>
                    <Text style={[bookstyle.textbtndetail, styles.textBold]}>Commander </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        const {navigation, is_loading} = this.props; 
        return(
            <SafeAreaView style={bookstyle.container2}>
                <View style={searchstyle.container}>
                    <View style={searchstyle.header}>
                            <Image
                                source={require('../../assets/images/logo.png')} // Remplacez par le chemin de votre image
                                style={homestyle.logo2}
                            />
                             
                        <View style={homestyle.headeritemright}>
                        <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/notification.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.notification}
                                />
                            </TouchableOpacity>

                            

                            <TouchableOpacity>
                                 <Image
                                    source={require('../../assets/images/panier.png')} // Remplacez par le chemin de votre image
                                    style={homestyle.panier}
                                />
                            </TouchableOpacity>

                            <View style={homestyle.counter}>
                                <Text style={homestyle.index}>0</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <SectionGrid
                    ListHeaderComponent={ 
                        <BookBanner />
                    }
                    style={[styles.card, bookstyle.gridcontainer]}
                    spacing={15}
                    sections={[{data: book_list}]}
                    renderItem={({ item, index }) => (this._renderItem(item, index))}   
                    refreshing={is_loading}     
                    //onEndReached={this._fetchMoreProduct}
                />

                {
                    book_list.length === 0 && is_loading === false ?
                        <View style={bookstyle.emptypage}>
                            <Text style={[styles.text, bookstyle.textempty]}>Aucun livre disponible dans cette rubrique!</Text>
                        </View>
                    :null
                }
                {
                    book_list.length === 0 || is_loading ?
                        <View style={bookstyle.loadershopping}>
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

  export default connect(mapStateToProps, mapDispatchToProps, null)(BookIndex);