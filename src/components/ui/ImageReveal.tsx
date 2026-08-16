import React from 'react';

export interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  caption?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  caption
}) => {
  return (
    <figure style={{ margin: 0, width: '100%' }} className={className}>
      <div
        className="image-reveal-container"
        style={{
          aspectRatio,
          width: '100%',
          borderRadius: 'var(--radius-none)'
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption
          className="caption"
          style={{
            marginTop: '12px',
            textAlign: 'start'
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
