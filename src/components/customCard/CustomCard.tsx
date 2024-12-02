'use client';

import React from 'react';

import Link from 'next/link';
import { useGridSelection } from '@/contexts';
import { Title } from '../title';
import { CustomImage } from '../customImage';
import { CustomCardProps } from './types';


const CustomCard: React.FC<CustomCardProps> = ({ title, date, imageUrl, link, className, cardId, disableClick }) => {

  const { setSelectedCard } = useGridSelection();
  

  const handleCardClick = (event: React.MouseEvent) => {
    if (disableClick) {
      event.preventDefault();
      return;
    }

    const card = { title, date, imageUrl, link, cardId };
    setSelectedCard(card);
  };

  return (
    <article className={`mod-caja-nota lugares w-100-mobile custom-card ${className}`}>
      <Link 
        className={`figure custom-card-link ${disableClick ? 'disabled-link' : ''}`} 
        href={link}
        onClick={handleCardClick}
      >
        <section className="cont-figure custom-card-figure">
          <picture className="content-pic picture custom-card-picture">
           <CustomImage
             src={imageUrl}
             alt={title}
            />
          </picture>
        </section>
        <div className="mod-caja-nota__descrip custom-card-description">
          <Title level='h2' className="com-title-acu custom-card-title" titleValue={title} />
          <Title level='h4' className="com-date custom-card-date" titleValue={date} />
        </div>
      </Link>
    </article>
  );
};

export default CustomCard;
