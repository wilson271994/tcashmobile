import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { SafeAreaView, Platform, Text } from 'react-native';
import { styles } from '../assets/styles/index.js';
import {TransactionListAction} from '../reducers/actions/index.js';
import TransactionIndex from '../components/Transaction/TransactionIndex.js';

class Transaction extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        //this._fechtData();
    } 

    _fechtData = async () => {
        const {user_token} = this.props;
        TransactionListAction(user_token);
    } 

    render(){
        const {navigation} = this.props; 
        return(
            <TransactionIndex 
                navigation={navigation} 
            />
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            TransactionListAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        user_infos  : state.auth.user_infos,
        user_token  : state.auth.user_token,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Transaction);