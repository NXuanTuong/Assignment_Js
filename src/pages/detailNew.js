import Footer from "../components/footer";
import Listmenu from "../components/header";
import { productList } from "../data";

const detailsNew = {
    print(id) {
        const result = productList.find((post) => post.id === id);
        return /*html*/ `
        <div class = "max-w-5xl m-auto">
        <header>
            ${Listmenu.print()}
        </header>
        <div class = "m-auto mt-3 text-center">
             <h1>${result.title}</h1>
            <img src="${result.img}" alt="" class = "m-auto mt-3 mb-3">
            <p>${result.document}</p>
        </div>
           
            <footer class = "footer">
                ${Footer.print()}
            </footer>
            </div>
        `;
    },
};
export default detailsNew;