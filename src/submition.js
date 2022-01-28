export default class Submition {
  constructor() {
    this.user = document.getElementById('name').value;
    this.score = document.getElementById('score').value;
  }

  valid = () => /^[1-9]\d*$/.test(this.score) && /.+/.test(this.user);
}
