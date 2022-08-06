import Button from './Button';
import Typography from './Typography';

const CompactTable = ({ userData, headers, buttonContent, onButtonClick }) => {
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
        {userData.map((user) => (
          <tr key={user.id}>
            <th>{user.id}</th>
            <td>{user.name}</td>
            <td>{user.address.street}</td>
            <td>{user.username}</td>
            <td>{user.company.name}</td>
            <td>12/16/2020</td>
            <td>
              <Button variant="secondary" onClick={() => onButtonClick(user.id)}>
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
