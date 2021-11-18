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
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  date: {
    fontSize: 20,
    color: '#A0A0A0',
  },
});

interface Props {
  date: string;
  icon: IconNames;
  iconColor?: string;
  handleOnPress: () => void;
  id?: string;
}
const ItemWithIconAndDate = ({date, icon, iconColor, handleOnPress}: Props) => {
  return (
    <View style={styles.iconDateContainer}>
      <Text style={styles.date}>{moment(date).format('DD/MM/YYYY')}</Text>
      <IconButton
        width={40}
        height={40}
        icon={icon}
        onPress={handleOnPress}
        iconColor={iconColor}
      />
    </View>
  );
};

export default ItemWithIconAndDate;
