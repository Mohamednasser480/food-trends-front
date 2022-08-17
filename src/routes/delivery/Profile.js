import { useSelector } from 'react-redux';
import { Typography } from '../../components/UI';
import { selectUserData } from '../../store/slices/auth';

const DeliveryProfile = () => {
  const { name, email, image, mobile } = useSelector(selectUserData);

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8f9fa] p-2 sm:p-10">
      <div className="mt-5 flex w-full flex-col rounded-xl bg-white p-5 shadow-xl">
        <Typography component="h4" className="text-primary">
          account details
        </Typography>
        <img src={image} alt="Profile" className="h-32 w-32 self-center rounded-full" />
        <Typography component="subtitle2" className="self-center">
          {name}
        </Typography>
        <Typography component="subtitle2">contact info</Typography>
        <Typography component="body2">{mobile}</Typography>
        <Typography component="body2">{email}</Typography>
      </div>
    </div>
  );
};

export default DeliveryProfile;
