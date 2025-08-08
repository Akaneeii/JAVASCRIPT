const todoArray = [{
    name:'lullaby',
    date:'05-08-2025'
}];
//make sure to declare it outside to not reset the array everytime your inout changes

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    todoArray.forEach(function(todoObject,index){
    // const name = todoObject.name;
    // const date = todoObject.date;

    //we can do some destructuring if the proprety has the same name as the variable name

    const {name} = todoObject;
    const {date} = todoObject;

    const html = `
    <div>${name}</div>
    <div class="">${date}</div>
    <button class="delete" onclick =" 
    todoArray.splice(${index},1);
    renderTodoList();
    ">Delete</button>

    `;
    todoListHTML+=html;
        
    });
    

    document.querySelector('.js-container')
    .innerHTML = todoListHTML;
}



function addItems(){
const listElement= document.querySelector('.js-todo-list');
// const displayTodo = document.querySelector('.js-display-todo');

// displayTodo.innerHTML ='';
// for (let i = 0; i < todoArray.length; i++) {
//     displayTodo.innerHTML += todoArray[i] + '<br>';
// }
const dueDateElement = document.querySelector('.js-due-date-input');


todoArray.push({
    name : listElement.value,
    date : dueDateElement.value,
});

listElement.value ='';
dueDateElement.value='';
renderTodoList();
}

//i should check simon's solution too.Mine might not work everytime
//like it might be better to generate the html from the js file instead of doing it in
// in the html file (i've done the same in the whatsapp clone project)

