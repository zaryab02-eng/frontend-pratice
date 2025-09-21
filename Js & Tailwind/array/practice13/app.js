const players = [
  { id: 1, name: "Alex", position: "forward", team: "Lions" },
  { id: 2, name: "Sam", position: "defender", team: "Tigers" },
];

const games = [
  { playerId: 1, goals: 2, assists: 1 },
  { playerId: 1, goals: 1, assists: 2 },
  { playerId: 2, goals: 0, assists: 3 },
];

// Goal: "Alex (Forward) scored 3 goals with 3 assists"

const result = players.map((player) => {
  const gameData = games.filter((game) => player.id === game.playerId);
  const playerScore = gameData.reduce((sum, score) => sum + score.goals, 0);
  const playerAssist = gameData.reduce(
    (sum, assist) => sum + assist.assists,
    0
  );
  return `${player.name} (${player.position}) scored ${playerScore} goals with ${playerAssist} assists`;
});
console.log(result);
