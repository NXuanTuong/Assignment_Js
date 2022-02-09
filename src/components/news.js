import { getAll } from "../api/post";

const NewList = {
    async print() {
    // Chờ thằng axios.get truy cập API và lấy dữ liệu,
    // Lấy dữ liệu xong sẽ trả về và gán cho biến data
        const { data } = await getAll();
        return `
        ${data.map((post) => `
            <div class="border-2">
                <div class="my-4">
                    <a href="/content/${post.id}"><img
                            src="${post.img}"
                            alt="" class="m-auto"></a>
                </div>
                <div class="px-7">
                    <h3 class="title-documment"><a href="/content/${post.id}">${post.title}</a></h3>
                    <p class="main-documment">${post.title}</p>
                </div>
            </div>
        `).join("")}
    `;
    },
};
export default NewList;