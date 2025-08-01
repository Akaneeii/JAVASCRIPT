//10g
function isToggled(element) {
  document.querySelector('.is-toggled')?.classList.remove('is-toggled');
  element.classList.add('is-toggled');
}


//10h
 function finalCost(){

            //to get the text inside the imput elments we use value not inner.HTML
            let orderCostElement=Number(document.querySelector('.js-cost-of-order').value);
        let cost= document.querySelector('.js-final-cost');
            
            if (orderCostElement <= 40  ) {

                if (orderCostElement < 0) {

                cost.classList.add('error-color');
                cost.innerText = 'Error: cost cannot be less than $0';
            }
           
                else{
                    orderCostElement+=10;
               cost.innerText = `$ ${orderCostElement}`;
                }
                
            }

            else if (orderCostElement > 40) {
                cost.classList.remove('error-color');
                 cost.innerText = `$${orderCostElement}`;
            }

        }

function handleCostKeydown(){
        if (event.key === 'Enter') 
finalCost();
}

