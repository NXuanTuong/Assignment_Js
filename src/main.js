import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import content from "./pages/content";
import detailsNew from "./pages/detailNew";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashBoard from "./pages/admin/dashboard";
import NewsAdmin from "./pages/admin/news/newsAdmin";
import AddNews from "./pages/admin/news/addnews";
import EditNews from "./pages/admin/edits/editNew";

const router = new Navigo("/", { linksSelector: "a" });

const render = (content) => {
  // document.getElementById("header").innerHTML = Listmenu.print();
  document.getElementById("app").innerHTML = content;
}; 

router.on({
  "/": () => {
    render(HomePage.print());
  },
  "/about": () => {
    render(AboutPage.print());
  },
  "/content": () => {
    render(content.print());
  },
  "/content/:id": ({ data : { id } }) => {
      // const {id} = data;
      render(detailsNew.print(id));
  },
  "/signin": () => {
    render(SignIn.print());
  },
  "/signup": () => {
    render(SignUp.print());
  },
  "/admin/dashboard": () => {
    render(DashBoard.print());
  },
  "/admin/news": () => {
    render(NewsAdmin.print());
  },
  "/admin/news/add": () => {
    render(AddNews.print());
  },
  "/admin/news/:id/edit": ({data : { id } }) => {
    render(EditNews.print(id));
  }
});

router.resolve();