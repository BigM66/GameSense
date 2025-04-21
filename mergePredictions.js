const fs = require('fs');
const path = require('path');

// Load game data
const gameData = require('./src/csvjson.json');

const predictionsDir = path.join(__dirname, 'src', 'predictions');

const mergedData = gameData.map((game) => {
  const weekNumber = game.Week;
  const predictionFile = fs
    .readdirSync(predictionsDir)
    .find(file => file.includes(`Week ${weekNumber}`));

  if (!predictionFile) {
    return { ...game, PredictedHomeWinPercentage: null };
  }

  const predictionCSV = fs.readFileSync(path.join(predictionsDir, predictionFile), 'utf-8');
  const lines = predictionCSV.trim().split('\n');
  const headers = lines[0].split(',');

  const records = lines.slice(1).map(line => {
    const values = line.split(',');
    return Object.fromEntries(headers.map((h, i) => [h.trim(), values[i].trim()]));
  });

  const match = records.find((p) =>
    p.HomeTeam === game.Home && p.VisitorTeam === game.Visitor
  );

  const predicted = match
    ? Math.round(parseFloat(match.HomeWinProbability) * 100)
    : null;

  return { ...game, PredictedHomeWinPercentage: predicted };
});

fs.writeFileSync('./src/mergedData.json', JSON.stringify(mergedData, null, 2));
console.log('✅ Merged data written to src/mergedData.json');
