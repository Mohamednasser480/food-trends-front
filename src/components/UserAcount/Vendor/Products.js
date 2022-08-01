import React from 'react';

const products = [
  {
    _id: '62d402f875a1440160917a14',
    name: 'Asparagus',
    images:
      'https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-540x540.jpg',
    category: 'Fruits',
    price: 14.99,
    inStock: 337,
  },
  {
    _id: '62d404cc055f61d66a38d80d',
    name: 'Bell Pepper',
    images:
      'https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.9-540x540.jpg',
    category: ['Fruits', 'Veggies', 'Weekly Purchase'],
    price: 15.99,
    inStock: 340,
  },
];

export default function Products() {
  // get products using useeffect from redux products slice

  // get table comp from daisy ui
  return (
    <div className=" overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-540x540.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <span className="badge badge-sm badge-ghost">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>

            <th>
              <button className="btn btn-ghost btn-xs">Edit</button>
              <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
