import { menuList } from "../data";

const Listmenu = {
  print() {
    return /* html */ `
        <div>
        <div class="logo">
          <a href="#">
            <img src="https://picsum.photos/110/110" alt="" class="m-auto" />
          </a>
        </div>
      </div>
      <div class="bg-[#cb7802] flex">
      <div class="mx-4 my-2">
                        <ul class="flex px-3 flex-warp">
            ${menuList
              .map((menuItem) => 
                `
                          <li>
                            <a href="#" class="menu_link hover:border-b">${menuItem}</a>
                          </li>
                    `
              )
              .join("")} 
                </ul>
            </div>
            <div class="my-2">
                        <form action="" class="flex">
                          <input type="text" class="input_search" />
                          <input type="submit" class="btn-input" value="Tìm kiếm" />
                        </form>
                      </div>
            </div>
        `;
  },
};
export default Listmenu;
