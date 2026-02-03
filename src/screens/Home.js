import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import HomeIndex from '../components/Home/HomeIndex.js';

class Home extends PureComponent {
    constructor(props){
        super(props); 
        state = {}
    };

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