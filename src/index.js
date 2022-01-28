import './style.css';
import list from './list.js';
import getScores from './getscores.js';

let scores = getScores();
list(scores);
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  scores = getScores();
  list(scores);
});
