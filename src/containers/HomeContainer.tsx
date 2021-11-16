import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useFetch} from '../hooks/useFetch';
import CardArticles from '../components/CardArticles';

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
  scroll: {
    marginHorizontal: 24,
  },
});

export const HomeContainer = () => {
  const url =
    'https://newsapi.org/v2/top-headlines?country=cu&language=es&apiKey=33b6de14b85345a8b0142a85128ffe59';
  const {data, status} = useFetch({url});
  if (status) {
    return <Text>Loading...</Text>;
  }
  if (!status && !data) {
    return <Text>Error</Text>;
  }
  console.log('la data es esta mira', data[0]);
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Titulares Principales</Text>
      </View>
      <ScrollView style={styles.scroll}>
        {data.map((art: Definitions.Article, index: number) => (
          <View key={index}>
            <CardArticles articles={art} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeContainer;
