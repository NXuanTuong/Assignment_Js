import Banner from "../components/banner";
import Footer from "../components/footer";
import Listmenu from "../components/header";

const AboutPage = {
    print() {
        return /* html */`
        <header>
            ${Listmenu.print()}
        </header>
        <div class="my-3">
            ${Banner.print()}
        </div>
        <h1 class="text-2xl my-10 font-bold">About Page</h1>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo repellat, a accusamus impedit veniam exercitationem vero culpa, tempora sint minus. Inventore recusandae deserunt optio beatae ipsum nihil odit est?</div>
        <footer class="footer">
            ${Footer.print()}
        </footer>
        <br>
    `;
    } 
}
export default AboutPage;