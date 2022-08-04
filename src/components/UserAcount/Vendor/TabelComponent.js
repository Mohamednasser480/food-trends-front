import React from "react";

const TabelComponent = ({
  productName,
  images,
  price,
  category,
  description,
  summry,
}) => {
  return (
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
                <img src={images[0]} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-50">
                {Array.isArray(category) ? category.join(" ") : category}
              </div>
            </div>
          </div>
        </td>
        <td>
          {description}
          <br />
          <span className="badge badge-sm badge-ghost">{summry}</span>
        </td>
        <td>${price}</td>
        <th>
          <button className="  btn btn-ghost btn-xs hover:bg-red-500 hover:text-white	">
            delete
          </button>{" "}
          <button className="btn btn-ghost btn-xs hover:bg-blue-500 hover:text-white	">
            edit
          </button>
        </th>
      </tr>
    </tbody>
  );
};

export default TabelComponent;
