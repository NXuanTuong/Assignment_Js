import HeaderAdmin from "../../../components/headerAdmin";

const AddNews = {
    print() {
        return /* html */ `
        ${HeaderAdmin.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Thêm sản phẩm
      </h2>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <a href="/admin/news" class="sm:ml-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <!-- Heroicon name: solid/check -->
          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
          Come Back
        </button>
      </a>
    </div>
    </div>
    </div>
    </header>

        <div class="mt-10 max-w-5xl m-auto">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Title</label>
                      <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                      <select id="role" name="role" autocomplete="role-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Admin</option>
                        <option>Customer</option>
                      </select>
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                    <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                    <select id="status" name="status" autocomplete="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Active</option>
                      <option>Member</option>
                      <option>Owner</option>
                    </select>
                  </div>
      
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="sub" class="block text-sm font-medium text-gray-700">Sub Titles</label>
                      <input type="text" name="sub" id="sub" autocomplete="address-level2" class="mt-1 h-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        `;
    },
};
export default AddNews;