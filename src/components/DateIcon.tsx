import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import moment from 'moment';
import IconButton from './atoms/IconButton';
import {IconNames} from '../utils/types';

const styles = StyleSheet.create({
  iconDateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    // borderWidth: 2,
    // borderColor: 'red',
  },
  date: {
    fontSize: 20,
    color: '#A0A0A0',
  },
});

interface Props {
  date: string;
  icon: IconNames;
}

export const DateIcon = ({date, icon}: Props) => {
  return (
    <View style={styles.iconDateContainer}>
      <Text style={styles.date}>{moment(date).format('DD/MM/YYYY')}</Text>
      <IconButton
        // radius={50}
        width={40}
        height={40}
        icon={icon}
        onPress={() => {}}
      />
    </View>
  );
};
