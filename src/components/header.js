
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
            <a href="/about" class="menu_link hover:bg-blue-500">Giới Thiệu</a>
          </li>
          <li>
            <a href="/content" class="menu_link hover:bg-blue-500"
              >Tin tức</a
            >
          </li>
          <li>
            <a href="/signin" class="menu_link hover:bg-blue-500">Đăng nhập</a>
          </li>
          <li>
            <a href="/signup" class="menu_link hover:bg-blue-500">Đăng ký</a>
          </li>
          <li>
            <a href="/admin/dashboard" class="menu_link hover:bg-blue-500">Quản trị</a>
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
