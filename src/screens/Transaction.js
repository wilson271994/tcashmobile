import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { SafeAreaView, Platform, Text } from 'react-native';
import { styles } from '../assets/styles/index.js';
import {switchHeaderAction} from '../reducers/actions/index.js';
import TransactionIndex from '../components/Transaction/TransactionIndex.js';

class Transaction extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        this._fechtData();
    } 

    _fechtData = async () => {
        //await switchHeaderAction(true);  
    } 

    render(){
        const {navigation} = this.props; 
        return(
            <SafeAreaView style={styles.container}>
                <TransactionIndex navigation={navigation} />
            </SafeAreaView>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            switchHeaderAction
        }, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        user_infos:state.auth.user_infos,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Transaction);