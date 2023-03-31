import { CSSProperties } from 'react';
type TextVariant = 'title' | 'content';

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
  type?: TextVariant;
  size?: Size;
  color?: Color;
}

const getTextSize = (type: TextVariant, size: Size) => {
  return {
    sm: `text-${type}-14`,
    md: `text-${type}-16`,
    lg: `text-${type}-18`,
    xs: `text-${type}-12`,
    xl: `text-${type}-24`,
    xxl: `text-${type}-40`,
  }[size];
};

const textColorObj: Record<Color, string> = {
  primary: 'text-color-primary',
  primaryLight: 'text-color-primaryLight',
  blue: 'text-color-blue',
  black: 'text-color-black',
  background: 'text-color-background',
  gray: 'text-color-gray',
  grayDark: 'text-color-grayDark',
  line: 'text-color-line',
  lineLight: 'text-color-lineLight',
  white: 'text-color-white',
  red: 'text-color-red',
  redLight: 'text-color-redLight',
  grayLight: 'text-color-grayLight',
};

export default function Text({
  children,
  type = 'content',
  size = 'md',
  color = 'white',
  style,
}: Props) {
  return type === 'title' ? (
    <h1
      className={`${getTextSize(type, size)} ${textColorObj[color]}`}
      style={style}
    >
      {children}
    </h1>
  ) : (
    <p
      className={`${getTextSize(type, size)} ${textColorObj[color]}`}
      style={style}
    >
      {children}
    </p>
  );
}
