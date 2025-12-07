import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, dark = false }) => {
  return (
    <div className="mb-8">
      <h2 className={`text-xl md:text-2xl font-bold uppercase tracking-wide mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;