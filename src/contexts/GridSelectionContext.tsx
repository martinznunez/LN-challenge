'use client';

import { getSessionStorage, saveSessionStorage } from '@/utils/sessionStorage';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { CardData } from './types';

interface GridSelectionContextType {
  selectedCard: CardData | null;
  setSelectedCard: (card: CardData) => void;
}

export const GridSelectionContext = createContext<GridSelectionContextType | undefined>(undefined);

interface GridSelectionProviderProps {
  children: ReactNode;
}

export const GridSelectionProvider: React.FC<GridSelectionProviderProps> = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  useEffect(() => {
    const storedCard = getSessionStorage('selectCard');
    if (storedCard) {
      setSelectedCard(storedCard);
    }
  }, []);

  useEffect(() => {
    saveSessionStorage('selectCard', selectedCard);
  }, [selectedCard]);

  return (
    <GridSelectionContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </GridSelectionContext.Provider>
  );
};

export const useGridSelection = (): GridSelectionContextType => {
  const context = useContext(GridSelectionContext);

  if (!context) {
    throw new Error('useGridSelection must be used within a GridSelectionProvider');
  }

  return context;
};
