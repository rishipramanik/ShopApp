import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const Categories = ({name}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{name}</Text>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {},
  header: {
    marginHorizontal: 15,
    marginTop: 45,
    fontSize: 30,
    color: colors.primary,
  },
});
