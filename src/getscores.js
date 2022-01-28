import list from './list.js';

const getScores = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(list(data.result));
};
// const getScores = localStorage.getItem('scores') !== null
//   ? JSON.parse(localStorage.getItem('scores'))
//   : [
//     ['John', 50],
//     ['Peter', 100],
//     ['John', 75],
//     ['Peter', 120],
//   ];

export default getScores;