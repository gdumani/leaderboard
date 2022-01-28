const list = (scores) => {
  console.log('list',scores);
  scores = scores.sort((a, b) => b.score - a.score);
  console.log('sorted',scores);
  const table = document.getElementById('list');
  table.innerHTML = '';
  scores.forEach((score) => {
    const rowTr = document.createElement('tr');
    rowTr.innerHTML = `<td>${score.user}</td><td>${score.score}</td>`;
    table.appendChild(rowTr);
  });
};
export default list;