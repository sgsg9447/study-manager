import { CSSProperties, useMemo } from "react";

type Variant = "outlined" | "contained" | "text";

export default function Button({
  children,
  onClick,
  variant = "contained",
  size = "md",
  style,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  style?: CSSProperties;
}) {
  const getVariantStyle = (variant: Variant) => {
    const styleObj = {
      outlined: "btn-outlined",
      contained: "btn-primary",
      text: "btn-text",
    };
    const styleMap = new Map(Object.entries(styleObj));
    return styleMap.get(variant);
  };
  const getSizeStyle = (size: Size) => `btn-${size}`;
  const _style = useMemo(() => getVariantStyle(variant), [variant]);
  return (
    <button
      className={`${getVariantStyle(variant)} ${getSizeStyle(size)}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
