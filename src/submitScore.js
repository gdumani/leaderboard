import getScores from './getscores.js';
import Submition from './submition.js';
import list from './list.js';

const submitScore = () => {
  const submition = new Submition();
  const scores = getScores;
  scores.push([submition.name, submition.score]);
  localStorage.setItem('scores', JSON.stringify(scores));
  list(scores);
};
export default submitScore;