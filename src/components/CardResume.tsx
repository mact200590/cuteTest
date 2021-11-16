import React, {useCallback} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Paragraph, Card} from 'react-native-paper';
import STRINGS from '../utils/string';
import LabelButton from './atoms/LabelButton';
import {DateIcon} from './DateIcon';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 10,
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
});

interface Props {
  article: Definitions.Article;
}

const CardResume = ({article}: Props) => {
  const onPressOpenWebSite = useCallback(() => {
    Linking.openURL(article.url || '');
  }, [article.url]);

  return (
    <View style={styles.container}>
      <DateIcon date={article.publishedAt} icon="start" />
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
