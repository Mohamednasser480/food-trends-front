import { Typography, Button } from '../../UI';
const Profile = () => {
  return (
    <div className="flex flex-col bg-[#f8f9fa] p-10">
      <div className="flex justify-end">
        <Button variant="secondary" className="m-1">
          Edit profile
        </Button>
        <Button variant="secondary" className="m-1">
          Logout
        </Button>
      </div>

      <div className="mt-5 flex w-full flex-col items-center rounded-lg bg-white p-5">
        <img src="" alt="Profile" className="h-28 w-28 rounded-full bg-red-400" />
        <Typography component="subtitle2">Name</Typography>
        <Typography component="subtitle2">contact info</Typography>
        <Typography component="body2">Phone</Typography>
        <Typography component="body2">email</Typography>
        <Typography component="body2">address</Typography>
        <Typography component="subtitle2">Payment info</Typography>
      </div>

      <div></div>
    </div>
  );
};

export default Profile;
