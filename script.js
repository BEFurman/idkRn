import { app, db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

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
cardChange();

function submitButton() {
  var submittedUn = document.getElementById('logInUn');
  var submittedPw = document.getElementById('logInPw');
  let deets = document.getElementsByClassName('deets');
  for (element in deets) {
    element.value = '';
  }
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