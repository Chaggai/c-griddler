import React from 'react';
import classes from './App.module.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {

  const NUM_OF_ROWS = 20;
  const NUM_OF_COLS = 20;

  const gridDimensionsCss = {
    gridTemplateRows: `repeat(${NUM_OF_ROWS}, 1fr)`,
    gridTemplateColumns: `repeat(${NUM_OF_COLS}, 1fr)`,
  };

  return (
    <div style={gridDimensionsCss} className={classes.App}></div>
  );
};

export default App;
