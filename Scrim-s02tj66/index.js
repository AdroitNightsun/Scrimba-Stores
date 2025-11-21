import { menuArray } from "./data.js";

let cart = [];

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
    const targetCartItem = cart.find(function(item){
        return item.id == addId
    })
    
    if(targetCartItem){
        targetCartItem.quantity++
    } else {
        const targetMenuItem = menuArray.find(function(item){
            return item.id == addId
        })
        if (targetMenuItem) {
            const newItem = {...targetMenuItem, quantity: 1}
            cart.push(newItem)
        }
    }
    render()
}

function handleOrderClick(){
  console.log("order button clicked")
}

function getMenuHtml() {

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

function getOrderHtml(){
  if(cart.length === 0){
    return ``
  }
  
  let orderHtml = ``
  cart.forEach(function (orderItem){
    orderHtml += `<span class="order-item-line">
      <div class="order-item">${orderItem.name}</div>
      <button class="remove-btn" data-remove="${orderItem.id}">(remove)</button>
      <div>$${orderItem.price * orderItem.quantity}</div>
    </span>`
  })
  
  orderHtml += `<span class="total-container" id="total-container">
          <h2 class="total-heading">Total price:</h2>
          <div class="total-price" id="total-price">$${getCartTotal()}</div>
        </span>`
  
  return orderHtml
}

function getCartTotal(){
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}

function render() {
  document.getElementById("menu-container").innerHTML = getMenuHtml();
  document.getElementById("order-items").innerHTML = getOrderHtml();
}

render();
