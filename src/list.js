const list = (scores) => {
  scores = scores.sort((a, b) => b[1] - a[1]);
  const table = document.getElementById('list');
  table.innerHTML = '';
  scores.forEach((score) => {
    const rowTr = document.createElement('tr');
    rowTr.innerHTML = `<td>${score[0]}</td><td>${score[1]}</td>`;
    table.appendChild(rowTr);
  });
};
export default list;