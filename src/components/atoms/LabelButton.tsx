/* eslint-disable react/require-default-props */
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Label from './Label';

interface Props {
  onPress: () => void;
  label: string;
  fontStyle?: StyleProp<TextStyle>;
  fontStyleContainer?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const LabelButton = React.memo(
  ({
    onPress,
    label,
    fontStyle = {},
    fontStyleContainer = {},
    disabled = false,
  }: Props) => {
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, fontStyleContainer]}
        onPress={onPress}>
        <Label style={[styles.container, fontStyle]}>{label}</Label>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
  },
});

export default LabelButton;
