import React, { useState, useEffect } from 'react';
import './nflTeams.css';
import BillsLogo from './NFL_Team_Logos/Bill_logo.png';
import DolphinsLogo from './NFL_Team_Logos/Dolphins_logo.png';
import JetsLogo from './NFL_Team_Logos/Jets_logo.png';
import PatriotsLogo from './NFL_Team_Logos/Patriots_logo.png';
import ChiefsLogo from './NFL_Team_Logos/Chiefs_logo.png';
import ChargersLogo from './NFL_Team_Logos/Chargers_logo.png';
import BroncosLogo from './NFL_Team_Logos/Broncos_logo.png';
import RaidersLogo from './NFL_Team_Logos/Raiders_logo.png';
import RavensLogo from './NFL_Team_Logos/Ravens_logo.png';
import SteelersLogo from './NFL_Team_Logos/Pittsburgh_Steelers_logo.png';
import BengalsLogo from './NFL_Team_Logos/Bengals_logo.png';
import BrownsLogo from './NFL_Team_Logos/Browns_logo.png';
import TexansLogo from './NFL_Team_Logos/Texans_logo.png';
import ColtsLogo from './NFL_Team_Logos/Colts_logo.png';
import JaguarsLogo from './NFL_Team_Logos/Jaguars_logo.png';
import TitansLogo from './NFL_Team_Logos/Titans_logo.png';
import EaglesLogo from './NFL_Team_Logos/Eagles_logo.png';
import CommandersLogo from './NFL_Team_Logos/Commanders_logo.png';
import CowboysLogo from './NFL_Team_Logos/Cowboys_logo.png';
import GiantsLogo from './NFL_Team_Logos/Giants_logo.png';
import RamsLogo from './NFL_Team_Logos/Rams_logo.png';
import SeahawksLogo from './NFL_Team_Logos/Seahakws_logo.png';
import CardinalsLogo from './NFL_Team_Logos/Cardinals_logo.png';
import NinersLogo from './NFL_Team_Logos/49rs_logo.png';
import LionsLogo from './NFL_Team_Logos/Lions_logo.png';
import VikingsLogo from './NFL_Team_Logos/Vikings_log.png';
import PackersLogo from './NFL_Team_Logos/Green-Bay-Packers-Logo.png';
import BearsLogo from './NFL_Team_Logos/Bears_logo.png';
import BuccaneersLogo from './NFL_Team_Logos/Buccaneers_logo.png';
import FalconsLogo from './NFL_Team_Logos/Falcons_logo.png';
import PanthersLogo from './NFL_Team_Logos/Panthers_logo.png';
import SaintsLogo from './NFL_Team_Logos/Saints_logo.png';


type Team = {
  name: string;
  logo: string;
  actualRecord: string;
  predictedRecord: string;
  primaryColor: string;
};

const NFLTeams = () => {
  const [viewMode, setViewMode] = useState(null as '2024' | '2025' | null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const nflTeams: Team[] = [
    { name: "Buffalo Bills", logo: BillsLogo, actualRecord: "13-4", predictedRecord: "17-0", primaryColor: "#00338D" },
    { name: "Miami Dolphins", logo: DolphinsLogo, actualRecord: "8-9", predictedRecord: "14-3", primaryColor: "#008E97" },
    { name: "New York Jets", logo: JetsLogo, actualRecord: "5-12", predictedRecord: "4-13", primaryColor: "#125740" },
    { name: "New England Patriots", logo: PatriotsLogo, actualRecord: "4-13", predictedRecord: "4-13", primaryColor: "#002244" },
    { name: "Kansas City Chiefs", logo: ChiefsLogo, actualRecord: "15-2", predictedRecord: "16-1", primaryColor: "#E31837" },
    { name: "Los Angeles Chargers", logo: ChargersLogo, actualRecord: "11-6", predictedRecord: "14-3", primaryColor: "#0080C6" },
    { name: "Denver Broncos", logo: BroncosLogo, actualRecord: "10-7", predictedRecord: "5-12", primaryColor: "#002244" },
    { name: "Las Vegas Raiders", logo: RaidersLogo, actualRecord: "4-13", predictedRecord: "4-13", primaryColor: "#000000" },
    { name: "Baltimore Ravens", logo: RavensLogo, actualRecord: "12-5", predictedRecord: "13-4", primaryColor: "#241773" },
    { name: "Pittsburgh Steelers", logo: SteelersLogo, actualRecord: "10-7", predictedRecord: "6-11", primaryColor: "#FFB612" },
    { name: "Cincinnati Bengals", logo: BengalsLogo, actualRecord: "9-8", predictedRecord: "12-5", primaryColor: "#FB4F14" },
    { name: "Cleveland Browns", logo: BrownsLogo, actualRecord: "3-14", predictedRecord: "1-16", primaryColor: "#311D00" },
    { name: "Houstan Texans", logo: TexansLogo, actualRecord: "10-7", predictedRecord: "1-16", primaryColor: "#03202F" },
    { name: "Indianapolis Colts", logo: ColtsLogo, actualRecord: "8-9", predictedRecord: "7-10", primaryColor: "#002C5F" },
    { name: "Jacksonville Jaguars", logo: JaguarsLogo, actualRecord: "4-13", predictedRecord: "8-9", primaryColor: "#006778" },
    { name: "Tennessee Titans", logo: TitansLogo, actualRecord: "3-14", predictedRecord: "7-10", primaryColor: "#4B92DB" },
    { name: "Philadelphia Eagles", logo: EaglesLogo, actualRecord: "14-3", predictedRecord: "17-0", primaryColor: "#004C54" },
    { name: "Washington Commanders", logo: CommandersLogo, actualRecord: "12-5", predictedRecord: "12-5", primaryColor: "#5A1414" },
    { name: "Dallas Cowboys", logo: CowboysLogo, actualRecord: "7-10", predictedRecord: "12-5", primaryColor: "#003594" },
    { name: "New York Giants", logo: GiantsLogo, actualRecord: "3-14", predictedRecord: "1-16", primaryColor: "#0B2265" },
    { name: "Los Angeles Rams", logo: RamsLogo, actualRecord: "10-7", predictedRecord: "8-9", primaryColor: "#003594" },
    { name: "Seattle Seahawks", logo: SeahawksLogo, actualRecord: "10-7", predictedRecord: "8-9", primaryColor: "#002244" },
    { name: "Arizona Cardinals", logo: CardinalsLogo, actualRecord: "8-9", predictedRecord: "3-14", primaryColor: "#97233F" },
    { name: "San Francisco 49ers", logo: NinersLogo, actualRecord: "6-11", predictedRecord: "11-6", primaryColor: "#AA0000" },
    { name: "Detroit Lions", logo: LionsLogo, actualRecord: "15-2", predictedRecord: "14-3", primaryColor: "#0076B6" },
    { name: "Minnesota Vikings", logo: VikingsLogo, actualRecord: "14-3", predictedRecord: "16-1", primaryColor: "#4F2683" },
    { name: "Green Bay Packers", logo: PackersLogo, actualRecord: "11-6", predictedRecord: "12-5", primaryColor: "#203731" },
    { name: "Chicago Bears", logo: BearsLogo, actualRecord: "5-12", predictedRecord: "0-17", primaryColor: "#0B162A" },
    { name: "Tampa Bay Buccaneers", logo: BuccaneersLogo, actualRecord: "10-7", predictedRecord: "8-9", primaryColor: "#D50A0A" },
    { name: "Atlanta Falcons", logo: FalconsLogo, actualRecord: "8-9", predictedRecord: "10-7", primaryColor: "#A71930" },
    { name: "Carolina Panthers", logo: PanthersLogo, actualRecord: "5-12", predictedRecord: "4-13", primaryColor: "#0085CA" },
    { name: "New Orleans Saints", logo: SaintsLogo, actualRecord: "5-12", predictedRecord: "3-14", primaryColor: "#D3BC8D" },
  ];

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  useEffect(() => {
    if (selectedTeam) {
      document.body.style.backgroundColor = selectedTeam.primaryColor;
    } else {
      document.body.style.backgroundColor = '';
    }
  }, [selectedTeam]);

  if (!viewMode) {
    return (
      <div className="container">
        <h1>Which NFL results would you like to view?</h1>
        <div className="selection-buttons">
          <button onClick={() => setViewMode('2024')}>Actual 2024 Results</button>
          <button onClick={() => setViewMode('2025')}>Predicted 2024 Results</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Select an NFL Team to View Their {viewMode === '2024' ? '2024 Actual' : '2024 Predicted'} Record</h1>

      <div className="team-logos">
        {nflTeams.map((team) => (
          <div key={team.name} className="team-card" onClick={() => handleTeamSelect(team)}>
            <img src={team.logo} alt={team.name} className="team-logo" />
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div className="team-details">
          <h2>{selectedTeam.name}</h2>
          <img src={selectedTeam.logo} alt={selectedTeam.name} className="team-logo-large" />
          <p><strong>Record ({viewMode}):</strong> {viewMode === '2024' ? selectedTeam.actualRecord : selectedTeam.predictedRecord}</p>
        </div>
      )}
    </div>
  );
};

export default NFLTeams;
