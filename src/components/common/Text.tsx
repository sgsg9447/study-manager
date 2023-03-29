import { CSSProperties } from "react";
type TextVariant = "title" | "content";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
  type?: TextVariant;
  size?: Size;
  color?: Color;
}

export default function Text({
  children,
  type = "content",
  size = "md",
  color = "white",
  style,
}: Props) {
  const getTextSize = (type: TextVariant, size: Size) => {
    let textsize;
    if (type === "title") {
      const textTitleSizeObj = {
        sm: "text-title-14",
        md: "text-title-16",
        lg: "text-title-18",
        xl: "text-title-24",
        xxl: "text-title-40",
      };
      const textTitleSizeMap = new Map(Object.entries(textTitleSizeObj));
      textsize = textTitleSizeMap.get(size);
    } else {
      const textContentSizeObj = {
        sm: "text-content-14",
        md: "text-content-16",
        lg: "text-content-18",
        xl: "text-content-24",
        xxl: "text-content-40",
      };
      const textContentSizeMap = new Map(Object.entries(textContentSizeObj));
      textsize = textContentSizeMap.get(size);
    }
    return textsize;
  };
  const getTextColor = (color: Color) => {
    const textColorObj = {
      primary: "text-color-primary",
      primaryLight: "text-color-primaryLight",
      blue: "text-color-blue",
      black: "text-color-black",
      background: "text-color-background",
      gray: "text-color-gray",
      grayDark: "text-color-grayDark",
      line: "text-color-line",
      lineLight: "text-color-lineLight",
      white: "text-color-white",
      red: "text-color-red",
      redLight: "text-color-redLight",
    };
    const textColorMap = new Map(Object.entries(textColorObj));
    return textColorMap.get(color);
  };
  return type === "title" ? (
    <h1
      className={`${getTextSize(type, size)} ${getTextColor(color)}`}
      style={style}
    >
      {children}
    </h1>
  ) : (
    <p
      className={`${getTextSize(type, size)} ${getTextColor(color)}`}
      style={style}
    >
      {children}
    </p>
  );
}
