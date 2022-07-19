import React from 'react';
import personIcon from '../../assets/personIcon.svg';
import axios from 'axios';

export default function Products() {
  const getProducts = async () => {
    let products = await axios.get('https://food-trends-server.herokuapp.com/api/v1/products');
    console.log(products.data[1].name);
  };

  return (
    <div className="flex ">
      <div className="w-10/12">
        <h1 className="text-4xl">Product List</h1>

        <table className="w-full">
          <tbody>
            <tr>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
              <td>Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
