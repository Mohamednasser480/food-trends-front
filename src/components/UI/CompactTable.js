import Button from './Button';
import Typography from './Typography';

const CompactTable = ({ products, headers, buttonContent, onButtonClick }) => {
  return (
    <table className="table-compact table w-full">
      <thead>
        <tr>
          <th></th>
          {headers.map((h, index) => {
            return (
              <th key={index}>
                <Typography component="h6" className="!font-bold">
                  {h}
                </Typography>
              </th>
            );
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
            <th>{index + 1}</th>
            <td>{product.productName}</td>
            <td>{product.numberOfReviews}</td>
            <td>{(product.rate / product.numberOfReviews).toFixed(2)}</td>
            <td></td>
            <td>
              <Button variant="user-account" onClick={() => onButtonClick(product._id)}>
                {buttonContent}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          {headers.map((h, index) => {
            return (
              <th key={index}>
                <Typography component="h6" className="!font-bold">
                  {h}
                </Typography>
              </th>
            );
          })}
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default CompactTable;
