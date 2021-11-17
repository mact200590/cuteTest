import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function GoBack({
  width = 24,
  height = 24,
  fill = 'blue',
  ...props
}: Props & SvgProps) {
  return (
    <Svg
      viewBox="0 0 30 30"
      {...props}
      width={width}
      height={height}
      fill={fill}>
      <Path d="M6.98 8.99a1 1 0 00-.687.303l-4.912 4.912a1 1 0 00-.004 1.588 1 1 0 00.006.004l4.91 4.91a1 1 0 101.414-1.414L4.414 16H28a1 1 0 100-2H4.414l3.293-3.293A1 1 0 006.98 8.99z" />
    </Svg>
  );
}

export default GoBack;
