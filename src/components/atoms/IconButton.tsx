import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
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
  loadingColor?: string;
}

const IconButton = React.memo(
  ({
    onPress,
    icon,
    iconWidth = 20,
    iconHeight = 20,
    iconColor = '#efce4a',
  }: Props) => {
    const iconMemo = useMemo(
      () => (
        <>
          <TouchableOpacity onPress={onPress}>
            <Icon
              fill={iconColor}
              name={icon}
              width={iconWidth}
              height={iconHeight}
            />
          </TouchableOpacity>
        </>
      ),
      [icon, iconColor, iconHeight, iconWidth, onPress],
    );

    return <>{iconMemo}</>;
  },
);

export default IconButton;
