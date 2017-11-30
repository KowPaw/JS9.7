// scripts.js

var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var number = list.getElementsByTagName('li').length;
	element.innerHTML = 'item '+ number;
	list.appendChild(element);
});