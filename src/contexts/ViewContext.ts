import React from 'react';

interface ViewContext {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const ViewContext = React.createContext<ViewContext | undefined>(undefined);

export default ViewContext;
