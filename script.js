function cardChange() {
  const elements = document.getElementsByClassName('inner');
  for (i in elements) {
    if (i > -1) {
      elements[i].style.backgroundImage = "url('images/game-designs (" + (Math.ceil(Math.random() *  14) - 1) + ").png')";
    };
  };
  setTimeout(function () {
    cardChange();
  }, 10000);
};
function logIn() {
  document.getElementById('hidden').style.animation = 'float 1s 1 ease-in-out';
  document.getElementById('hidden').style.bottom = '0%';
}
cardChange();
