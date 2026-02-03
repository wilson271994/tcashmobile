import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, ImageBackground, ActivityIndicator, FlatList} from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import {switchHeaderAction, TransactionListAction} from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';
import { transactionstyle } from '../../assets/styles/transaction.js';
import IconFA  from 'react-native-vector-icons/FontAwesome';
import { ROOT_NAVIGATION, TRANSACTION_DETAIL } from '../../reducers/actions/types.js';
import { store } from '../../reducers/store.js';
import { BASE_URL } from '../../api/config.js';

class TransactionIndex extends PureComponent {
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
        this._fechtData();
    }

    _fechtData = async () => {
        const {user_token} = this.props;
        TransactionListAction(user_token);
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
            <View style={transactionstyle.footerlist}> 
                <ActivityIndicator size="small" />
            </View>
        );
    };

    _renderItem = (item) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={this. _navigateTotransactionDetail.bind(this, item)}
                    style={transactionstyle.historytransitem}>
                    <View style={transactionstyle.histcovercontainer}>
                        <Image
                            source={{ uri : BASE_URL + item.service.logo }}
                            style={transactionstyle.historycover} />
                    </View>

                    <View style={transactionstyle.historycontent}>
                        <Text style={[styles.textBold, transactionstyle.histtranstype]}>{item.service.name}</Text>
                        <Text style={[styles.textItalicBold, transactionstyle.histransamount]}>
                            {item.service.service_code === 1001 ? '+ ' : '- '  }{item.initial_amount} {item.currency === 'XAF' ? 'FCFA' : item.currency}
                        </Text>
                        <Text style={[styles.text, transactionstyle.histtransauthor]}>Auteur : {item.MobileWcustomerName}</Text>
                    </View>

                    <View style={transactionstyle.historystatus}>
                        {
                            item.transactionStatus === 'SUCCESS' ?
                                <Text style={[styles.textItalicBold, transactionstyle.histtransstatussuccess]}>Réussie</Text>
                            :
                                <Text style={[styles.textItalicBold, transactionstyle.histtransstatusfail]}>Échouée</Text>
                        }
                        <Text 
                            numberOfLines={3}
                            style={[styles.text, transactionstyle.histtranstime]}>{item.created_day} à {item.created_time}</Text>
                    </View>
                </TouchableOpacity>
                <View style={transactionstyle.separatoritemhist} />
            </View>
        )
    }

    _renderEmpty = (item) => {
        return (
            <View style={transactionstyle.emptycard}>
                <Text style={[styles.text, transactionstyle.emptylisttext]}>Aucune Transaction pour l'instant.</Text>
            </View>
        )
    }

    render(){
        const {navigation, is_loading, transaction_list} = this.props; 
        const {refreshing} = this.state;
        return(
            <View style={transactionstyle.containertrans}>
                <ImageBackground 
                    source={require('../../assets/images/background.jpg')} 
                    style={styles.backgroundapp}
                    resizeMode="cover"
                >
                    <View style={transactionstyle.headerpage}>
                        <Text style={[styles.textBold, transactionstyle.titlepage]}>Liste des transactions</Text>
                        <TouchableOpacity style={transactionstyle.searchtrans}>
                            <Text style={[styles.text, transactionstyle.searchtext]}>Recherche...</Text> 
                            <IconFA name='search' style={transactionstyle.logosearch} />
                        </TouchableOpacity>
                    </View>

                    <View style={transactionstyle.containeritem}>
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
        transaction_list    : state.list.transaction_list
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(TransactionIndex);