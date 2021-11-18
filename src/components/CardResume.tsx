import React, {useCallback, useContext} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import ArticlesContext from '../storage/articlesContext';
import theme from '../style/style';
import STRINGS from '../utils/string';
import LabelButton from './atoms/LabelButton';
import ItemWithIconAndDate from './ItemWithIconAndDate';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  img: {
    width: '100%',
  },
  paragraph: {
    fontSize: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 20,
    marginVertical: 8,
  },
  author: {
    marginVertical: 16,
  },
  iconDateContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
});

interface Props {
  article: Definitions.Article;
}

const CardResume = ({article}: Props) => {
  const {markedAsFavorite} = useContext(ArticlesContext);
  const onPressOpenWebSite = useCallback(() => {
    Linking.openURL(article.url || '');
  }, [article.url]);

  const OnPress = useCallback(() => {
    markedAsFavorite(article, !article.isFavorite);
  }, [article, markedAsFavorite]);

  return (
    <View style={styles.container}>
      <View style={styles.iconDateContainer}>
        <ItemWithIconAndDate
          date={article.publishedAt}
          icon="start"
          iconColor={
            article.isFavorite ? theme.colors.iconColor : theme.colors.disabled
          }
          handleOnPress={OnPress}
        />
      </View>
      <View>
        <Paragraph style={styles.title}>{article.title}</Paragraph>
        <Paragraph style={styles.author}>{article.author}</Paragraph>
      </View>
      <Card.Cover source={{uri: article.urlToImage}} style={styles.img} />
      <Paragraph style={styles.paragraph}>{article.content}</Paragraph>
      <LabelButton
        label={STRINGS.generals.LINK_EXTERNAL}
        onPress={onPressOpenWebSite}
      />
    </View>
  );
};

export default CardResume;
