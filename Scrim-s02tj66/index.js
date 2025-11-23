import { menuArray } from "./data.js";
let cart = [];
const modal = document.getElementById("modal-container");

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    handleAddClick(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    handleRemoveClick(e.target.dataset.remove);
  } else if (e.target.id === "order-btn") {
    handleOrderClick();
  }
});

document.getElementById('modal-form').addEventListener('submit', function(e) {
  e.preventDefault();
  handlePaymentClick();
});

function handleAddClick(addId) {
  const targetCartItem = cart.find(function (item) {
    return item.id == addId;
  });
  if (targetCartItem) {
    targetCartItem.quantity++;
  } else {
    const targetMenuItem = menuArray.find(function (item) {
      return item.id == addId;
    });
    if (targetMenuItem) {
      const newItem = { ...targetMenuItem, quantity: 1 };
      cart.push(newItem);
    }
  }
  render();
}

function handleOrderClick() {
  modal.classList.add("show");
}

function handleRemoveClick(removeId) {
  const targetItem = cart.find(function (item) {
    return item.id == removeId;
  });
  if (targetItem) {
    targetItem.quantity--;
    if (targetItem.quantity === 0) {
      cart = cart.filter(function (item) {
        return item.id != removeId;
      });
    }
  }
  render();
}

function handlePaymentClick() {
  const name = document.getElementById("name-input").value;
  const modalForm = document.getElementById("modal-form");
  modal.classList.remove("show");
  modalForm.reset();
  
  document.getElementById("menu-container").style.display = "none";
  document.getElementById("order-section").style.display = "none";
  
  const main = document.querySelector("main");
  main.innerHTML = `<div class="message">Thanks, ${name}! Your order is on its way!</div>`;
  
  cart = [];
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

function getOrderHtml() {
  if (cart.length === 0) {
    return ``;
  }
  let orderHtml = ``;
  cart.forEach(function (orderItem) {
    orderHtml += `<div class="order-item-line">
      <span class="order-item">${orderItem.name}</span>
      <button class="remove-btn" data-remove="${orderItem.id}">(remove)</button>
      <span>$${orderItem.price * orderItem.quantity}</span>
    </div>`;
  });
  orderHtml += `<div class="total-container" id="total-container">
          <span class="total-label">Total price:</span>
          <span class="total-price" id="total-price">$${getCartTotal()}</span>
        </div>`;
  return orderHtml;
}

function getCartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function render() {
  document.getElementById("menu-container").innerHTML = getMenuHtml();
  document.getElementById("order-items").innerHTML = getOrderHtml();
  const orderSection = document.getElementById("order-section");
  if (cart.length === 0) {
    orderSection.style.display = "none";
  } else {
    orderSection.style.display = "block";
  }
}

render();