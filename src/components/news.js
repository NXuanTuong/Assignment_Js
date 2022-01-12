import { productList } from "../data";

const NewList = {
  print() {
    return `
        ${productList
          .map(
            (post) => `
            <div class="border-2">
                <div class="my-4">
                    <a href="/content/${post.id}"><img
                            src="${post.img}"
                            alt="" class="m-auto"></a>
                </div>
                <div class="px-7">
                    <h3 class="title-documment"><a href="/content/${post.id}">${post.title}</a></h3>
                    <p class="main-documment">${post.document}</p>
                </div>
            </div>
        `
          )
          .join("")}
    `;
  },
};
export default NewList;
