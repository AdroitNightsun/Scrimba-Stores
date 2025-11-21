import { menuArray } from "./data.js";

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
       handleAddClick(e.target.dataset.add) 
    }
    else if(e.target.dataset.remove){
        handleRemoveClick(e.target.dataset.remove)
    }
    else if(e.target.id === 'order-btn'){
        handleOrderClick()
    }
})

function handleAddClick(addId){
  console.log(addId)
}

function handleOrderClick(){
  console.log("order button clicked")
}

function getMenuHtml() {
  let orderHtml = ``;
    orderHtml += ``

  let menuHtml = ``;
  menuArray.forEach(function (item) {
    menuHtml += `<div class="menu">
                  <div class="menu-inner">
                    <div class="menu-emoji">${item.emoji}</div>
                    <div class="menu-details">
                      <h2 class="menu-name">${item.name}</h2>
                      <h3 class="menu-ingredients">${item.ingredients}</h3>
                      <h3 class="menu-price">$${item.price}</h3>
                    </div>
                    <div class="add-btn" data-add="${item.id}">+</div>                 
                  </div>
                </div>`;
  });
  return menuHtml;
}

function render() {
  document.getElementById("menu-container").innerHTML = getMenuHtml();
}

render();
