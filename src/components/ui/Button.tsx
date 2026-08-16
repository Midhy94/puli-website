import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'light' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  style,
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn-puli-secondary';
      case 'dark':
        return 'btn-puli-dark';
      case 'light':
        return 'btn-puli-light';
      case 'link':
        return 'luxury-underline';
      case 'primary':
      default:
        return 'btn-puli-primary';
    }
  };

  const buttonStyle: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    ...(size === 'sm' ? { padding: '10px 20px', minHeight: '42px', fontSize: '11px' } : {}),
    ...(size === 'lg' ? { padding: '16px 36px', minHeight: '56px', fontSize: '14px' } : {}),
    ...style
  };

  return (
    <button
      className={`${getVariantClass()} ${className}`}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};
