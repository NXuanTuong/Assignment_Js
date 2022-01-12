import HeaderAdmin from "../components/headerAdmin";
import { ListCustomer } from "../data";
const NewsAdmin = {
    print() {
        return /*html*/ `
        ${HeaderAdmin.print()}
            <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col max-w-7xl mx-auto mt-8">
<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        ${ListCustomer.map((post) => `
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">
                    ${post.name}
                  </div>
                  <div class="text-sm text-gray-500">
                    ${post.email}
                  </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">${post.title}</div>
              <div class="text-sm text-gray-500">${post.subtitle}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                ${post.status}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ${post.role}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
          </tr>

          <!-- More people... -->
        </tbody>
        `) .join("")}
      </table>
      
    </div>
  </div>
</div>
</div>
        <div class = "mt-9 mx-32">
        <a href="/admin/news/add">
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  Add news
</button>
</a>
</div>
        `
    }
}
export default NewsAdmin;