import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Paragraph, Card, Text} from 'react-native-paper';
import moment from 'moment';

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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  articles: Definitions.Article;
}

const CardArticles = ({articles}: Props) => {
  return (
    <View>
      <Card style={styles.container} elevation={30}>
        <Card.Cover source={{uri: articles.urlToImage}} style={styles.img} />
        <Card.Content>
          <View style={styles.iconDateContainer}>
            <Text style={styles.date}>
              {moment(articles.publishedAt).format('DD/MM/YYYY')}
            </Text>
            <Text>"Icon"</Text>
          </View>
          <Paragraph style={styles.paragraph}>{articles.title}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={() => console.log('dio')}>Leer más...</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default CardArticles;
