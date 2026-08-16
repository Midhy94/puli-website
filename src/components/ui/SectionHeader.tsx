import React from 'react';

export interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center' | 'end';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  title,
  description,
  align = 'start',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: align === 'center' ? 'center' : align === 'end' ? 'end' : 'start',
        maxWidth: align === 'center' ? '820px' : '720px',
        marginInline: align === 'center' ? 'auto' : '0',
        marginBottom: '48px'
      }}
    >
      {overline && (
        <div
          className="overline"
          style={{
            color: isDark ? 'var(--puli-brown-light)' : 'var(--puli-brown)',
            marginBottom: '16px'
          }}
        >
          {overline}
        </div>
      )}
      <h2
        className="headline-lg"
        style={{
          color: isDark ? 'var(--ivory)' : 'var(--ink)',
          marginBottom: description ? '24px' : '0'
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="body-lg"
          style={{
            color: isDark ? 'rgba(247, 244, 237, 0.8)' : 'var(--muted)',
            lineHeight: '1.65'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
