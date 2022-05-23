console.log(1);
function cardChange() {
  const elements = document.getElementsByClassName('inner');
  for (i in elements) {
    if (i > -1) {
      elements[i].style.backgroundImage = "url('images/game-designs (" + (Math.ceil(Math.random() * 24) - 1) + ").png')";
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
setTimeout(function () {
  cardChange();
}, 1);

function submitButton() {
  console.log('1');
  var submittedUn = document.getElementById('logInUn').value;
  var submittedPw = document.getElementById('logInPw').value;
  console.log(submittedUn, submittedPw);
  document.getElementById('logInUn').value = '';
  document.getElementById('logInPw').value = '';
  const dbSubmit = () => {
    addDoc(loginInfo, {
      username: submittedUn,
      password: submittedPw
    })
    .then(() => {
      alert('Data Added! :D');
    })
    .catch((err) => {
      alert(err.message);
    })
  }
}