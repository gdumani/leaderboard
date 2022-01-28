const getScores = localStorage.getItem('scores') !== null
  ? JSON.parse(localStorage.getItem('scores'))
  : [
    ['John', 50],
    ['Peter', 100],
    ['John', 75],
    ['Peter', 120],
  ];

export default getScores;