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
import IconFA  from 'react-native-vector-icons/FontAwesome';
import { BASE_URL } from '../../api/config.js';

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
    } 
    
    _navigateToBookDetail = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('BookDetail');
    }

    _renderFooter = () => {
        const {is_loading} = this.props;
        if (!is_loading) return null;
        return (
            <View style={servicestyle.footerlist}> 
                <ActivityIndicator size="small" />
            </View>
        );
    };

    _navigateToDeposit = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Deposit');
    }

    _navigateToTransfer = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Transfer');
    }

    _navigateToWithdrawal = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('Withdraw');
    }

    _renderItem = (item) => { 
        return (
            <TouchableOpacity 
                style={servicestyle.serviceitem}
                onPress={
                    item.service_code === 1001 ?
                        this._navigateToDeposit 
                    :
                    item.service_code === 1002 ?
                        this._navigateToTransfer
                    :
                        this._navigateToWithdrawal
                }
            >
                <View style={servicestyle.servicecovercontainer}>
                    <Image 
                        style={servicestyle.coverserviceitem}
                        source={{ uri : BASE_URL + item.cover }}
                    />
                </View>
                <View style={servicestyle.footerserviceitem}>
                    <Text 
                        numberOfLines={1}
                        style={[styles.textBold, servicestyle.nameservice]} >
                            {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderEmpty = (item) => {
        return (
            <View style={servicestyle.emptycard}>
                <Text style={[styles.text]}>Aucun service pour l'instant.</Text>
            </View>
        )
    }

    render(){
        const {navigation, is_loading, service_list} = this.props; 
        return(
            <View style={servicestyle.servicecontainer}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <View style={servicestyle.headerpage}>
                        <Text style={[styles.textBold, servicestyle.titlepage]}>Consultez nos services</Text>
                        <TouchableOpacity style={servicestyle.searchtrans}>
                            <Text style={[styles.text, servicestyle.searchtext]}>Recherche...</Text> 
                            <IconFA name='search' style={servicestyle.logosearch} />
                        </TouchableOpacity>
                    </View>

                    {/* <ServiceBanner /> */}

                    <View style={servicestyle.containeritem}>
                        <FlatList 
                            data={service_list}
                            renderItem={({item, index}) => this._renderItem(item, index)}
                            keyExtractor={(items, index) => index.toString()}
                            //onEndReached={this._onRefresh}
                            //onEndReachedThreshold={0.5}
                            ListFooterComponent={this._renderFooter}
                            ListEmptyComponent={this._renderEmpty}
                            numColumns={2}
                        />
                    </View>
                </ImageBackground>
            </View>
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
        user_infos      : state.auth.user_infos,
        is_loading      : state.loader.is_loading,
        service_list    : state.list.service_list
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(ServiceIndex);