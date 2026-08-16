import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface CtaLinkProps {
  href?: string;
  onClick?: () => void;
  label: string;
  variant?: 'dark' | 'light' | 'brown';
  showArrow?: boolean;
  className?: string;
}

export const CtaLink: React.FC<CtaLinkProps> = ({
  href,
  onClick,
  label,
  variant = 'dark',
  showArrow = true,
  className = ''
}) => {
  const getColor = () => {
    switch (variant) {
      case 'light':
        return 'var(--ivory)';
      case 'brown':
        return 'var(--puli-brown)';
      case 'dark':
      default:
        return 'var(--ink)';
    }
  };

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: getColor(),
    fontFamily: 'var(--font-utility)',
    fontSize: '13px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: '4px 0'
  };

  const content = (
    <span className={`luxury-underline ${className}`} style={style} onClick={onClick}>
      {label}
      {showArrow && <ArrowRight size={14} className="icon-directional" style={{ display: 'inline-block', verticalAlign: 'middle', marginInlineStart: '4px' }} />}
    </span>
  );

  if (href) {
    return (
      <a href={href} style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return content;
};
