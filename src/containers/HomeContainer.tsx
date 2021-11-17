import React, {useCallback, useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useFetch} from '../hooks/useFetch';
import CardArticles from '../components/CardArticles';
import ArticlesContext from '../storage/articlesContext';
import {ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {REACT_APP_API} from '@env';
import STRINGS from '../utils/string';
const styles = StyleSheet.create({
  iconDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    marginHorizontal: 10,
    marginVertical: 8,
    color: '#000000',
    fontWeight: 'bold',
  },
  titleContainer: {
    marginVertical: 8,
    marginHorizontal: 10,
  },
  flatList: {
    marginBottom: 200,
    marginHorizontal: 24,
  },
  indicator: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export const HomeContainer = () => {
  const {data, status} = useFetch(REACT_APP_API);
  const {navigate} = useNavigation();

  const {articles, saveAllArticles, saveCurrentArticle} =
    useContext(ArticlesContext);
  useEffect(() => {
    saveAllArticles(data as Definitions.Article[]);
  }, [data, saveAllArticles]);

  const handleNavigator = useCallback(
    (article: Definitions.Article) => {
      saveCurrentArticle(article);
      navigate('ResumeScreenNav' as never);
    },
    [navigate, saveCurrentArticle],
  );

  if (status) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator animating={true} color="blue" />
      </View>
    );
  }
  if (!status && !data) {
    return <Text>Error</Text>;
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{STRINGS.generals.TITLE}</Text>
      </View>
      <FlatList
        initialNumToRender={10}
        style={styles.flatList}
        data={articles}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <CardArticles
            key={item.title}
            article={item}
            handleNavigator={handleNavigator}
          />
        )}
      />
    </View>
  );
};

export default HomeContainer;
