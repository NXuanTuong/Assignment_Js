import { get } from "../api/user";
import Footer from "../components/footer";
import Listmenu from "../components/header";

const detailsNew = {
    async print(id) {
        const { data } = await get(id);
        return `
        <div class = "max-w-5xl m-auto">
        <header>
            ${Listmenu.print()}
        </header>
        <div class = "m-auto mt-3 text-center">
             <h1>${data.title}</h1>
            <img src="${data.img}" alt="" class = "m-auto mt-3 mb-3">
            <p>${data.name}</p>
        </div>
           
            <footer class = "footer">
                ${Footer.print()}
            </footer>
            </div>)
        `;
    },
};
export default detailsNew;