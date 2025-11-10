import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, SafeAreaView, Button, ActivityIndicator, ImageBackground, ScrollView, FlatList} from 'react-native';
import Moment from 'moment';
import { SectionGrid } from 'react-native-super-grid';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/Ionicons';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { servicestyle } from '../../assets/styles/service.js';
import BookBanner from './ServiceBanner.js';
import { styles } from '../../assets/styles/index.js';
import { store } from '../../reducers/store.js';
import { service_list } from '../../assets/utils/data.js';
import ServiceBanner from './ServiceBanner.js';

class ServiceIndex extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            searchText : '',
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
        return (
            <TouchableOpacity style={servicestyle.serviceitem} key={i}>
                <Image 
                    style={servicestyle.coverserviceitem}
                    source={item.cover}
                />
                <Text 
                    numberOfLines={1}
                    style={[servicestyle.bookname, styles.textBold]} >
                        {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    render(){
        const {navigation, is_loading} = this.props; 
        return(
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgroundapp}>
                <View style={servicestyle.servicecontainer}>
                    
                    <View style={servicestyle.headerservice}>
                        <View style={servicestyle.serviceheaderlogocontainer}>
                            <Image source={require('../../assets/images/logo.png')} style={servicestyle.servicelogo} />
                        </View>
                        <View style={servicestyle.containerheadertitle}>
                            <Text style={[styles.textBold, servicestyle.headerservicetitle]}>Services</Text>
                        </View>
                        <TouchableOpacity style={servicestyle.serviceheadersearch}>
                            <Image source={require('../../assets/images/recherche.png')} style={servicestyle.servicelsearchlogo} />
                        </TouchableOpacity>
                    </View>

                    <ServiceBanner />

                    <View style={servicestyle.containerlistservice}>
                        <View style={servicestyle.servicelistheader}>
                            <Text style={[styles.textBold, servicestyle.servlisttitle]}>Consultez nos offres</Text>
                        </View>

                        <FlatList 
                            style={servicestyle.serviceitemlist}
                            renderItem={({item, index}) => this._renderItem(item, index)}
                            keyExtractor={(items, index) => index.toString()}
                            
                        />
                    </View>
                </View>
            </ImageBackground>
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