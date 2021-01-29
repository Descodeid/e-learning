import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {ICLock, ICMail} from '../../../assets';

const TextInput = ({label, placeholder, icon, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
      {icon === 'Email' ? (
        <ICMail style={styles.icon} />
      ) : (
        <ICLock style={styles.icon} />
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#020202',
  },
  input: {
    backgroundColor: '#FCFCFF',
    borderRadius: 10,
    paddingVertical: 16,
    paddingLeft: 45,
    paddingRight: 15,
    color: '#91919F',
    fontSize: 14,
  },
  icon: {
    position: 'absolute',
    top: 43,
    left: 15,
  },
});
