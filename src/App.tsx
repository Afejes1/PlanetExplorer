import React, { useEffect, useState } from 'react';
import PlanetExplorer from './components/PlanetExplorer';

const App: React.FC = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div>
      <header className="app-header">
        <h1>Planet Explorer</h1>
        <button className="theme-toggle" onClick={() => setDark(d => !d)}>
          Toggle Theme
        </button>
      </header>
      <PlanetExplorer />
    </div>
  );
};

export default App;
