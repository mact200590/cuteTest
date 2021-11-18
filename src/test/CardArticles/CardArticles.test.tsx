/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import CardArticles from '../../components/CardArticles';

describe('Test in <CardArticles> component', () => {
  test('To toMatchSnapshot', () => {
    const article = {
      source: {
        id: '',
        name: '',
      },
      author: 'cubadebate',
      title: 'Jornada del trabajador',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
      content: '',
      isFavorite: false,
    };

    const tree = renderer
      .create(<CardArticles article={article} handleNavigator={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Test onPress in IconButton', () => {
    const article = {
      source: {
        id: '',
        name: '',
      },
      author: 'cubadebate',
      title: 'Jornada del trabajador',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
      content: '',
      isFavorite: false,
    };

    const tree = renderer
      .create(<CardArticles article={article} handleNavigator={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
