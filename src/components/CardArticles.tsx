import React, {useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Paragraph} from 'react-native-paper';
import ArticlesContext from '../storage/articlesContext';
import theme from '../style/style';
import ItemWithIconAndDate from './ItemWithIconAndDate';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    marginVertical: 10,
  },
  img: {
    width: '100%',
  },
  iconDateContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  date: {
    fontSize: 20,
    color: '#A0A0A0',
  },
  paragraph: {
    fontSize: 20,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

interface Props {
  article: Definitions.Article;
  handleNavigator: (article: Definitions.Article) => void;
}

const CardArticles = ({article, handleNavigator}: Props) => {
  const {markedAsFavorite} = useContext(ArticlesContext);

  const onHandleNavigator = useCallback(() => {
    handleNavigator(article);
  }, [article, handleNavigator]);

  const handleOnPressIsFavorite = useCallback(() => {
    markedAsFavorite(article, !article.isFavorite);
  }, [article, markedAsFavorite]);

  return (
    <View>
      <Card style={styles.container} elevation={30}>
        <Card.Cover source={{uri: article.urlToImage}} style={styles.img} />
        <Card.Content>
          <View style={styles.iconDateContainer}>
            <ItemWithIconAndDate
              date={article.publishedAt}
              icon="start"
              iconColor={
                article.isFavorite
                  ? theme.colors.iconColor
                  : theme.colors.disabled
              }
              handleOnPress={handleOnPressIsFavorite}
            />
          </View>
          <Paragraph style={styles.paragraph}>{article.title}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={onHandleNavigator}>Leer más...</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardArticles;
