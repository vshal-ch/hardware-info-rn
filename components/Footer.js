import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>
        Designed and Developed by Rakesh reddy Devara
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: 'flex-start',
    paddingVertical: 16,
  },
  footer: {
    fontSize: 11,
    marginVertical: 0,
    color: '#111',
  },
});

export default Footer;
