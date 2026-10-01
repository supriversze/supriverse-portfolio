import React, { createContext, useContext, useState, useEffect } from 'react';
import type { PortfolioMode } from '../types/portfolio';

interface ThemeModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  isTechnical: boolean;
  isCreative: boolean;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>(() => {
    // Check localStorage or default to 'technical'
    const saved = localStorage.getItem('supriverse_portfolio_mode');
    return (saved === 'creative' || saved === 'technical') ? saved : 'technical';
  });

  const setMode = (newMode: PortfolioMode) => {
    setModeState(newMode);
    localStorage.setItem('supriverse_portfolio_mode', newMode);
  };

  const toggleMode = () => {
    setMode(mode === 'technical' ? 'creative' : 'technical');
  };

  useEffect(() => {
    // Apply mode class and data-attribute to document element
    const root = document.documentElement;
    root.setAttribute('data-mode', mode);
    if (mode === 'technical') {
      root.classList.remove('mode-creative');
      root.classList.add('mode-technical');
    } else {
      root.classList.remove('mode-technical');
      root.classList.add('mode-creative');
    }
  }, [mode]);

  return (
    <ThemeModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        isTechnical: mode === 'technical',
        isCreative: mode === 'creative',
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};
