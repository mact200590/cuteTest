import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent} from '@testing-library/react-native';
import IconButton from '../../components/atoms/IconButton';
import '@testing-library/react-native';
import theme from '../../style/style';

describe('Test in <IconButton/> component', () => {
  const handleOnPressMock = jest.fn();
  test('To toMatchSnapshot', () => {
    const tree = renderer
      .create(
        <IconButton
          onPress={handleOnPressMock}
          icon="start"
          iconColor={theme.colors.disabled}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
