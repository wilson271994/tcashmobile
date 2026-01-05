import {StyleSheet, View, Text} from 'react-native';
import Entypo  from 'react-native-vector-icons/Entypo';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles';

export const ToastConfig = {
    success: ({ props }) => (
        <View style={toaststyle.container}>
            <View>
                <Text style={[styles.textBold, toaststyle.titletoast]}>{props.title}</Text>
                {
                    props.description ?
                        <Text style={[{ color:'#666', fontSize:14}, styles.text]}>{props.description}</Text>
                    :null
                }
            </View>
            <Entypo name='check' style={toaststyle.iconstatussuccess} />
        </View>
    ),
    error: ({ props }) => (
        <View style={toaststyle.container}>
            <View>
                <Text style={[styles.textBold, toaststyle.titletoast]}>{props.title}</Text> 
                {
                    props.description ?
                        <Text style={[{ color:'#666', fontSize:14}, styles.text]}>{props.description}</Text>
                    :null
                }
            </View>
            <MaterialIcons name='error' style={toaststyle.iconstatuserror} />
        </View> 
    ),
    info: ({ props }) => (
        <View style={toaststyle.container}>
            <View>
                <Text style={[styles.textBold, toaststyle.titletoast]}>{props.title}</Text> 
                {
                    props.description ?
                        <Text style={[{ color:'#666', fontSize:14}, styles.text]}>{props.description}</Text>
                    :null
                }
            </View>
            <Entypo name='info-with-circle' style={toaststyle.iconstatusinfo} />
        </View> 
    )
}

export const toaststyle = StyleSheet.create({
    container:{
        height:'auto',
        width:'auto',
        backgroundColor:'#fff',
        borderColor:'#fff', 
        flexDirection:'row',
        padding:15,
        borderWidth:2,
        opacity:.9,
        borderRadius:15
    },
    iconstatussuccess:{
        fontSize:20,
        color:'green'
    },
    iconstatuserror:{
        fontSize:20,
        color:'red'
    },
    iconstatusinfo:{
        fontSize:20,
        color:'#2e27a5'
    },
    titletoast:{
        color:'#666', 
        fontSize:16,
        marginBottom:5
    }

})