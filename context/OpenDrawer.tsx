'use client';
import { createContext, useState, useContext } from 'react';

interface OpenDrawerContextProps {
  open: boolean;
  widthDrawer: number;
  toggleOpen: () => void;
}

const OpenDrawerContext = createContext({} as OpenDrawerContextProps);

const useOpenDrawer = () => {
  const context = useContext(OpenDrawerContext);
  if (!context) {
    throw new Error('useOpenDrawer must be used within a OpenDrawerProvider');
  }
  return context;
};

const OpenDrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const widthDrawer = 280;

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <OpenDrawerContext.Provider value={{ open, toggleOpen, widthDrawer }}>
      {children}
    </OpenDrawerContext.Provider>
  );
};

export { OpenDrawerProvider, useOpenDrawer };
