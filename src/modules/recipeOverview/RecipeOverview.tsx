'use client';

import { CustomCard, ErrorMessage } from '@/components';
import { NO_SELECTED_CARD } from '@/constants';
import { useGridSelection } from '@/contexts';
import React from 'react';


const RecipeOverview = () => {

  const { selectedCard } = useGridSelection();
  

  if (!selectedCard) {
    return (
      <div className='no-card-container' >
        <ErrorMessage  className='no-card-message' message={NO_SELECTED_CARD}/>
      </div>
    );
  }

  return (
    <div className='cardContainer_unit'>
        <CustomCard
          title={selectedCard.title}
          date={selectedCard.date}
          imageUrl={selectedCard.imageUrl}
          link={selectedCard.link}
          cardId={selectedCard.cardId}
          disableClick={true}
        />
      </div>
      
  );
};



export default RecipeOverview;
