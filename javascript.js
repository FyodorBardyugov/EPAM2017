'use strict';

// функция создания элемента списка
function createNewItem() {
	var newLi = document.createElement('li'); // создал элемент списка
	var val = document.getElementById('txt').value; // взял значение из инпут текст
	var color = document.getElementById('color').value; // взял значение из инпут цвет
	var marker = document.getElementById('marker').value; // взял значение из инпут маркер
	newLi.innerText = val; // поместил значение в готовый элемент списка
	newLi.style.color = color; // добавил стиль к готовому элементу списка
	newLi.setAttribute('type', marker); // добавил тип маркера элемента списка
	var parent = document.getElementById('list'); // определил родителя для размещения в дом
	parent.appendChild(newLi); // добавление в дом
}

// функция для очистки невыделенных списков, написана для участия в selectOneItem
function removeActiveClass() {
	var liItem = document.getElementsByTagName('li');//собрал элементы по признаку
	// перебрал массив и предварительно удалил классы active
	for (var i = liItem.length - 1; i >= 0; i--) {
		liItem[i].classList.remove('active');
	};
};

// функция которая снимает выделение с прочих элементов и выделяет по клику нужный
function selectOneItem(){
	var parent = document.getElementById('list');//нашёл родительский элемент от которого смотрим индекс дочернего
	var selectItem = parent.getElementsByTagName('li'); //выборка всех элементов (дочерних) к которым относится клик
// функция которая находит индекс элемента массива по onclick
    parent.onclick = function (e) {
    	removeActiveClass();//вызов функции для удаления лишних
        
        var target = e.target; //фиксация события
        for(var i = 0; i < parent.children.length; i++) {
            
            if(parent.children[i] == target) {
            	target.classList.add('active');
            	
            	// сбор значений атрибутов для размещения в инпуте с текстом
            	var val = target.innerText;
            	var textInput = document.getElementById('txt');
            	textInput.value = val;//передаёт значение в инпут с текстом

            	// сбор значений атрибутов для размещения в инпуте с цветом
            	var color = target.style.color;
            	var colorInput = document.getElementById('color');
            	colorInput.value = color;//передаёт значение в инпут с цветом
            	
            	// сбор значений атрибутов для размещения в инпуте с типом маркера
            	var marker = target.getAttribute('type');
            	var markerSelect = document.getElementById('marker');
            	markerSelect.value = marker;//передаёт значение в инпут с маркером
            };
        };
    };
};
selectOneItem();

// функция внесения изменения в выбранный элемент
function changeCurrentItem(){
	// собираются данные
	var current = document.getElementsByClassName('active');
	var val = document.getElementById('txt').value;
	var color = document.getElementById('color').value;
	var marker = document.getElementById('marker').value;
	// проверка на невыделенные элементы и внесение изменений
	if (current.length == 0) {
		alert('Choose an element to apply changes');
	} else {
		current[0].innerText = val;
		current[0].style.color = color;
		current[0].setAttribute('type', marker);
	};
};

// удаление выделенного элемента
function removeCurrentItem(){
	var current = document.getElementsByClassName('active');
	if (current.length == 0) {
		alert('Choose an element to remove');
	} else {
		current[0].parentNode.removeChild(current[0]);
	};
};