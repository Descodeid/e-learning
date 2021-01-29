import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Progress, Square} from '../../assets';
import {Card, Gap, Header} from '../../components';
import * as ProgressBar from 'react-native-progress';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Header title="Welcome back" subTitle="Poetri Lazuardi " />
      </View>
      <View style={styles.card}>
        <View style={styles.progress}>
          <View style={styles.progressContainer}>
            <View>
              <Text style={styles.progressTitle}>
                Declarative interfaces for any Apple Devices
              </Text>
              <Text style={styles.progressPrice}>IDR 850.000</Text>
            </View>
            <View style={styles.progressImage}>
              <Image source={Square} style={styles.image} />
            </View>
          </View>
          <Gap height={15} />
          <View style={styles.progressPersentase}>
            <View style={styles.persentaseContainer}>
              <View style={styles.persentase}>
                <Progress />
              </View>
              <Gap width={10} />
              <View>
                <Text style={styles.text}>Current Progress</Text>
                <Text style={styles.number}>50%</Text>
              </View>
            </View>
            <Gap width={15} />
            <View style={styles.persentaseContainer}>
              <View style={styles.persentase}>
                <Progress />
              </View>
              <Gap width={10} />
              <View>
                <Text style={styles.text}>Current Progress</Text>
                <Text style={styles.number}>50%</Text>
              </View>
            </View>
          </View>
          <Gap height={25} />
          <ProgressBar.Bar
            progress={0.3}
            width={310}
            height={10}
            color="#7DC579"
          />
        </View>
        <Gap height={30} />
        <View style={styles.content}>
          <Text style={styles.title}>Recommendation</Text>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <Gap height={15} />
            <Card />
            <Gap height={20} />
            <Card />
            <Gap height={20} />
            <Card />
            <Gap height={20} />
          </ScrollView>
        </View>
        <Gap height={20} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#7C7AFC',
  },
  progress: {
    backgroundColor: '#FCFCFF',
    width: (width * 86) / 100,
    height: (height * 25) / 100,
    marginTop: -105,
    borderRadius: 10,
    padding: 15,
  },
  card: {
    width: width,
    height: (height * 60) / 100,
    backgroundColor: '#F1F1FA',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
  },
  progressContainer: {
    width: 255,
    flexDirection: 'row',
  },
  progressImage: {
    width: 60,
    height: 60,
    backgroundColor: '#6360FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
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
  progressPersentase: {
    flexDirection: 'row',
  },
  persentaseContainer: {
    flexDirection: 'row',
  },
  persentase: {
    width: 45,
    height: 45,
    backgroundColor: '#F1F1FA',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    color: '#91919F',
  },
  number: {
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#161719',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 16,
    color: '#161719',
  },
  content: {
    flex: 1,
  },
  scrollView: {flex: 1, marginBottom: -20},
});
