import React, {PropsWithChildren, useMemo} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {useTheme} from 'react-native-paper';

const Label = React.memo(
  ({style, children}: PropsWithChildren<{style?: StyleProp<TextStyle>}>) => {
    const theme = useTheme();
    const localStyle = useMemo(() => styles(theme), [theme]);

    const stylePrepared = useMemo(() => {
      let styleLocal = style;
      if (styleLocal) {
        const {fontWeight, ...styleRest} = style as TextStyle;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (fontWeight === 'bold' || fontWeight === '700') &&
          (styleLocal = {...styleRest, fontFamily: 'Nunito-Bold'});
      }

      return styleLocal;
    }, [style]);
    return <Text style={[localStyle.label, stylePrepared]}>{children}</Text>;
  },
);

const styles = ({fonts, colors}: ReactNativePaper.Theme) =>
  StyleSheet.create({
    label: {
      color: colors.primary,
      ...fonts.regular,
    },
  });

export default Label;
