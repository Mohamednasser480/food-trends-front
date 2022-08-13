import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, editSelector } from '../../store/slices/vendor';
import ActionsModel from './ActionsModel';

const ProductsComponent = ({
  _id,
  productName,
  images,
  price,
  category,
  description,
  summary,
  inStock,
  weight,
  discount,
}) => {
  const [modelState, setModelState] = useState(false);
  const editStatus = useSelector(editSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editStatus === 'Fulfilled') setModelState(false);
  }, [editStatus]);

  return (
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={`${process.env.REACT_APP_API_URI}/${images[0][0]}`}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-50">
                {Array.isArray(category) ? category.join(' ') : category}
              </div>
            </div>
          </div>
        </td>
        <td className="w-12 max-w-lg truncate">
          <span>{description}</span>
          <br />
          <span className="badge badge-sm badge-ghost mr-4">{summary}</span>
        </td>
        <td>${price}</td>
        <th>
          <button
            className="btn btn-ghost btn-xs hover:bg-red-500 hover:text-white	"
            onClick={() => {
              dispatch(deleteProduct(_id));
            }}
          >
            delete
          </button>{' '}
          <button
            className="btn btn-ghost btn-xs hover:bg-blue-500 hover:text-white"
            onClick={() => setModelState(true)}
          >
            edit
          </button>
        </th>
      </tr>
      {modelState && (
        <ActionsModel
          actionType={'EDIT'}
          showModel={modelState}
          setShow={setModelState}
          {...{
            _id,
            productName,
            price,
            summary,
            description,
            inStock,
            category,
            weight,
            discount,
          }}
        />
      )}
    </tbody>
  );
};

export default ProductsComponent;
