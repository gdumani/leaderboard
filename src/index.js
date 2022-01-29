import './style.css';
import swal from 'sweetalert';
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
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
  if (submition.valid()) {
    submitScore(url, submition);
    swal('Score sent!', '', 'success');
  } else { swal('Invalid entry', 'Name is required and score must be a number bigger than 0', 'error'); }
});
