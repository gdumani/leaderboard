function component() {
  const element = document.createElement('div');

  element.innerHTML = 'hello'

  return element;
}

document.body.appendChild(component());