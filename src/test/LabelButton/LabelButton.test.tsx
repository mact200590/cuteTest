/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/react-native';
import LabelButton from '../../components/atoms/LabelButton';

describe('Test in <LabelButton/> component', () => {
  const handleOnPressMock = jest.fn();
  const dataMock = {
    label: 'text of button',
  };
  test('To toMatchSnapshot', () => {
    const tree = renderer
      .create(
        <LabelButton onPress={handleOnPressMock} label={dataMock.label} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
