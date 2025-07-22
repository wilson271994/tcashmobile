import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../assets/styles';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { store } from '../../reducers/store';
import Moment from 'moment';
import 'moment/locale/fr';
import Swiper from 'react-native-swiper'
import cover from '../../assets/images/biblio.jpg';
import { bookstyle } from '../../assets/styles/books';

const favorit_book_list = [
    {
        'id'    : 1,
        'name' : 'Favorit book one',
        'label' : 'favorit',
        'cover' : require('../../assets/images/biblio.jpg')
    },
    {
        'id'    : 2,
        'name' : 'Favorit book two',
        'label' : 'favorit',
        'cover' : require('../../assets/images/biblio.jpg')
    },
    {
        'id'    : 2,
        'name' : 'Favorit book three',
        'label' : 'favorit',
        'cover' : require('../../assets/images/biblio.jpg')
    }
]

class BookBanner extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
        }
    };

    render(){
        const {is_loading} = this.props;
        return( 
            <View style={[bookstyle.container]}>
                {
                    favorit_book_list.length > 0 ?
                        <Swiper 
                            style={bookstyle.containerbanner}
                            showsButtons={true}
                            autoplay={true}
                            autoplayTimeout={5}
                            scrollEnabled
                            dot={false}
                            containerStyle={bookstyle.swiperstyle}>
                                {
                                    favorit_book_list ?
                                        favorit_book_list.map((item, i) => 
                                            <View style={bookstyle.bannerchild} key={i}>
                                                <ImageBackground
                                                    key={i}
                                                    source={item.cover}
                                                    style={bookstyle.backgroundimagebanner}
                                                />
                                                <Text numberOfLines={1} style={[bookstyle.bookname, styles.textBold]}>{item.name}</Text>
                                                <View style={bookstyle.catcontain}>
                                                    <Text style={[bookstyle.categoryproductproduct, styles.textBold]}>Management</Text>
                                                </View>
                                            </View>
                                         
                                    )
                                    :null
                                }
                        </Swiper>
                    :null
                }

            </View>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps, null)(BookBanner);