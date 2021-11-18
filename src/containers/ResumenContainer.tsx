import React, {useContext, useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {cardDefaultData} from '../utils/defaultData';
import CardResume from '../components/CardResume';
import ArticlesContext from '../storage/articlesContext';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 36,
  },
});

export const ResumeContainer = () => {
  const {setOptions} = useNavigation();
  useLayoutEffect(() => {
    setOptions({
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
      },
    });
  }, [setOptions]);
  const {currentArticle} = useContext(ArticlesContext);

  return (
    <View style={styles.container}>
      <CardResume article={(currentArticle as any) || cardDefaultData} />
    </View>
  );
};

export default ResumeContainer;
