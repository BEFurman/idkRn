function cardChange() {
  const elements = document.getElementsByClassName('inner');
  console.log(elements);
  for (i in elements) {
    console.log(i);
    if (i > -1) {
      elements[i].style.backgroundImage = "url('images/game-designs (" + (Math.ceil(Math.random() *  14) - 1) + ").png')";
    };
  };
  setTimeout(function () {
    cardChange();
  }, 10000);
};
cardChange();
