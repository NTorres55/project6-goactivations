var button = document.getElementById('submit');

var myFunction = function() {
  document.getElementById('form').style.display="none";
  document.getElementById('thanks').style.display="block";
}

button.onclick = myFunction;
