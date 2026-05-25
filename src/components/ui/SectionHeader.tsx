import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className="flex flex-col gap-4 mb-16"
      style={{ textAlign: isCenter ? 'center' : 'left', alignItems: isCenter ? 'center' : 'flex-start' }}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase" style={{ color: '#f97316', letterSpacing: '0.15em' }}>
          <span style={{ width: '24px', height: '1px', background: '#f97316', display: 'inline-block' }} />
          {eyebrow}
          <span style={{ width: '24px', height: '1px', background: '#f97316', display: 'inline-block' }} />
        </span>
      )}
      <h2
        className="font-display font-bold text-white leading-tight"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', maxWidth: '700px' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-relaxed" style={{ color: '#6b7280', maxWidth: '600px' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
