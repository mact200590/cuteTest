import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator, Title} from 'react-native-paper';
import CardArticles from '../components/CardArticles';
import {useFetch} from '../hooks/useFetch';
import ArticlesContext from '../storage/articlesContext';
import STRINGS from '../utils/string';
import {REACT_APP_API} from '@env';
import theme from '../style/style';

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
  error: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitle: {
    fontSize: 30,
    display: 'flex',
    textAlign: 'center',
  },
});

export const HomeContainer = () => {
  const {data, status, isError} = useFetch(REACT_APP_API);
  const {navigate} = useNavigation();

  const {articles, saveAllArticles, selectCurrentArticleId} =
    useContext(ArticlesContext);
  useEffect(() => {
    if (!articles.length) {
      saveAllArticles(data as Definitions.Article[]);
    }
  }, [articles.length, data, saveAllArticles]);

  const handleNavigator = useCallback(
    (article: Definitions.Article) => {
      selectCurrentArticleId(article.title);
      navigate('ResumeScreenNav' as never);
    },
    [navigate, selectCurrentArticleId],
  );

  if (status) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator animating={true} color={theme.colors.primary} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.error}>
        <Title>{`${STRINGS.generals.ERROR} ${isError}`}</Title>
      </View>
    );
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
