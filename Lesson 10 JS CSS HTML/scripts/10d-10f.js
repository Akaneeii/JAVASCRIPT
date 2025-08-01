//10d



//when i clicked one of the last 3 buttons, it was only activating the first one

//here's why
// The issue is that your isToggled function always selects the first button
//  with the class .js-button using document.querySelector('.js-button'). 
// So, no matter which button you click, only the first button is toggled.

// To fix this, you need to pass the clicked button (using this) 
// to the function and toggle the class on that specific button:

function isToggled(element){
    // const gamingElement = document.querySelector('.js-button');
        if (element.classList.contains('is-toggled') === false) {
           element.classList.add('is-toggled');
        }

        else
            element.classList.remove('is-toggled');

}
