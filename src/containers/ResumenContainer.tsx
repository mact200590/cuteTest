import React from 'react';
import {StyleSheet, View} from 'react-native';
import {cardDefaultData} from '../utils/defaultData';
import CardResume from '../components/CardResume';

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 36,
  },
});

export const ResumeContainer = () => {
  return (
    <View style={styles.container}>
      <CardResume article={cardDefaultData} />
    </View>
  );
};

export default ResumeContainer;
