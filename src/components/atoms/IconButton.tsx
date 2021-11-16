import React, {useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {IconNames} from '../../utils/types';
import Icon from './Icon';

interface Props {
  onPress: () => void;
  width?: number;
  height?: number;
  checked?: boolean;
  icon: IconNames;
  iconWidth?: number;
  iconHeight?: number;
  iconColor?: string;
  border?: boolean;
  convex?: boolean;
  radius?: number;
  shadowColor?: string;
  backgroundColor?: string;
  loading?: boolean;
  loadingColor?: string;
}

const IconButton = React.memo(
  ({
    onPress,
    width = 45,
    height = 45,

    icon,
    iconWidth = 20,
    iconHeight = 20,
    iconColor = '#efce4a',
    radius = 5,
    loading = false,
  }: Props) => {
    const style = useMemo(
      () => styles({icon, onPress, width, height, radius}),
      [icon, onPress, width, height, radius],
    );

    const iconMemo = useMemo(
      () => (
        <>
          {loading && <ActivityIndicator />}
          {!loading && (
            <TouchableOpacity
              onPress={onPress}
              style={[style.noBorderContainer, style.noBorderContainerDynamic]}>
              <Icon
                fill={iconColor}
                name={icon}
                width={iconWidth}
                height={iconHeight}
              />
            </TouchableOpacity>
          )}
        </>
      ),
      [
        icon,
        iconColor,
        iconHeight,
        iconWidth,
        loading,
        onPress,
        style.noBorderContainer,
        style.noBorderContainerDynamic,
      ],
    );

    return <>{iconMemo}</>;
  },
);

const styles = ({
  backgroundColor,
  width: widthProp,
  height: heightProp,
  radius,
}: Props) =>
  StyleSheet.create({
    container: {
      backgroundColor,
    },
    noBorderContainer: {
      width: widthProp,
      height: heightProp,
      alignItems: 'center',
      justifyContent: 'center',
    },
    noBorderContainerDynamic: {
      backgroundColor,
      borderRadius: radius,
    },
  });

export default IconButton;
