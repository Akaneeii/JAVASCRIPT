const todoArray = [];
//make sure to declare it outside to not reset the array everytime your inout changes

function addItems(){
const listElement= document.querySelector('.js-todo-list');
todoArray.push(listElement.value);

const displayTodo = document.querySelector('.js-display-todo');

displayTodo.innerHTML ='';
for (let i = 0; i < todoArray.length; i++) {
    displayTodo.innerHTML += todoArray[i] + '<br>';
}
listElement.value ='';
}

//i should check simon's solution too.Mine might not work everytime
//like it might be better to generate the html from the js file instead of doing it in
// in the html file (i've done the same in the whatsapp clone project)

