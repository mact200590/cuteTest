import React from 'react';
import {View, ViewProps} from 'react-native';
import {IconNames, icons} from '../../utils/types';

export interface SvgProps {
  width?: number;
  height?: number;
  fill?: string;
}

interface Props {
  name: IconNames;
}

const Icon = React.memo(
  ({
    name,
    width,
    height,
    fill,
    style,
    ...props
  }: Props & SvgProps & ViewProps) => {
    const svg = React.createElement(icons[name] as any, {
      width,
      height,
      fill,
    });
    return (
      <View style={[{minWidth: width, minHeight: height}, style]} {...props}>
        {svg}
      </View>
    );
  },
);

export default Icon;
