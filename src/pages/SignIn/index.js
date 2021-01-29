import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {Logo, Union} from '../../assets';
import {Button, Gap, TextInput} from '../../components';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Logo />
        <Gap height={25} />
        <Image source={Union} style={styles.title} />
        <Gap height={17} />
        <Text style={styles.desc}>Learn from anything and anywhere</Text>
      </View>
      <View style={styles.card}>
        <Gap height={43} />
        <View style={styles.content}>
          <TextInput placeholder="Email" icon="Email" />
          <TextInput placeholder="Password" />
        </View>
        <Gap height={20} />
        <Button text="Sign in" onPress={() => navigation.replace('MainApp')} />
        <Gap height={20} />
        <Button
          text="Sign In with Google"
          color="#FF8181"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#7C7AFC',
  },
  card: {
    width: width,
    height: (height * 50) / 100,
    backgroundColor: '#F1F1FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
    marginTop: 125,
    alignItems: 'center',
  },
  title: {
    marginTop: 32,
  },
  desc: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#FCFCFF',
  },
});
