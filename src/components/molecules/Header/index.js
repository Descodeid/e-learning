import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Profile} from '../../../assets';

const Header = ({title, subTitle, onPress}) => {
  return (
    <View style={styles.container}>
      <Image source={Profile} style={styles.profile} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 27,
    paddingHorizontal: 25,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 20,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 14,
    color: '#FCFCFF',
  },
  subTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    color: '#FCFCFF',
  },
});
