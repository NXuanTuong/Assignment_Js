import HeaderAdmin from "../components/headerAdmin";
import { ListCustomer } from "../data";

const EditNews = {
    print(id) {
        const result = ListCustomer.find((post) => post.id === id);
        return /*html*/`
        ${HeaderAdmin.print()}
        <div class="mt-10 max-w-5xl m-auto">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" name="first-name" value="${result.name}" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md"> 
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Title</label>
                      <input type="text" name="last-name" value="${result.title}" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" name="email-address" value="${result.email}" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-9 shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="role" class="block text-sm font-medium text-gray-700">Role</label>
                      <select id="role" name="role" autocomplete="role-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Admin</option>
                        <option>Owner</option>
                        <option>Member</option>

                      </select>
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                    <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                    <select id="status" name="status" autocomplete="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Active</option>
                      <option>Intranet</option>
                    </select>
                  </div>
      
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="sub" class="block text-sm font-medium text-gray-700">Sub Titles</label>
                      <input type="text" name="sub" id="sub" value="${result.subtitle}" autocomplete="address-level2" class="mt-1 h-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
        `
    }
}
export default EditNews;