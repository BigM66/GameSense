import React, { useState } from 'react';
import './Weeklyresults.css';
import actualResults from './ActualResults.json';
import projectedResults from './ProjectedResults.json';

type ActualGame = {
  Week: number;
  Home: string;
  Visitor: string;
  HomeScore: number;
  VisitorScore: number;
};

type ProjectedGame = {
  Week: number;
  Home: string;
  Visitor: string;
  HomeWinProbability: number;
};

// Normalize Actual Results
const parsedActual: ActualGame[] = actualResults.map(game => {
  const weekMatch = String(game.Week).match(/\d+/);
  return {
    Week: weekMatch ? Number(weekMatch[0]) : NaN,
    Home: game.Home,
    Visitor: game.Visitor,
    HomeScore: game.HomeScore,
    VisitorScore: game.VisitorScore,
  };
});

// Normalize Projected Results
const parsedProjected: ProjectedGame[] = projectedResults.map(game => {
  const weekMatch = String(game.Week).match(/\d+/);
  return {
    Week: weekMatch ? Number(weekMatch[0]) : NaN,
    Home: game.HomeTeam,
    Visitor: game.VisitorTeam,
    HomeWinProbability: game.HomeWinProbability,
  };
});

const WeeklyResults = () => {
  const [view, setView] = useState('actual');
  const [actualWeek, setActualWeek] = useState(1);
  const [projectedWeek, setProjectedWeek] = useState(1);

  const actualWeeks = Array.from(new Set(parsedActual.map(game => game.Week))).sort((a, b) => a - b);
  const projectedWeeks = Array.from(new Set(parsedProjected.map(game => game.Week))).sort((a, b) => a - b);

  const actualGames = parsedActual.filter(game => game.Week === actualWeek);
  const projectedGames = parsedProjected.filter(game => game.Week === projectedWeek);

  return (
    <div className="weekly-container">
      {/* View Toggle */}
      <div className="view-tabs">
        <button onClick={() => setView('actual')} className={view === 'actual' ? 'active' : ''}>Actual Results</button>
        <button onClick={() => setView('projected')} className={view === 'projected' ? 'active' : ''}>Projected Results</button>
      </div>

      {/* Actual Results View */}
      {view === 'actual' && (
        <>
          <h2>Week {actualWeek} - Actual Results</h2>
          <div className="week-buttons">
            {actualWeeks.map((week) => (
              <button key={week} onClick={() => setActualWeek(week)}>
                Week {week}
              </button>
            ))}
          </div>
          <div className="results">
            {actualGames.map((game, index) => (
              <div key={index} className="game-result">
                <strong>{game.Visitor}</strong> ({game.VisitorScore}) @ <strong>{game.Home}</strong> ({game.HomeScore})
              </div>
            ))}
          </div>
        </>
      )}

      {/* Projected Results View */}
      {view === 'projected' && (
        <>
          <h2>Week {projectedWeek} - Projected Results</h2>
          <div className="week-buttons">
            {projectedWeeks.map((week) => (
              <button key={week} onClick={() => setProjectedWeek(week)}>
                Week {week}
              </button>
            ))}
          </div>
          <div className="results">
            {projectedGames.map((game, index) => (
              <div key={index} className="game-result">
                <strong>{game.Visitor}</strong> @ <strong>{game.Home}</strong> — Home Win Probability: {(game.HomeWinProbability * 100).toFixed(1)}%
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WeeklyResults;
