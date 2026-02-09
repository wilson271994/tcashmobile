import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import HomeIndex from '../components/Home/HomeIndex.js';
import { store } from '../reducers/store.js';
import { ROOT_NAVIGATION } from '../reducers/actions/types.js';

class Home extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

    componentDidMount(){
        this._loadData();
    } 

    _loadData = () => {
        const { navigation } = this.props; 
        store.dispatch({type:ROOT_NAVIGATION, value:navigation});
    }

    render(){
        const {navigation} = this.props;  
        return(
            <HomeIndex 
                navigation={navigation} 
            /> 
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
        state,
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Home);