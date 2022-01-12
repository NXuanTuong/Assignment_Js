import Footer from "../components/footer";
import Listmenu from "../components/header";
import NewList from "../components/news";

const content = {
  print() {
    return /*html*/ ` 
            <div class = "max-w-5xl m-auto">
            <header>
                ${Listmenu.print()}
            </header>
            <div class = "m-auto">
            <h2 class = "text-center text-2xl my-3 my-4 font-bold">Tin tức nổi bật</h2>
            <div class = "grid grid-cols-3 gap-8">
                ${NewList.print()} 
                ${NewList.print()} 
            </div>
            
            </div>
            <footer class = "footer">
                ${Footer.print()}
            </footer>
            </div>
        `;
  },
};
export default content;
