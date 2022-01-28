import './style.css';
import getScores from './getscores.js';
import submitScore from './submitScore.js';
import Submition from './submition.js';

const gameCode = 'ocQeAmNwjfGpmIDpxrsA';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameCode}/scores/`;
getScores(url);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  getScores(url);
});
const addScore = document.getElementById('add-score');
addScore.addEventListener('click', () => {
  const submition = new Submition();
  if 
  submitScore(url, submition);
});
