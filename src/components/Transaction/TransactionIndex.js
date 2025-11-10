import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {View, Text,TouchableOpacity, Image, TextInput, SafeAreaView, Button, ActivityIndicator, ImageBackground, ScrollView, FlatList} from 'react-native';
import Moment from 'moment';
import 'moment/locale/fr';
import {switchHeaderAction} from '../../reducers/actions/index.js';
import { styles } from '../../assets/styles/index.js';
import { transactionstyle } from '../../assets/styles/transaction.js';
import IconFA  from 'react-native-vector-icons/FontAwesome';
import { transaction_list } from '../../assets/utils/data.js';
import { ROOT_NAVIGATION } from '../../reducers/actions/types.js';
import { store } from '../../reducers/store.js';

class TransactionIndex extends PureComponent {
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

    _navigateToTransactionDetail = () => {
        const {navigation} = this.props;
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
        navigation.navigate('TransactionDetail');
    }

    _renderItem = (item) => {
        return (
            <>
                <TouchableOpacity 
                    onPress={this._navigateToTransactionDetail}
                    style={transactionstyle.historytransitem}>
                    <View style={transactionstyle.histcovercontainer}>
                        <Image
                            source={require('../../assets/images/tcash_visa.png')}
                            style={transactionstyle.historycover} />
                    </View>
                    <View style={transactionstyle.historycontent}>
                        <Text style={[styles.textBold, transactionstyle.histtranstype]}>T_cash Deposite</Text>
                        <Text style={[styles.textItalicBold, transactionstyle.histransamount]}>+11 000 FCFA</Text>
                        <Text style={[styles.text, transactionstyle.histtransauthor]}>Auteur : Valery Yanick</Text>
                    </View>
                    <View style={transactionstyle.historystatus}>
                        <Text style={[styles.textItalicBold, transactionstyle.histtransstatusfail]}>Echec</Text>
                        <Text 
                            numberOfLines={1}
                            style={[styles.text, transactionstyle.histtranstime]}>Il y a 12 hours ago</Text>
                    </View>
                </TouchableOpacity>
                <View style={transactionstyle.separatoritemhist} />
            </>
        )
    }

    render(){
        const {navigation, is_loading} = this.props; 
        return(
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgroundapp}>
                <View style={transactionstyle.containertrans}>
                    <View style={transactionstyle.headertrans}>
                        <View style={transactionstyle.containerlogo}>
                            <Image source={require('../../assets/images/logo.png')} style={transactionstyle.pagelogo} />
                        </View>
                        <View style={transactionstyle.transcontainertitle}>
                            <Text style={[styles.textBold, transactionstyle.transpagetitle]}>Transactions</Text>
                        </View>
                    </View>

                    <View style={transactionstyle.searchtrans}>
                        <TextInput 
                            style={[styles.text, transactionstyle.searchtext]}
                            
                            placeholder='Recherche...'

                        />
                        <IconFA name='search' style={transactionstyle.logosearch} />
                    </View>
                    <View style={transactionstyle.classicseparator} />  

                    <View style={transactionstyle.containeritem}>
                        <FlatList 
                            data={transaction_list}
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

export default connect(mapStateToProps, mapDispatchToProps, null)(TransactionIndex);