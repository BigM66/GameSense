import React, { useState } from 'react';
import NFLTeams from './NFLTeams.tsx';
import WeeklyResults from './WeeklyResults.tsx';
import ModelSelector from './ModelSelector.tsx';
import './App.css';

const App = () => {
  console.trace("App rendering");
  console.log("useState:", useState); // 👀 should log: ƒ useState()
  const [someState, setSomeState] = useState(0); // ✅ Correct usage
  const [view, setView] = useState(null); // ✅ Correct usage for 'view' state

  return (
    <div className="app-container">
      {!view && (
        <>
          <h1>Select a View</h1>
          <div className="selection-buttons">
            <button onClick={() => setView('team')}>View by Team</button>
            <button onClick={() => setView('week')}>View by Week</button>
            <button onClick={() => setView('model')}>Try the Model</button>
          </div>
        </>
      )}

      {view === 'team' && <NFLTeams />}
      {view === 'week' && <WeeklyResults />}
      {view === 'model' && <ModelSelector />}
    </div>
  );
};

export default App;



