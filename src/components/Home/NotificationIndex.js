import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, ImageBackground, ActivityIndicator, FlatList} from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import {switchHeaderAction, TransactionListAction} from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';
import IconFA  from 'react-native-vector-icons/FontAwesome';
import { ROOT_NAVIGATION, TRANSACTION_DETAIL } from '../../reducers/actions/types.js';
import { store } from '../../reducers/store.js';
import { BASE_URL } from '../../api/config.js';
import { notifstyle } from '../../assets/styles/notif.js';

class NotificationIndex extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            refreshing : false,
        }
    };

    handleChangeText = (text) => {
        this.setState({ searchText: text });
    };

    componentDidMount(){
        //this._fechtData();
    }

    _fechtData = async () => {
        const {user_token} = this.props;
        TransactionListAction(user_token);
    }

    _backToHome = () => {
        const {root_navigation} = this.props;
        root_navigation.goBack();
    }

    _onRefresh = async () => { 
        this.setState({refreshing:true}) 
        this._fechtData().then(() => {this.setState({refreshing:false})})
    }

    _navigateTotransactionDetail = (item) => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        store.dispatch({type:TRANSACTION_DETAIL, value:item})
        navigation.navigate('TransactionDetail');
    }

    _renderFooter = () => {
        const {is_loading} = this.props;
        if (!is_loading) return null;
        return (
            <View style={notifstyle.footerlist}> 
                <ActivityIndicator size="small" />
            </View>
        );
    };

    _renderItem = (item) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={this. _navigateTotransactionDetail.bind(this, item)}
                    style={notifstyle.historytransitem}>
                    <View style={notifstyle.histcovercontainer}>
                        <Image
                            source={{ uri : BASE_URL + item.service.logo }}
                            style={notifstyle.historycover} />
                    </View>

                    <View style={notifstyle.historycontent}>
                        <Text style={[styles.textBold, notifstyle.histtranstype]}>{item.service.name}</Text>
                        <Text style={[styles.textItalicBold, notifstyle.histransamount]}>
                            {item.service.service_code === 1001 ? '+ ' : '- '  }{item.initial_amount} {item.currency === 'XAF' ? 'FCFA' : item.currency}
                        </Text>
                        <Text style={[styles.text, notifstyle.histtransauthor]}>Auteur : {item.MobileWcustomerName}</Text>
                    </View>

                    <View style={notifstyle.historystatus}>
                        {
                            item.transactionStatus === 'SUCCESS' ?
                                <Text style={[styles.textItalicBold, notifstyle.histtransstatussuccess]}>Réussie</Text>
                            :
                                <Text style={[styles.textItalicBold, notifstyle.histtransstatusfail]}>Échouée</Text>
                        }
                        <Text 
                            numberOfLines={3}
                            style={[styles.text, notifstyle.histtranstime]}>{item.created_day} à {item.created_time}</Text>
                    </View>
                </TouchableOpacity>
                <View style={notifstyle.separatoritemhist} />
            </View>
        )
    }

    _renderEmpty = (item) => {
        return (
            <View style={notifstyle.emptycard}>
                <Text style={[styles.text, notifstyle.emptylisttext]}>Aucune notification pour l'instant.</Text>
            </View>
        )
    }

    render(){
        const {navigation, is_loading, transaction_list} = this.props; 
        const {refreshing} = this.state;
        return(
            <View style={notifstyle.containertrans}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <View style={notifstyle.headerpage}>
                        <View style={notifstyle.headerpage2}>
                            <TouchableOpacity 
                                onPress={this._backToHome}
                                style={notifstyle.backbtn}>
                                <Image source={require('../../assets/images/back.png')} style={notifstyle.backicon} />
                            </TouchableOpacity>
                            <Text style={[styles.textBold, notifstyle.titlepage]}>Notifications</Text>
                        </View>
                        <TouchableOpacity style={notifstyle.searchtrans}>
                            <Text style={[styles.text, notifstyle.searchtext]}>Recherche...</Text> 
                            <IconFA name='search' style={notifstyle.logosearch} />
                        </TouchableOpacity>
                    </View>

                    <View style={notifstyle.containeritem}>
                        <FlatList 
                            data={transaction_list}
                            renderItem={({item, index}) => this._renderItem(item, index)}
                            keyExtractor={(items, index) => index.toString()}
                            //onEndReached={this._onRefresh}
                            //onEndReachedThreshold={0.5}
                            ListFooterComponent={this._renderFooter}
                            ListEmptyComponent={this._renderEmpty}
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
            TransactionListAction,
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        user_infos          : state.auth.user_infos,
        user_token          : state.auth.user_token,
        is_loading          : state.loader.is_loading,
        transaction_list    : state.list.transaction_list,
        root_navigation     : state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(NotificationIndex);