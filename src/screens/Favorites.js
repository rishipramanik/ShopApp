import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {},
  header: {
    marginHorizontal: 15,
    marginTop: 45,
    fontSize: 30,
    color: colors.primary,
  },
});
