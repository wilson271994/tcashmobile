import React, {PureComponent} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { ImageBackground, ScrollView, Text, Button, SafeAreaView,TextInput, Slider, TouchableOpacity,RadioButton, View, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6';
import { IS_AUTH_ERROR, PAGE_TITLE, ROOT_NAVIGATION } from '../../reducers/actions/types';
import { store } from '../../reducers/store';
import Moment from 'moment';
import 'moment/locale/fr';
import { helpstyle } from '../../assets/styles/help';

class HelpIndex extends PureComponent {
  render() {
    return (
      <SafeAreaView style={helpstyle.container}>
        <View style={helpstyle.header}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/recherche.png')}
              style={helpstyle.headerIcon}
            />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={helpstyle.scrollContainer}>
          <View style={helpstyle.articleCard}>
            <Text style={helpstyle.articleTitle}>
              Comment Ajouter une Carte Bancaire XAF sur Apple Pay au Cameroun
            </Text>
            <Text style={helpstyle.articleIntro}>
              Découvrez comment ajouter facilement une carte bancaire en FCFA (XAF) sur Apple Pay avec un identifiant Apple au Cameroun. Suivez notre guide étape par étape pour activer votre carte et effectuer des paiements en toute sécurité!
            </Text>

            <View style={helpstyle.authorContainer}>
              <Image
                source={require('../../assets/images/account.png')}
                style={helpstyle.authorImage}
              />
              <View>
                <Text style={helpstyle.authorName}>Écrit par Steve</Text>
                <Text style={helpstyle.updateDate}>Mis à jour il y a plus de 2 mois</Text>
              </View>
            </View>
          </View>

          <View style={helpstyle.relatedArticle}>
            <Text style={helpstyle.relatedArticleTitle}>
              Pourquoi Ajouter une Carte Bancaire Émise au Cameroun à Votre Identifiant Apple ?
            </Text>
            <Text style={helpstyle.relatedArticleIntro}>
              Ajouter une carte bancaire en FCFA
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
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
export default connect(mapStateToProps, mapDispatchToProps, null)(HelpIndex);