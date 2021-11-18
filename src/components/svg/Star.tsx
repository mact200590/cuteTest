import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import theme from '../../style/style';

interface Props {
  width?: number;
  height?: number;
  fill?: string | number;
}

function SvgComponent({
  width = 30,
  fill = theme.colors.disabled,
  height = 30,
  ...props
}: Props & SvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      x="0px"
      y="0px"
      viewBox="0 0 53.867 53.867"
      {...props}>
      <Path
        d="M26.934 1.318L35.256 18.182 53.867 20.887 40.4 34.013 43.579 52.549 26.934 43.798 10.288 52.549 13.467 34.013 0 20.887 18.611 18.182z"
        fill={fill}
      />
    </Svg>
  );
}
export default SvgComponent;
