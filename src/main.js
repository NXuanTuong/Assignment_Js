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
// if (menuElement) {
//   for (let menuItem of menuList) {
//     menuElement.innerHTML += `<li>${menuItem}</li>`;
//   }
// }

// forEarch
// if (menuElement) {
//   menuList.forEach(function (menuItem, index) {
//     menuElement.innerHTML += `<li>${menuItem} ${index}</li>`;
//   });
// }

// map
if (menuElement) {
  const result = menuList
    .map(function (menuItem, index) {
      return `<li><a href="#" class="menu_link hover:border-b">${menuItem}</a></li>`;
    })
    .join("");

  menuElement.innerHTML += result;
}

const productElement = document.getElementById("product");
const productElements = document.getElementById("products");

// Khai báo hàm
const listPorduct = () => {
  const reulst = productList
    .map(function (product) {
      return ` <div class="border-2 hover:border-red-500">
            <div class="my-4">
            <a href=""><img
            src="${product.img}"
            alt="" class="m-auto"></a>
  </div>
  <div class="px-7">
    <h3 class="title-documment"><a href="">${product.title}</a></h3>
    <p class="main-documment">${product.document}</p>
</div>
</div>`;
    })
    .join(""); // nối chuỗi , mất dấu ,

  if (productElement) {
    productElement.innerHTML = reulst;
  }
  if (productElements) {
    productElements.innerHTML = reulst;
  }
};
listPorduct();
