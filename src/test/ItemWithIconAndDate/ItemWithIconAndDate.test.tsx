/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import ItemWithIconAndDate from '../../components/ItemWithIconAndDate';
import '@testing-library/react-native';
import {IconNames} from '../../utils/types';

describe('Test in <ItemWithIconAndDate/> component', () => {
  const handleOnPressMock = jest.fn();
  const dataMock = {
    date: '2019-05-14',
    icon: 'start',
  };
  test('To toMatchSnapshot', () => {
    const tree = renderer
      .create(
        <ItemWithIconAndDate
          date={dataMock.date}
          icon={dataMock.icon as IconNames}
          handleOnPress={handleOnPressMock}
          iconColor="red"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
