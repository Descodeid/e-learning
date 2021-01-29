import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Dot, Square, Star} from '../../../assets';
import {Gap} from '../../atoms';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View>
          <Text style={styles.progressTitle}>
            Declarative interfaces for any Apple Devices
          </Text>
          <Text style={styles.progressPrice}>IDR 850.000</Text>
          <View style={styles.rating}>
            <Star style={styles.star} />
            <Gap width={5} />
            <Text style={styles.rate}>4.5</Text>
            <Gap width={5} />
            <Dot />
            <Gap width={5} />
            <Text style={styles.name}>By Sarah William</Text>
            <Gap width={5} />
            <Dot />
            <Gap width={5} />
            <Text style={styles.level}>All Level</Text>
          </View>
        </View>
        <View style={styles.progressImage}>
          <Image source={Square} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FCFCFF',
    borderRadius: 10,
  },
  progressContainer: {
    width: 255,
    flexDirection: 'row',
  },
  progressTitle: {
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    color: '#161719',
    marginBottom: 6,
  },
  progressPrice: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    color: '#161719',
  },
  progressImage: {
    width: 60,
    height: 60,
    backgroundColor: '#FF8181',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
  rating: {
    marginTop: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rate: {
    fontFamily: 'DMSans-Bold',
    fontSize: 12,
  },
  name: {
    fontFamily: 'DMSans-Light',
    fontSize: 12,
    color: '#91919F',
  },
  level: {
    fontFamily: 'DMSans-Light',
    fontSize: 12,
    color: '#91919F',
  },
});
