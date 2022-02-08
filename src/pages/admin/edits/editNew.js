import { get, update } from "../../../api/user";
import HeaderAdmin from "../../../components/headerAdmin";

const EditNews = {
    async print(id) {
        const { data } = await get(id);
        return /* html */ `
        ${HeaderAdmin.print()}
        <div class="bg-gray-50 h-full w-full ">
        <div id="main-content" class="p-5 mt-5 relative overflow-y-auto lg:ml-64">
      <form action="#" method="POST" id="form-edit-user">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name <span class="text-red-400">*</span></label>
                <input value= "${data.name}" placeholder="Enter your first and last name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your first and last name'" type="text" name="first_name" id="user_name" class="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Position <span class="text-red-400">*</span></label>
                <input value="${data.position}" type="text" name="last_name" id="user_position" placeholder="Enter your Position" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Position'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block p-3 w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Email <span class="text-red-400">*</span></label>
                <input value="${data.email}" type="text" name="last_name" id="user_email" placeholder="Enter your Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Email'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Image <span class="text-red-400">*</span></label>
                <input value="${data.image}" type="text" name="email_address" id="user_image" placeholder="Enter your Image" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Image'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
              <label for="country" class="block text-sm font-medium text-gray-700">Country / Region <span class="text-red-400">*</span></label>
              <input value="${data.country}" type="text" name="email_address" id="user_country" placeholder="Enter your Country / Region" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Country / Region'" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-3 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>

            <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Status <span class="text-red-400">*</span></label>
                <input value="${data.country}" type="text" name="email_address" id="user_status" placeholder="Enter your Status" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your Status'" class="mt-1 focus:ring-indigo-500 p-3 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit
            </button>
          </div>
        </div>
      </form>
      </div>
      </div>
        `;
    },
    afterPrint(id) {
        const editUser = document.querySelector("#form-edit-user");
        editUser.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                name: document.querySelector("#user_name").value,
                position: document.querySelector("#user_position").value,
                email: document.querySelector("#user_email").value,
                image: document.querySelector("#user_image").value,
                country: document.querySelector("#user_country").value,
                status: document.querySelector("#user_status").value,
            });
        });
    },
};
export default EditNews;