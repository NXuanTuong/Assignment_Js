import Banner from "../components/banner";
import Footer from "../components/footer";
import Listmenu from "../components/header";

const AboutPage = {
    print() {
        return /* html */`
        <div class = "max-w-5xl m-auto">
        <header>
            ${Listmenu.print()}
        </header>
        <h1 class="text-2xl my-10 font-bold">About Page</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo repellat, a accusamus impedit veniam exercitationem vero culpa, tempora sint minus. Inventore recusandae deserunt optio beatae ipsum nihil odit est?</div>
        <footer class="footer">
            ${Footer.print()}
        </footer>
        <br>
        </div>
    `;
    } 
}
export default AboutPage;