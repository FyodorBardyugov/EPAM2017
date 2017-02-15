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
	var selectItem = document.getElementsByTagName('li'); //выборка всех элементов (дочерних) к которым относится клик

// функция которая находит индекс элемента массива по onclick
    parent.onclick = function (e) {
    	removeActiveClass();//вызов функции для удаления лишних
        
        var e = e || event; //IE 6-8 примет значение event
        var target = e.target || e.srcElement; //для поддержки в IE 6-8 e.srcElement .target засекает элемент на котором произошло событие
        for(var i = 0; i < parent.children.length; i++) {
            if(parent.children[i] == target) {
            	selectItem[i].classList.add('active');
            };
        };
    };
};
selectOneItem();

// функция внесения изменения в выбранный элемент
function changeCurrentItem(){
	var current = document.getElementsByClassName('active');
	var val = document.getElementById('txt').value;
	var color = document.getElementById('color').value;
	var marker = document.getElementById('marker').value;
	if (current.length == 0) {
		alert('Choose an element to apply changes');
	} else {
		current[0].innerHTML = val;
		current[0].style.color = color;
		current[0].setAttribute('type', marker);
	};
};





function removeCurrentItem(){
	var current = document.getElementsByClassName('active');
	if (current.length == 0) {
		alert('Choose an element to remove');
	} else {
		current[0].parentNode.removeChild(current[0]);
	};
};




/*Для обработки выделенного элемента нужно будет искать его по уникальному признаку
в дереве элементов и по функциям передавать состояния. бля.*/



/*слушатель ждёт когда происходит клик то назначается класс но только один, 
остальные классы должны предварительно уничтожаться  */








/*здесь будет функция принимающая значения от кнопки Create в переменную
чтобы создать новый элемент списка в index и разместить его в конце
обращаясь к элементам DOM*/

/*отдельно нужно описать функцию которая следит за тем чтобы курсором 
можно выделить и сделать активным один из элементов списка DOM,
применив к нему класс css рамки*/

/*также здесь будет функция, которая следит за тем что происходит в консоли,
замечая какие элементы выделены и принимающая зачения отправленные клавишей
Change current и изменяющая свойства выделенного элемента через DOM*/

/*отдельная функция которая также будет понимать что есть выделеный элемент*/
