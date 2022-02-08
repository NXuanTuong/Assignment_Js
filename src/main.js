import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import content from "./pages/content";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import DashBoard from "./pages/admin/dashboard";
import NewsAdmin from "./pages/admin/news/newsAdmin";
import AddNews from "./pages/admin/news/addnews";
import EditNews from "./pages/admin/edits/editNew";
import detailsNew from "./pages/detailNew";

const router = new Navigo("/", { linksSelector: "a" });

// eslint-disable-next-line no-shadow
const render = async (content, id) => {
    // document.getElementById("header").innerHTML = Listmenu.print();
    document.getElementById("app").innerHTML = await content.print(id);
    if (content.afterPrint) {
        content.afterPrint(id);
    }
};

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/content": () => {
        render(content);
    },
    "/content/:id": (value) => {
        // const {id} = data;
        render(detailsNew, value.data.id);
    },
    "/signin": () => {
        render(SignIn);
    },
    "/signup": () => {
        render(SignUp);
    },
    "/admin/dashboard": () => {
        render(DashBoard);
    },
    "/admin/news": () => {
        render(NewsAdmin);
    },
    "/admin/news/add": () => {
        render(AddNews);
    },
    "/admin/news/:id/edit": (value) => {
        render(EditNews, value.data.id);
    },
});

router.resolve();