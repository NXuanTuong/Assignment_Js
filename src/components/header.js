
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
        <div>
            <ul class="flex">
            <li>
            <a href="/" class="menu_link hover:bg-blue-500">Trang chủ</a>
          </li>
          <li>
            <a href="/about" class="menu_link hover:bg-blue-500">Tuyển sinh</a>
          </li>
          <li>
            <a href="/news" class="menu_link hover:bg-blue-500"
              >Chương trình đào tạo</a
            >
          </li>
          <li>
            <a href="/contact" class="menu_link hover:bg-blue-500">Góc sinh viên</a>
          </li>
          <li>
            <a href="" class="menu_link hover:bg-blue-500">Tuyển dụng</a>
          </li>
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
