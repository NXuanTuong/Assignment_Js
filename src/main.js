import { menuList, productList } from "./data";
const menuElement = document.getElementById("app");

// for 
// if(menuElement) {
//   for(let i = 0; i < menuList.length; i++) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`
//   }
// }

// for..in 
// if(menuElement) {
//   for(let i in menuList) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`
//   }
// }

// for..of 
if(menuElement) {
  for(let menuItem of menuList) {
    menuElement.innerHTML += `<li>${menuItem}</li>`
  }
}

// forEarch
if(menuElement) {
  menuList.forEach(function(menuItem,index) {
    menuElement.innerHTML += `<li>${menuItem} ${index}</li>`
  })
}

// map
if(menuElement) {
  const result = menuList.map(function(menuItem,index) {
    return `<li>${menuItem} ${index}</li>`
  }).join("");

  menuElement.innerHTML += result;
}

const productElement = document.getElementById("product");

// Khai báo hàm
const listPorduct = () => {
const reulst = productList.map(function(product) {
  return ` <div>
          <img src="${product.img}" alt="" class="m-auto">
          <h3 class="font-bold text-xl text-center">${product.name}</h3>
          <p class="text-center">Price: ${product.price}</p>
          </div>`
}).join(""); // nối chuỗi , mất dấu ,

if (productElement) {
  productElement.innerHTML += reulst;
}
}
listPorduct();