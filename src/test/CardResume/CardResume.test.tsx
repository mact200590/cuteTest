/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import CardResume from '../../components/CardResume';

describe('Test in <CardResume/> component', () => {
  test('To toMatchSnapshot', () => {
    const article = {
      source: {
        id: '',
        name: '',
      },
      author: 'cubadebate',
      title: 'La Jornada',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
      content: '',
      isFavorite: false,
    };

    const tree = renderer.create(<CardResume article={article} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
