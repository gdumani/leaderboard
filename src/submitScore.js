import getScores from './getscores.js';
import Submition from './submition.js';
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

// const gameCode = 'ocQeAmNwjfGpmIDpxrsA';
// const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameCode}/scores/`;
// submitScore(url);
export default submitScore;