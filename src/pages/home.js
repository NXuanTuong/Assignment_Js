import Banner from "../components/banner";
import Footer from "../components/footer";
import Listmenu from "../components/header";
import NewList from "../components/news";

const HomePage = {
  print() {
    return /* html */ `
    <header>
    ${Listmenu.print()}
    </header>
  <div class="my-3">
    ${Banner.print()}
  </div>
  <h2 class="title-item">Tin tức học tập</h2>
  <div id="product" class="item-cols">
    ${NewList.print()}
    </div>
    <h2 class="title-item">Hoạt động sinh viên</h2>
  <div id="product" class="item-cols">
    ${NewList.print()}
    </div>

  <footer class="footer">
    ${Footer.print()}
  </footer>
        <br>
        `;
  },
};
export default HomePage;
