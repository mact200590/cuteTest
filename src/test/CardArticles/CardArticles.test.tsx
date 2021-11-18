import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import CardArticles from '../../components/CardArticles';
import '@testing-library/react-native';

describe('Test in <CardArticles/> component', () => {
  const onPressNavigator = jest.fn();
  const articleMock = {
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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('To toMatchSnapshot', () => {
    const tree = renderer
      .create(
        <CardArticles
          article={articleMock}
          handleNavigator={onPressNavigator}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onPressNavigator function have to be call', () => {
    const {getByA11yRole} = render(
      <CardArticles article={articleMock} handleNavigator={onPressNavigator} />,
    );
    const button = getByA11yRole('button');
    fireEvent.press(button);

    expect(onPressNavigator).toHaveBeenCalled();
  });
});
