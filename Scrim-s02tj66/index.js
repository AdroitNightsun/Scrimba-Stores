import { menuArray } from "./data.js";

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
                    <div class="add-btn">+</div>                 
                  </div>
                </div>`;
  });
  return menuHtml;
}

function render() {
  document.getElementById("menu-container").innerHTML = getMenuHtml();
}

render();
