// ./routes/StackNavigator.js
import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
import Transaction from "../../screens/Transaction";
import TransactionDetail from "../../components/Transaction/TransactionDetail";
const Stack = createStackNavigator();

class StackTransaction extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render () {
        const {is_loading, page_title} = this.props;
        return ( 
            <Stack.Navigator>
                <Stack.Screen 
                    name=" " 
                    component={Transaction} 
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name="TransactionDetail" 
                    component={TransactionDetail} 
                    options={{
                        headerShown:false
                    }}
                />
            </Stack.Navigator>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({}, dispatch),
    }
};

const mapStateToProps = (state) => {
    return {
        is_loading:state.loader.is_loading,
        page_title:state.navigation.page_title,
        root_navigation:state.navigation.root_navigation
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(StackTransaction);