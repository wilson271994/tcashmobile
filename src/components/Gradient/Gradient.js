import React from 'react';
import { StyleSheet } from 'react-native';
// Assurez-vous d'avoir installé cette bibliothèque
import LinearGradient from 'react-native-linear-gradient'; 

const GradientBackground = ({ children, style }) => {
  return (
    <LinearGradient
      // Définissez ici les paramètres par défaut du dégradé
      colors={['#6dcabb', '#fff']} // Exemple de couleurs
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }} // Dégradé vertical (du haut vers le bas)
      
      // La prop style permet de fusionner les styles par défaut
      // et ceux passés par le composant parent (flex: 1 est crucial)
      style={[styles.defaultStyle, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
     // Permet au dégradé d'occuper tout l'espace disponible
    // Vous pouvez ajouter ici des paddings ou marges par défaut
  },
});

export default GradientBackground;