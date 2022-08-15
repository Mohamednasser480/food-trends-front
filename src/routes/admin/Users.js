import React from "react";

export default function Users() {

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead class="bg-primary text-xs uppercase text-white  dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-4">Image</th>
            <th scope="col" class="py-3 px-6">
              Username
            </th>
            <th scope="col" class="py-3 px-6">
              StoreName
            </th>
            <th scope="col" class="py-3 px-6">
              Email
            </th>
            <th scope="col" class="py-3 px-6">
              Mobile Number
            </th>
            <th scope="col" class="py-3 px-6">
              Address
            </th>
            <th scope="col" class="py-3 px-6">
              User Type
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
            <th scope="col" class="py-3 px-6">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
            <td class="py-4 px-4">
              <img
                src="https://pps.whatsapp.net/v/t61.24694-24/298927329_581478700281260_2120462059725420128_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AVx8deUAFoSD5mOSTFBQIsvnafaHZqFagMofuLHVwfR7gg&oe=6308CA9B"
                className="h-12 w-12 rounded-full object-cover"
              />
            </td>

            <td class="py-4 px-6">Username</td>
            <td class="py-4 px-6">Storename</td>
            <th
              scope="row"
              class="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
            >
              Email@email.com
            </th>
            <td class="py-4 px-6">01010595485</td>
            <td class="py-4 px-6">Imbaba - Giza</td>
            <td class="py-4 px-6">Admin</td>
            <td class="py-4 px-6">Pending</td>
            <td class=" py-4 px-1">
              <div className="flex items-center justify-center gap-2">
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Activate
                </a>
                <a
                  href="#"
                  class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Delete
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
