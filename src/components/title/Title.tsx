import React from 'react';

interface PropsTitle {
  titleValue: string; 
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
  className?: string; 
}

const Title: React.FC<PropsTitle> = ({ titleValue, level = 'h1', className = 'com-title-section-xl' }) => {
  const TitleTag = level; 

  return (
    <article>
      <TitleTag  className={className}>{titleValue}</TitleTag>
    </article>
  );
};

export default Title;
