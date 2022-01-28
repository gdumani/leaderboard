import getScores from './getscores.js';
import list from './list.js';

const submitScore = async (url, submition) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(submition),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const scores = await getScores(url);
  list(scores);
};
export default submitScore;