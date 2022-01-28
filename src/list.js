const list = (scores) => {
  scores = scores.sort((a, b) => b.score - a.score);
  const table = document.getElementById('list');
  table.innerHTML = '';
  scores.forEach((score) => {
    const rowTr = document.createElement('tr');
    rowTr.innerHTML = `<td>${score.user}</td><td>${score.score}</td>`;
    table.appendChild(rowTr);
  });
};
export default list;