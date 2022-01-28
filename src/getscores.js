import list from './list.js';

const getScores = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  list(data.result);
};
export default getScores;