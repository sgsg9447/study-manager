import { CSSProperties, MouseEventHandler, ReactNode } from 'react';

type Variant = 'outlined' | 'contained' | 'text';
const styleObj = {
  outlined: 'btn-outlined',
  contained: 'btn-primary',
  text: 'btn-text',
};

const Button = ({
  children,
  onClick,
  variant = 'contained',
  size = 'md',
  style,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: Variant;
  size?: Size;
  style?: CSSProperties;
}) => (
  <button
    className={`${styleObj[variant]} btn-${size}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

export default Button;
